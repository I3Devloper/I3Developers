/**
 * Fetches Google reviews at build time via Places API.
 * Requires GOOGLE_PLACES_API_KEY in your .env file.
 * Falls back to the static testimonials if the API key is missing or the request fails.
 */

import { testimonials } from "@/data/testimonials";
import { site } from "@/data/site";

export type GoogleReview = {
  author: string;
  rating: number;
  text: string;
  time: number; // unix timestamp
  profilePhotoUrl: string;
  relativeTime: string;
};

export type PlaceResult = {
  rating: number;
  userRatingsTotal: number;
  reviews: GoogleReview[];
};

export async function getGoogleReviews(): Promise<PlaceResult | null> {
  const apiKey = import.meta.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey || !site.googlePlaceId) return null;

  try {
    const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
    url.searchParams.set("place_id", site.googlePlaceId);
    url.searchParams.set("fields", "rating,user_ratings_total,reviews");
    url.searchParams.set("reviews_sort", "newest");
    url.searchParams.set("key", apiKey);

    const res = await fetch(url.toString());
    if (!res.ok) return null;

    const data = await res.json();
    if (data.status !== "OK") return null;

    const p = data.result;
    return {
      rating: p.rating,
      userRatingsTotal: p.user_ratings_total,
      reviews: (p.reviews ?? []).map((r: any) => ({
        author: r.author_name,
        rating: r.rating,
        text: r.text,
        time: r.time,
        profilePhotoUrl: r.profile_photo_url ?? "",
        relativeTime: r.relative_time_description
      }))
    };
  } catch {
    return null;
  }
}

/** Merge live Google reviews with static fallbacks — live reviews take priority. */
export function mergeReviews(live: PlaceResult | null) {
  if (!live || live.reviews.length === 0) {
    return { rating: 5.0, total: null, reviews: testimonials };
  }

  const liveReviews = live.reviews
    .filter((r) => r.rating >= 4 && r.text.trim().length > 40)
    .slice(0, 6)
    .map((r) => ({
      quote: r.text,
      author: r.author,
      title: "Google Reviewer",
      rating: r.rating,
      source: "Google Review",
      relativeTime: r.relativeTime
    }));

  return {
    rating: live.rating,
    total: live.userRatingsTotal,
    reviews: liveReviews.length >= 2 ? liveReviews : testimonials
  };
}

import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    description: z.string(),
    tag: z.string(),
    excerpt: z.string(),
    coverImage: z.string().optional(),
    author: z.string(),
    authorRole: z.string(),
    publishedDate: z.coerce.date(),
    modifiedDate: z.coerce.date(),
    keywords: z.union([z.array(z.string()), z.string()]).default([]).transform(v =>
      typeof v === "string" ? v.split(",").map(s => s.trim()).filter(Boolean) : v
    )
  })
});

export const collections = {
  blog: blogCollection
};

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
    author: z.string(),
    authorRole: z.string(),
    publishedDate: z.coerce.date(),
    modifiedDate: z.coerce.date(),
    keywords: z.array(z.string()).default([])
  })
});

export const collections = {
  blog: blogCollection
};

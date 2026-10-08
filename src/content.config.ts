import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Одна категория каталога = один YAML-файл: src/content/catalog/<раздел>/<категория>.yaml
const catalog = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/catalog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image().optional(),
      note: z.string().optional(),
      products: z
        .array(
          z.object({
            sku: z.string(),
            title: z.string(),
            material: z.string().optional(),
            sizes: z.string().optional(),
            images: z.array(image()).default([]),
          }),
        )
        .default([]),
    }),
});

export const collections = { catalog };

import { getCollection, type CollectionEntry } from 'astro:content';

export const sections = [
  { slug: 'woman', title: 'Женская одежда' },
  { slug: 'man', title: 'Мужская одежда' },
  { slug: 'children', title: 'Детская одежда' },
] as const;

export type Section = (typeof sections)[number];
export type Category = CollectionEntry<'catalog'> & { section: Section; slug: string };

export async function getCatalog() {
  const entries = await getCollection('catalog');
  return sections.map((section) => ({
    ...section,
    categories: entries
      .filter((entry) => entry.id.startsWith(`${section.slug}/`))
      .map((entry): Category => ({ ...entry, section, slug: entry.id.split('/')[1] }))
      .sort((a, b) => a.data.title.localeCompare(b.data.title, 'ru')),
  }));
}

/** Ссылка внутри сайта с учётом base (временный адрес на GitHub Pages). */
export function href(path: string) {
  return import.meta.env.BASE_URL.replace(/\/$/, '') + path;
}

export function pluralModels(n: number) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return `${n} модель`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${n} модели`;
  return `${n} моделей`;
}

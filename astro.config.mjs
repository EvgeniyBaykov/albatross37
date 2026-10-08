// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://albatross37.ru',
  // Для временного адреса вида user.github.io/albatross37 задаётся BASE_PATH=/albatross37
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'always',
  // Во временной сборке sitemap не нужен: адреса в нём были бы с чужим префиксом
  integrations: process.env.BASE_PATH ? [] : [sitemap()],
});

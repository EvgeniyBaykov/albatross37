# albatross37 — сайт ООО «Альбатрос»

Статический каталог трикотажа на Astro 7. Описание структуры и инструкция «как добавить товар» — в `README.md`.

## Правила

- Контент каталога — только в YAML (`src/content/catalog/<раздел>/*.yaml`), схема в `src/content.config.ts`. Фото — рядом, в `photos/`, имена `<артикул>-<n>.<ext>`.
- Контакты и реквизиты — только в `src/data/company.ts`, в шаблонах не дублировать.
- Адреса страниц совпадают со старым WordPress-сайтом (`/woman/woman-dress/` и т.п.) — не менять без нужды, `trailingSlash: 'always'`.
- Внутренние ссылки — через `href()` из `src/data/catalog.ts` (учитывает `BASE_PATH`).
- После правок: `npm run check && npm run build`.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Full documentation: https://docs.astro.build

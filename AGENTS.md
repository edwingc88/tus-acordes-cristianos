# AGENTS.md

Sitio estático Astro 5 ("Tus Acordes Cristianos") — acordes/letras de canciones cristianas. Sin adaptador, sin SSR, sin test runner, sin CI, sin git remote.

## Comandos

- `npm run dev` → Servidor local en localhost:4321.
- `npm run build` → Genera la build estática en `dist/`.
- `npm run preview` → Sirve la build generada.
- `npm run lint` → Ejecuta ESLint sobre el proyecto.
- `npm run format` / `npm run format:check` → Formateo de código con Prettier.

## Configuración y Stack

- **Tailwind CSS v4:** Configurado vía `@tailwindcss/vite`. Colores de tema en el bloque `@theme` de `src/styles/global.css`.
- **Páginas principales:** `index`, `artist`, `songs`, `login`, `404` en `src/pages/`.
- **Layout:** `src/layouts/Layout.astro` integra `Header.astro` y `Footer.astro`.
- **Datos:** Datos estáticos en `src/consts/artists.ts` y tipos en `src/types/artist.ts`.

## Estado del Proyecto

- Metadatos SEO, Open Graph y canónicos actualizados para **Tus Acordes Cristianos**.
- Imagen de vista previa configurada en `/og.jpg`.
- ESLint y Prettier funcionando correctamente.

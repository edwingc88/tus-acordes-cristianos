# AGENTS.md

Sitio estático Astro 5 ("Tus Acordes Cristianos") — acordes/letras de canciones cristianas. Sin adaptador, sin SSR, sin test runner, sin CI, sin git remote (un solo commit local en `master`).

## Comandos

- `npm run dev` → localhost:4321; `npm run build` → `dist/` (funciona, ~11s, 5 páginas); `npm run preview` sirve la build.
- `npm run lint` — **roto actualmente**: `eslint.config.js` define `languageOptions.parser: "astro-eslint-parser"` como string, pero la flat config de ESLint requiere el objeto del parser. Crashea en cada ejecución (`Expected object with parse()`). Corregir importando `astro-eslint-parser` y pasando el módulo antes de fiarte del resultado del lint.
- `npm run format:check` / `format` — **falla actualmente**: `src/pages/login.astro` (~línea 309) tiene una `s` suelta después de `color: var(--text-light);s`, lo cual es un error de sintaxis CSS que crashea Prettier. Corregir ese typo primero.
- `npm run astro check` — requiere `@astrojs/check` + `typescript`, que no están instalados (pide instalarlos interactivamente). El typecheck no forma parte del flujo por defecto; `npm run build` es la verificación real.

## Configuración: qué es real y qué es muerto

- Real: `astro.config.mjs` (Tailwind v4 vía `@tailwindcss/vite`, `devToolbar` deshabilitado), `eslint.config.js` (flat config, `comma-dangle: always-multiline`), `.prettierrc` (solo añade `prettier-plugin-astro` + el parser de astro; el resto son los defaults de Prettier), `tsconfig.json` (`astro/tsconfigs/strict` + path alias `@/*` → `src/*`).
- **`confing.js` en la raíz del repo es un archivo scratch muerto** (JSON de prettier y settings de VS Code comentados dentro de un template literal). Nada lo carga. No editarlo esperando un efecto; usar `.prettierrc` / `.vscode/settings.json`.
- `.astro/` es generado (gitignored) por `astro sync`/dev/build — no editar a mano.

## Datos del stack

- Tailwind v4 es CSS-first: los colores del tema viven en el bloque `@theme` de `src/styles/global.css` (`primary`, `secondary`, `accent`, `bg`, `text-dark`, `text-light`) → utilidades como `text-primary`, `bg-secondary`, `text-text-light`. No existe `tailwind.config.js`.
- Páginas: `index`, `artist`, `songs`, `login`, `404` en `src/pages/`; el chrome compartido en `src/layouts/Layout.astro` (usa `src/sections/Header.astro` + `Footer.astro`).
- Componentes de iconos (`src/components/icons/*.astro`) aceptan una prop `class` vía `const { class: className } = Astro.props`.
- Los datos son estáticos: el array `ARTISTS` en `src/consts/artists.ts`, el tipo `Artist` en `src/types/artist.ts`. Se usan tanto el alias `@/` como imports relativos en el código.

## Estado obsoleto/roto conocido (copiado de un proyecto anterior — un sitio de "evento de boxeo de Ibai Llanos" / infolavelada.com)

No tratar los metadatos o rutas de imagen existentes como patrones correctos a copiar:

- Los metas `description` y `author` por defecto de `Layout.astro` referencian el evento de boxeo / "Ibai Llanos" / "RIOTEC"; los metas `description` y `theme-color` están duplicados en el head.
- Los canonicals en `index`, `artist`, `login`, `songs` apuntan a `infolavelada.com`; `404.astro` usa `tuacordescristianos.com` (sin guiones) y su descripción también menciona el evento de boxeo. La OG url usa `tus-acordes-cristianos.com`.
- El meta de OG image apunta a `/og-image.jpg`, pero solo existe `public/og.jpg`.
- Las imágenes en `Main.astro` usan `src="/public/*.webp"` — incorrecto; Astro sirve `public/` en la raíz, así que debería ser `/monte-santo.webp` etc.
- El copyright del footer dice "Escalas Cristianas" (otro nombre de marca); `src/components/icons/ArtistasIcon copy.astro` es un duplicado muerto sin uso.

## Editor

`.vscode/settings.json`: format-on-save con Prettier, ESLint valida `astro` también. Extensión recomendada: `astro-build.astro-vscode`.

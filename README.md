# Farmacia Bielsa Gutiérrez

Landing page de demostración para una farmacia ficticia de Huesca. Está construida con **Astro + TypeScript**, es estática y está pensada para desplegarse en **GitHub Pages**.

> ⚠️ Todos los datos (nombre, dirección, teléfono, email, redes, servicios, testimonios y cifras) son inventados. El sitio incluye un aviso visible y `noindex` para que no se confunda con una farmacia real.

## Stack

- [Astro](https://astro.build/) con salida estática.
- TypeScript.
- CSS propio (sin frameworks).
- Tipografías autoalojadas: **Fraunces** para los títulos y **Manrope** para el texto.
- Imágenes de [Unsplash](https://unsplash.com/) descargadas y optimizadas a WebP para que la web sea ligera.

## Desarrollo

Requiere Node.js 22 o superior.

```bash
npm install
npm run dev
```

La web estará en `http://localhost:4321`.

```bash
npm run build    # genera dist/
npm run preview  # previsualiza el build
```

## Estructura

```text
src/
  components/        # Secciones y piezas de la landing
  data/site.ts       # Datos del negocio, servicios, horario y redes
  layouts/           # Layout base con SEO, fuentes y scripts
  pages/index.astro  # Página principal
  styles/global.css  # Estilos y responsive
public/
  images/            # Imágenes optimizadas
  favicon.svg
.github/workflows/
  deploy.yml         # Despliegue automático en GitHub Pages
```

Para cambiar teléfono, dirección, email, Instagram, horario o servicios, edita `src/data/site.ts`.

## Despliegue en GitHub Pages

1. Crea un repositorio vacío en GitHub, por ejemplo `farmacia-bielsa-gutierrez` (sin README ni licencia).
2. Desde esta carpeta:

   ```bash
   git init
   git add .
   git commit -m "Landing de Farmacia Bielsa Gutiérrez"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/farmacia-bielsa-gutierrez.git
   git push -u origin main
   ```

3. En GitHub, entra en **Settings → Pages** y elige **Source: GitHub Actions**.
4. El workflow `.github/workflows/deploy.yml` se ejecutará con cada push a `main`.
5. La web quedará en `https://TU-USUARIO.github.io/farmacia-bielsa-gutierrez/`.

La configuración detecta automáticamente el nombre del repositorio y ajusta la ruta base, así que no hay que tocar nada si el repo cambia de nombre.

### Dominio propio o repo de usuario

- **Repo de usuario** (`TU-USUARIO.github.io`): la base se detecta como `/` automáticamente.
- **Dominio propio**: añade `SITE_URL` y `BASE_PATH=/` al paso de build del workflow (o edita `astro.config.mjs`).

```yaml
- name: Build
  run: npm run build
  env:
    SITE_URL: https://tudominio.com
    BASE_PATH: /
```

## Notas

- El formulario es estático y prepara un email con `mailto:` (GitHub Pages no ejecuta backend). Para producción real, conéctalo a Formspree, Netlify Forms o similar.
- El mapa es una imagen estática de OpenStreetMap con enlace a Google Maps, sin API key ni iframes. La ubicación es ficticia.
- Si quieres que la demo se indexe en buscadores, elimina la etiqueta `robots` con `noindex` en `src/layouts/BaseLayout.astro`.
- Las imágenes se pueden sustituir manteniendo los mismos nombres en `public/images/` o actualizando las rutas en los componentes.
- Recuerda sustituir el teléfono, email, dirección e Instagram de ejemplo por los datos reales antes de usar la web.
- Fotografías de Unsplash, usadas bajo su licencia. Mapa: © colaboradores de OpenStreetMap.

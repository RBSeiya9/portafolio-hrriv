# Portafolio HRRIV

Este proyecto es una web estática que se puede publicar fácilmente en GitHub Pages, Netlify o Vercel.

## Archivos principales

- `index.html` - página principal
- `app.js` - script principal
- `style.css` - estilos principales
- `hero-bg.png` - imagen de fondo
- `backend/` - carpeta adicional con otro sitio local

## Pasos recomendados para publicar

### 1) Publicar en GitHub Pages

1. Crea una cuenta en GitHub si no tienes una.
2. Crea un nuevo repositorio en GitHub.
3. Sube los archivos del proyecto al repositorio.
   - O bien usa la interfaz web de GitHub para subir los archivos, o instala Git y ejecuta los comandos:

```bash
git init
git add .
git commit -m "Publicar sitio"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
git push -u origin main
```

4. En GitHub, abre el repositorio y ve a `Settings` → `Pages`.
5. En `Source`, selecciona la rama `main` y la carpeta `/root`.
6. Guarda y espera a que aparezca la URL pública.

### 2) Publicar en Netlify

1. Ve a https://app.netlify.com/ y regístrate.
2. Crea un nuevo sitio desde Git.
3. Conecta tu repositorio GitHub.
4. Selecciona este proyecto y despliega.

Otra opción: arrastra la carpeta del proyecto al área de `Sites` en Netlify.

### 3) Publicar en Vercel

1. Ve a https://vercel.com/ y regístrate.
2. Conecta tu cuenta de GitHub.
3. Importa el repositorio.
4. Vercel detecta el proyecto estático y publica el sitio.

## Vista previa local

Si quieres ver la web localmente antes de publicarla, abre un terminal en la carpeta del proyecto y ejecuta:

```bash
python -m http.server 8000
```

Luego abre en tu navegador:

```
http://localhost:8000
```

## Nota

Para que la web sea accesible públicamente, necesitas subirla a un servicio de hosting (GitHub Pages, Netlify o Vercel). Si necesitas, puedo ayudarte paso a paso con el proceso de GitHub Pages.

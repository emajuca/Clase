# Mi Sitio - Plantilla para GitHub Pages

Pequeña plantilla estática lista para publicar en GitHub Pages.

Contenido:
- index.html
- styles.css
- script.js

Pasos para crear el repositorio y publicar:

1) Crear un repositorio nuevo en GitHub (por la web) o con la CLI `gh`:
   - Por web: GitHub -> New repository -> nombre, público/privado -> Create repository.
   - Con gh (instala https://cli.github.com/):
     ```
     gh repo create NOMBRE-REPO --public --source=. --push
     ```
     (Autentica con `gh auth login` si es necesario.)

2) Si no usaste `gh`, desde tu máquina:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/NOMBRE-REPO.git
   git push -u origin main
   ```

3) Activar GitHub Pages:
   - Ve a la pestaña Settings del repo -> Pages.
   - En "Source" selecciona la branch `main` y la carpeta `/ (root)`, guarda.
   - Tras unos minutos la página estará en: `https://TU_USUARIO.github.io/NOMBRE-REPO/`

   Alternativa: publicar desde la rama `gh-pages` si prefieres, o poner los archivos dentro de la carpeta `docs/` y elegir `main / docs` como source.

4) Opcional: si quieres dominio propio, agrega un archivo `CNAME` con el dominio en el repo root y configura DNS.

Si quieres que yo suba estos archivos directamente a un repo nuevo, dime:
- owner/repo (por ejemplo: emajuca/mi-web)
- si el repo ya exista o quieres que lo cree (no puedo crear repositorios en tu cuenta sin acceso; en ese caso debes crear el repo y darme owner/repo o usar la CLI `gh repo create` localmente)
- si prefieres que la publicación sea desde `main` (root) o desde `gh-pages`.

¡Dime cómo quieres proceder y lo hago por ti!

const fs = require('fs');
const path = require('path');

function generateStaticPage() {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Página Estática</title>
      <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
        h1 { color: #333; }
      </style>
    </head>
    <body>
      <h1>¡Bienvenido a mi página estática!</h1>
      <p>Esta página fue generada con Node.js y desplegada con GitHub Actions.</p>
    </body>
    </html>
  `;

  const outputDir = path.join(__dirname, '../public');
  const outputPath = path.join(outputDir, 'index.html');

  // Crear directorio public si no existe
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  // Escribir el archivo HTML
  fs.writeFileSync(outputPath, htmlContent);
  console.log('Página estática generada en public/index.html');
}

module.exports = { generateStaticPage };

// Ejecutar si es el script principal
if (require.main === module) {
  generateStaticPage();
}
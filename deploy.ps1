# ================================
# 🐼 Warrior Panda Studio - Deploy Script (PowerShell)
# ================================

Write-Host "🔨 Generando build de producción..."
npm run build

# Verifica si carpeta www existe
if (!(Test-Path -Path "./www/index.html")) {
    Write-Error "❌ La carpeta 'www' no fue generada. Asegúrate de tener 'outputPath': 'www' en angular.json"
    exit
}

Write-Host "🚀 Cambiando a rama gh-pages..."
git checkout --orphan gh-pages

Write-Host "📦 Añadiendo archivos del build..."
git --work-tree www add --all
git --work-tree www commit -m "Deploy"

Write-Host "☁️ Subiendo a GitHub..."
git push origin HEAD:gh-pages --force

Write-Host "↩️ Volviendo a la rama main..."
git checkout main

Write-Host "✅ ¡Deploy completo en GitHub Pages!"

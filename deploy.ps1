# ================================
# Warrior Panda Studio - Deploy Script (PowerShell)
# ================================

Write-Host "Generando build de producción..."
npm run build

# Verifica si la carpeta 'www' existe
if (!(Test-Path -Path "./www/index.html")) {
    Write-Error "La carpeta 'www' no fue generada. Asegúrate de tener 'outputPath': 'www' en angular.json"
    exit
}

# Crea el archivo CNAME automáticamente
Write-Host "Generando archivo CNAME para www.warriorpandastudio.com..."
Set-Content -Path "www/CNAME" -Value "www.warriorpandastudio.com"

Write-Host "Cambiando a rama gh-pages..."
git checkout --orphan gh-pages

Write-Host "Añadiendo archivos del build..."
git --work-tree www add --all
git --work-tree www commit -m "Deploy"

Write-Host "Subiendo a GitHub..."
git push origin HEAD:gh-pages --force

Write-Host "Volviendo a la rama main..."
git checkout main

Write-Host "Limpiando carpeta de build local..."
Remove-Item -Recurse -Force ./www

Write-Host "Deploy completo. Tu web estará disponible pronto en:"
Write-Host "https://www.warriorpandastudio.com"


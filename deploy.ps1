# ================================
# Warrior Panda Studio - Deploy Script (PowerShell Pro)
# ================================

# 1. Detectar rama actual
$originalBranch = git rev-parse --abbrev-ref HEAD
Write-Host "Rama actual: $originalBranch"

# 2. Generar build
Write-Host "Generando build de producción..."
npm run build

# 3. Verificar carpeta 'www'
if (!(Test-Path -Path "./www/index.html")) {
    Write-Error "La carpeta 'www' no fue generada. Asegúrate de tener 'outputPath': 'www' en angular.json"
    exit
}

# 4. Crear archivo CNAME
Write-Host "Generando archivo CNAME para www.warriorpandastudio.com..."
Set-Content -Path "www/CNAME" -Value "www.warriorpandastudio.com"

# 5. Crear rama gh-pages (sin historial)
Write-Host "Cambiando a rama gh-pages temporal..."
git checkout --orphan gh-pages

# 6. Eliminar todo lo que no sea la carpeta de build
Get-ChildItem -Exclude www -Force | Remove-Item -Force -Recurse

# 7. Commit del build
Write-Host "Añadiendo archivos del build..."
git --work-tree www add --all
git --work-tree www commit -m "Deploy"

# 8. Push forzado
Write-Host "Subiendo a GitHub..."
git push origin HEAD:gh-pages --force

# 9. Volver a la rama original
Write-Host "Volviendo a la rama $originalBranch..."
git checkout $originalBranch

# 10. Limpiar carpeta de build local
Write-Host "Limpiando carpeta de build local..."
Remove-Item -Recurse -Force ./www

Write-Host "Deploy completo. Tu web estará disponible pronto en:"
Write-Host "https://www.warriorpandastudio.com"

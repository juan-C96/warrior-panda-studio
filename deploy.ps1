# ================================
# Warrior Panda Studio - Deploy Script (Seguro)
# ================================

# 1. Variables
$deployDir = ".deploy-temp"
$repoUrl = "https://github.com/juan-C96/warrior-panda-studio.git"
$deployBranch = "gh-pages"
$customDomain = "warriorpandastudio.com"

# 2. Generar el build
Write-Host "Generando build de producción..."
npm run build

# 3. Verificar el build
if (!(Test-Path -Path "./www/index.html")) {
    Write-Error "La carpeta 'www' no fue generada. Verifica tu build."
    exit 1
}

# 4. Crear archivo CNAME
Write-Host "Agregando archivo CNAME..."
Set-Content -Path "www/CNAME" -Value $customDomain

# 5. Preparar carpeta temporal
Write-Host "Preparando carpeta temporal para deploy..."
if (Test-Path $deployDir) {
    Remove-Item -Recurse -Force $deployDir
}
New-Item -ItemType Directory -Path $deployDir | Out-Null
Copy-Item -Recurse -Force ./www/* $deployDir

# 6. Inicializar repo temporal
Set-Location $deployDir
git init
git remote add origin $repoUrl
git checkout -b $deployBranch
git add .
git commit -m "Deploy seguro"
git push origin $deployBranch --force
Set-Location ..

# 7. Limpiar carpetas temporales
Remove-Item -Recurse -Force $deployDir
Remove-Item -Recurse -Force ./www

# 8. Fin
Write-Host "Deploy completado correctamente."
Write-Host "Tu sitio estará disponible en: https://$customDomain"

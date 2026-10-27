@echo off
chcp 65001 >nul
title EduToken LMS - Iniciando en Google Chrome

echo =======================================================
echo    🎓 EduToken LMS - Plataforma Educativa Oficial
echo =======================================================
echo.

:: 1. Verificar si Node.js está disponible
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [AVISO] Node.js no está instalado en este equipo.
    echo Por favor instala Node.js (https://nodejs.org/) para ejecutar el proyecto.
    pause
    exit /b 1
)

:: 2. Instalar dependencias si no existen
if not exist "node_modules\" (
    echo [INFO] Primera ejecución detectada. Instalando librerías necesarias...
    call npm install
)

:: 3. Iniciar el servidor de desarrollo en segundo plano
echo [INFO] Levantando el servidor local en el puerto 3000...
start "EduToken LMS Server" /min cmd /c "npm run dev"

:: Esperar a que inicialice el servidor
timeout /t 3 /nobreak >nul

:: 4. Abrir en Google Chrome
echo [INFO] Abriendo en Google Chrome...
set CHROME_LAUNCHED=0

if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" (
    start "" "%ProgramFiles%\Google\Chrome\Application\chrome.exe" "http://localhost:3000"
    set CHROME_LAUNCHED=1
) else if exist "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" (
    start "" "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" "http://localhost:3000"
    set CHROME_LAUNCHED=1
) else if exist "%LocalAppData%\Google\Chrome\Application\chrome.exe" (
    start "" "%LocalAppData%\Google\Chrome\Application\chrome.exe" "http://localhost:3000"
    set CHROME_LAUNCHED=1
)

if %CHROME_LAUNCHED% equ 0 (
    start chrome "http://localhost:3000" 2>nul || start http://localhost:3000
)

echo.
echo =======================================================
echo  ✅ Plataforma lista y abierta en Google Chrome!
echo  👉 Dirección: http://localhost:3000
echo =======================================================
echo.
timeout /t 4 >nul
exit /b 0

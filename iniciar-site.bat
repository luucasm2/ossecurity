@echo off
cd /d "%~dp0"
echo.
echo OS Seguranca e Tecnologia - Projeto React
if not exist "node_modules" (
  echo Instalando dependencias...
  call npm install
  if errorlevel 1 (
    echo Nao foi possivel instalar as dependencias. Verifique sua conexao e Node.js.
    pause
    exit /b 1
  )
)
echo Iniciando servidor...
call npm run dev
pause

@echo off
title DIGITHECT SOFTWARE SERVICES - LUXURY SHOWCASE
echo =================================================================
echo   DIGITHECT SOFTWARE SERVICES - ENTERPRISE SHOWCASE
echo =================================================================
echo.
echo Launching Digithect in your default browser...
start "" "%~dp0index.html"
echo.
echo If you prefer a local HTTP server on port 3000, starting Node server...
node "%~dp0server.js"
pause


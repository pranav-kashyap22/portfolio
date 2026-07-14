@echo off
title Pranav's Portfolio
cd /d "%~dp0"
echo Starting Portfolio Server...
start "" "http://localhost:5173"
npm run dev

@echo off
echo AGRAWAL KHANDELWAL & ASSOCIATES - PREVIEW TOOL
echo.
echo Step 1: Installing website engine...
call npm install
echo.
echo Step 2: Starting the preview server...
echo.
echo SUCCESS! Once you see "Ready", open: http://localhost:3000
echo.
npm run dev
pause
@echo off
echo -------------------------------
echo React + TypeScript Auto Deploy Script
echo -------------------------------

:: رابط الريبو
set REPO=https://github.com/ahmed44044/Ecommerce.git

:: تحقق من وجود Node.js
node -v >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Node.js not found! Install it first.
    pause
    exit /b
)

:: تحقق من وجود Git
git --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Git not found! Install it first.
    pause
    exit /b
)

:: تحقق من وجود Vercel CLI
vercel --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Installing Vercel CLI...
    npm install -g vercel
)

:: تثبيت الباكج إذا لم يكن موجود
echo Installing dependencies...
npm install

:: عمل Build للمشروع
echo Building React project...
npm run build
if %ERRORLEVEL% NEQ 0 (
    echo Build failed! Fix errors first.
    pause
    exit /b
)

:: تحقق من وجود مجلد .git
if not exist ".git" (
    echo Initializing Git repository...
    git init
)

:: إضافة كل الملفات وعمل Commit
git add .
git commit -m "Auto deploy commit" >nul 2>&1

:: إضافة remote (أو تحديثه)
git remote remove origin >nul 2>&1
git remote add origin %REPO%
git branch -M main

:: دفع المشروع لـ GitHub
echo Pushing to GitHub...
git push -u origin main --force

:: نشر المشروع على Vercel
echo Deploying to Vercel...
vercel --prod --confirm

echo -------------------------------
echo Deployment Completed Successfully!
echo -------------------------------
pause
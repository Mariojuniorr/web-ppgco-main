cd /d "c:\git\TCC\web-ppgco-main"
if exist .git rmdir /s /q .git
git init
git remote add origin https://github.com/Mariojuniorr/web-ppgco-main.git
git checkout -b main
git add .
git commit -m "build: flatten repository root structure (next.js at root)"
git push -f -u origin main

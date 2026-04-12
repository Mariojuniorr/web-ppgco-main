@echo off
mkdir src\components\features\auth 2>nul
move src\components\LoginForm.tsx src\components\features\auth\
move src\components\MacOSDock.tsx src\components\layout\
rmdir /s /q src\app\loader
del src\app\(main)\dashboard\dashboard.module.css
del src\app\(main)\dashboard\layout.module.css

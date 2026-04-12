git checkout -b feat/login-restructure
git add src/features/auth/components/AuthLayout.tsx src/features/auth/components/LoginForm.tsx src/app/page.tsx
git commit -m "feat(auth): extract AuthLayout and redesign login form"

git checkout -b feat/solicitar-cadastro
git add src/features/auth/components/SolicitarCadastroForm.tsx src/app/solicitar-cadastro/page.tsx
git commit -m "feat(auth): implement solicitar cadastro page"

git checkout -b feat/recuperar-senha
git add src/features/auth/components/RecuperarSenhaForm.tsx src/app/recuperar-senha/page.tsx
git commit -m "feat(auth): implement recuperar senha page"

git push -u origin feat/login-restructure
git push -u origin feat/solicitar-cadastro
git push -u origin feat/recuperar-senha

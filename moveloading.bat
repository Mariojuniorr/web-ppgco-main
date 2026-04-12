move src\app\(main)\loading.tsx src\app\loading.tsx
del src\app\(auth)\loading.tsx
git add src\app\loading.tsx src\app\(main)\loading.tsx src\app\(auth)\loading.tsx
git commit -m "refactor: extract to global loading boundary"
git push

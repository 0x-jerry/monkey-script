yarn version --patch

yarn build
node scripts/release.js

git add .
git commit -m 'chore: release'
git push
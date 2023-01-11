#!/bin/sh
IFS= read -r -p "Enter a commit message: " commit_message

npm run build

echo

git checkout main
cp CNAME ./build/CNAME
git add .
git commit -m "$commit_message"
git push origin main

echo
git branch -D production
git checkout -b production
git merge main
git add .
git commit -m "$commit_message"
git subtree push --prefix build origin production

echo

git checkout main
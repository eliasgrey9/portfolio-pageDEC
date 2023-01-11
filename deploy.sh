#!/bin/sh
IFS= read -r -p "Enter a commit message: " commit_message

npm run deploy

echo

git checkout main
cp CNAME build
git add .
git commit -m "$commit_message"
git push origin main

echo

git checkout production
git merge main
git add .
git commit -m "$commit_message"
git subtree push --prefix build origin production

echo

git checkout main
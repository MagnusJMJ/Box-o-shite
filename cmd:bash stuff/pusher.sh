#!/bin/sh
cd ~/Documents/GitHub || echo "Error: Directory not found."
echo "List of repositories:"
ls -d */
echo "Which of these repositories would you like to commit to?"

read repository

cd $repository
echo "Current differences in local branch:"
git status

echo "What message should the commit have? (remember quotation marks!)"

read message

echo "NB! continuing will push all changes in $repository with the message: $message. Are you sure? (y/n)"
read confirmation
if [ $confirmation == "y" ]; then
  git add --all
  git commit -m $message
  git push --all
else
  exit
fi

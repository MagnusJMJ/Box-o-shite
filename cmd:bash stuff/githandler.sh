#!/bin/sh
cd ~/Documents/GitHub || echo "ERROR: You've either moved or deleted the GitHub folder."
echo "*****************************************************"
echo "* Magnus' Super Happy Git Handler Go-Go Supreme(tm) *"
echo "*****************************************************"
printf "\n"
ls -d */
printf "\n"
echo "What would you like to do? (push/pull/status [repository])"
read action repository message
if [[ $action == "push" ]]; then
  if [[ $repository == "all" ]]; then
    for folder in */; do
      cd $folder
      printf "\n"
      echo "$folder"
      printf "\n"
      git add --all
      git commit -m "$message"
      git push --all
      cd ..
    done
    echo "All local changes have been pushed!"
  else
    cd $repository
    printf "\n"
    echo "$repository"
    printf "\n"
    git add --all
    git commit -m "$message"
    git push --all
    cd ..
    echo "Local changes in $repository have been pushed!"
  fi
elif [[ $action == "pull" ]]; then
  if [[ $repository == "all" ]]; then
    for folder in */; do
      cd $folder
      printf "\n"
      echo "$folder"
      printf "\n"
      git pull
      cd ..
    done
    echo "All changes have been pulled!"
  else
    cd $repository
    printf "\n"
    echo $repository
    printf "\n"
    git pull
    cd ..
    echo "Changes in $repository have been pulled!"
  fi
elif [[ $action == "status" ]]; then
  if [[ $repository == "all" ]]; then
    for folder in */; do
      cd $folder
      printf "\n"
      echo $folder
      git status
      cd ..
    done
    echo "All repositories checked!"
  else
    cd $repository
    printf "\n"
    echo $repository
    git status
    cd ..
    echo "$repository has been checked!"
  fi
fi

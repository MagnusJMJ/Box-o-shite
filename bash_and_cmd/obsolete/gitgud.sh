#!/bin/bash

startScreen()
{
  cd ~/Documents/GitHub || ( echo "ERROR: You've either moved or deleted the GitHub folder. Correct the path in the script." && exit )
  clear
  echo "****************************************"
  echo "* Magnus' Mean Lean GitGud(tm) Machine *"
  echo "****************************************"
  printf "\n"

  echo "REPOSITORIES:"
  for folder in */; do
    echo " * $folder"
  done
  printf "\n"

  echo "ACTIONS:"
  echo " * push"
  echo " * pull"
  echo " * check"
  echo " * quit"
  printf "\n"

  echo "Commands go: [action] [repository] \"[message (for pushing)]\""
  printf "\n"

  read -p "Type a command: " action repo msg
  if [[ $action == "push" ]]; then
    pusher $repo $msg
  elif [[ $action == "pull" ]]; then
    puller $repo
  elif [[ $action == "check" ]]; then
    checker $repo
  elif [[ $action == "quit" ]]; then
    exit
    # killall Terminal
  else
    read -t 2 -r -n 1 -p "Invalid command!"
    startScreen
  fi
}

pusher()
{
  if [[ -z $2 ]]; then
    read -p "Type a message for your commit: " newmsg
  fi
  clear
  if [[ $1 == "all" ]]; then
    for folder in */; do
      echo "$folder"
      cd $folder
      git add --all
      if [[ -z $2 ]]; then
        git commit -m "$newmsg"
      else
        git commit -m "$2"
      fi
      git push --all
      cd ..
      printf "\n"
    done
    read -t 5 -n 1 -p "Local changes pushed to all repositories! Returning to menu..."
  else
    echo "$1"
    cd $1 || ( read -t 5 -n 1 -p "Invalid repository! Returning to menu..." && startScreen )
    git add --all
    if [[ -z $2 ]]; then
      git commit -m "$newmsg"
    else
      git commit -m "$2"
    fi
    git push --all
    printf "\n"
    read -t 5 -n 1 -p "Local changes pushed to $1! Returning to menu..."
  fi
  startScreen
}

puller()
{
  clear
  if [[ $1 == "all" ]]; then
    for folder in */; do
      echo "$folder"
      cd $folder
      git pull
      cd ..
      printf "\n"
    done
    read -t 5 -n 1 -p "Online changes pulled from all repositories! Returning to menu..."
  else
    echo "$1"
    cd $1 || ( read -t 5 -n 1 -p "Invalid repository! Returning to menu..." && startScreen )
    git pull
    printf "\n"
    read -t 5 -p "Online changes pulled from $1! Returning to menu..."
  fi
  startScreen
}

checker()
{
  clear
  if [[ $1 == "all" ]]; then
    for folder in */; do
      echo "$folder"
      cd $folder
      git status
      cd ..
      printf "\n"
    done
    read -n 1 -p "All differences checked! Press any key to return to menu..."
  else
    echo "$1"
    cd $1 || ( read -t 5 -n 1 -p "Invalid repository! Returning to menu..." && startScreen )
    git status
    printf "\n"
    read -n 1 -p "Differences in $1 checked! Press any key to return to menu..."
  fi
  startScreen
}

startScreen

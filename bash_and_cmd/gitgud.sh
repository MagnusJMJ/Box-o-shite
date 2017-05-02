#!/bin/bash

# TODO:
#  * Implement repository initialization

# startup screen - all actions return to here when done
startScreen()
{
  ## NB! Replace path here with the path to your local repository folder ##
  cd ~/Documents/GitHub || ( echo "ERROR: You've either moved or deleted the GitHub folder. Correct the path in the script." && exit )

  clear
  echo "*********************************************"
  echo "* Magnus' Mean Lean GitGud(tm) Machine v3.2 *"
  echo "*********************************************"
  printf "\n"

  # lists subfolders (repositories) in the current folder
  echo "REPOSITORIES:"
  for folder in */; do
    echo " * $folder"
  done
  printf "\n"

  # lists possible commands
  echo "OPTIONS:"
  for option in "make (UNIMPLEMENTED)" "clone" "push" "pull" "check" "quit"; do
    echo " * $option"
  done
  printf "\n"

  echo "Commands go: [option] [repository] \"[message (commits only)]\""
  printf "\n"

  #reads user input and sends it to the handler function
  read -p "Type a command: " action repo msg
  handler $action $repo "$msg"
}

# handler function starts appropriate functions and returns to menu when they're done.
handler()
{
  clear
  # if you type 'all' as repository, will loop through all repositories performing the command
  if [ $2 == "all" ]; then
    for f in */; do
      echo $f
      cd $f
      $1 $f "$3"
      cd ..
      printf "\n"
    done
  else
    echo $2
    cd $2 || ( read -t 5 -n 1 -p "Invalid repository! Returning to menu..." && startScreen )
    $1 $2 "$3"
    cd ..
    printf "\n"
  fi
  read -r -n 1 -p "Action successfully performed! Press any key to return to menu..."
  startScreen
}

# Functions for each possible command
make()
{
  echo "UNIMPLEMENTED"
  read -r -n 1 -p "Press any key to return to menu..."
}
clone()
{
  git clone "$1" || echo "Invalid clone link!"
}
push()
{
  git add --all
  git commit -m "$2" || git commit -m "No message specified."
  git push --all
}
pull()
{
  git pull
}
check()
{
  git status
}
quit()
{
  exit
}

#Initializes startScreen
startScreen

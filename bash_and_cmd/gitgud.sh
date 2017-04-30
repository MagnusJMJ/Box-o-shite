#!/bin/bash

# TODO:
#  * Implement repository initialization
#  * Implement repository cloning
#  * Fix commit messages being cut off

# startup screen - all actions return to here when done
startScreen()
{
  cd ~/Documents/GitHub || ( echo "ERROR: You've either moved or deleted the GitHub folder. Correct the path in the script." && exit )
  clear
  echo "*********************************************"
  echo "* Magnus' Mean Lean GitGud(tm) Machine v3.0 *"
  echo "*********************************************"
  printf "\n"

  # lists subfolders (repositories) in the current folder
  echo "REPOSITORIES:"
  for folder in */; do
    echo " * $folder"
  done
  printf "\n"

  # lists possible commands
  echo "FUNCTIONS:"
  for option in "maker (UNIMPLEMENTED)" "cloner (UNIMPLEMENTED)" "pusher" "puller" "checker" "quit"; do
    echo " * $option"
  done
  printf "\n"

  echo "Commands go: [function] [repository] \"[message (for pushing)]\""
  printf "\n"

  #reads user input and sends it to the handler function
  read -p "Type a command: " action repo msg
  handler $action $repo $msg
}

# hander function starts appropriate functions and returns to menu when they're done.
handler()
{
  clear
  # if you type 'all' as repository, will loop through all repositories performing the command
  if [ $2 == "all" ]; then
    for f in */; do
      echo $f
      cd $f
      $1 $f $3
      cd ..
      printf "\n"
    done
  else
    echo $2
    cd $2 || ( read -t 5 -n 1 -p "Invalid repository! Returning to menu..." && startScreen )
    $1 $2 $3
    cd ..
    printf "\n"
  fi
  read -r -n 1 -p "Action successfully performed! Press any key to return to menu..."
  startScreen
}

# Functions for each possible git command
maker()
{
  echo "UNIMPLEMENTED"
}
cloner()
{
  echo "UNIMPLEMENTED"
}
pusher()
{
  git add --all
  git commit -m "$2" || git commit -m "Placeholder."
  git push --all
}
puller()
{
  git pull
}
checker()
{
  git status
}
quit()
{
  exit
}

#Initializes startScreen
startScreen

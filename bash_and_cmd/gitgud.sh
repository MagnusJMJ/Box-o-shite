#!/bin/bash

# While technically unimpressive, I have chosen to append this little bash script
# to my application for the Natl. Museum. I called Andreas Nauta Pedersen about
# the job, asking him what was most important in submitting previous work. Design?
# Technical capability? Andreas' wholesome answer was that I should submit what I
# was most proud of, which is definitely this script. As a complete newcomer to
# programming, I was given a quite poor introduction to Git and GitHub. I found it
# tedious to use the terminal, so I wrote a bash script to ease the workflow. It is
# not just my first foray into programming that wasn't on my course curriculum - it
# was the first time I observed a problem, and programmed my way out of it.
# What a rush!

# TODO:
#  * Implement repository initialization
#  * Add color coded feedback

# Menu screen - all actions return to here when done.
mainMenu()
{
  # NB! Replace path here with the path to your local Git repository folder
  cd ~/Documents/GitHub || ( echo "ERROR: You've either moved or deleted the GitHub folder. Correct the path in the script." && exit )

  clear
  echo "******************************************"
  echo "* Your Friendly Neighbourhood Git Helper *"
  echo "******************************************"
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
    cd $2 || ( read -t5 -r -n1 -p "Invalid repository! Returning to menu..." && mainMenu )
    $1 $2 "$3"
    cd ..
    printf "\n"
  fi
  read -r -n1 -p "Action successfully performed! Press any key to return to menu..."
  mainMenu
}

# Functions for each possible command
make()
{
  echo "UNIMPLEMENTED"
  read -r -n 1 -p "Press any key to return to menu..."
}
clone()
{
  if [ $1 == 'all' ]; then
    echo "ERROR: Do not use 'all' as argument for clone!" && return
  else
    git clone "$1" || ( read -t5 -r -n1 -p "Invalid clone link! Returning to menu..." && mainMenu )
  fi
}
push()
{
  git add --all
  git commit -m "$2" || git commit -m "Did thing."
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

#Initializes mainMenu
mainMenu

#!/bin/sh
cd ~/Documents/GitHub || echo "Error: Directory not found."
for f in *; do
    if [ -d ${f} ]; then
        echo $f
        cd $f
        git pull || echo "Error: $f is not a Git repository."
        cd ..
    fi
done

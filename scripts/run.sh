#!/bin/bash

dir=$1
node "$PWD/src/$dir/index.js" "$PWD/src/$dir/input.txt"

#!/bin/bash

dir=$1
export input="$PWD/src/$dir/input.txt"
mocha "$PWD/src/$dir/test.js" 

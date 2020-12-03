#!/bin/bash

dir=$1
export input="$PWD/$dir/input.txt"
mocha "$PWD/$dir/test.js" 

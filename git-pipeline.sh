#!/bin/bash

args=("$@")
GIT='git --git-dir='$PWD'/.git'

echo $GIT

# python ../markplate/markplate.py --temp leetcode.jinja --out ./../Leetcode/ --out-file README.md --cb ./callbacks/recursive_file_visit.py --ex-cb-dir ./../Leetcode --exclude [.git,.gitignore,README.md] -username cecinuga

$GIT add .
$GIT commit -m ${args[0]}
$GIT push


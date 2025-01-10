#!/bin/bash

args=("$@")
GIT='git --git-dir='$PWD'/.git'
MARKPLATE=/home/cecinuga/Scrivania/Programming/markplate

alias python=${MARKPLATE}'/env/lib/python3.12'
source ${MARKPLATE}/env/bin/activate

python ${MARKPLATE}/markplate.py --temp ${MARKPLATE}/templates/leetcode.jinja --out ./ --out-file README.md --cb ${MARKPLATE}/callbacks/recursive_file_visit.py --ex-cb-dir ./ --exclude [.git,.gitignore,README.md] -username cecinuga

deactivate
$GIT add .
$GIT commit -m ${args[0]}
$GIT push


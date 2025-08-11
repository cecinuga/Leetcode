#!/bin/bash

args=("$@")
GIT='git --git-dir='$PWD'/.git'
MARKPLATE=/home/cecinuga/Scrivania/Github/markplate

echo $args

alias python=${MARKPLATE}'/env/lib/python3.12'

source ${MARKPLATE}/env/bin/activate
python ${MARKPLATE}/markplate.py --temp ${MARKPLATE}/templates/leetcode.jinja --out ./ --out-file README.md --cb ${MARKPLATE}/callbacks/leetcode.py --ex-cb-dir ./ --exclude [.git,.gitignore,README.md,git-pipeline.sh]
deactivate

$GIT add .
$GIT commit -m ${args[0]}
$GIT push


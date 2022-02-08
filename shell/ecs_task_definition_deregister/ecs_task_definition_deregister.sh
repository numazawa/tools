#!/bin/bash

target=${1}

if [ "a${target}" == "a" ]; then
  echo "Please specify task definition"
  echo "ex) sh ${0} task_def_name"
  exit
fi

read -p "Deregister the task definition of \"${target}\"? (y/N): " yn
case "$yn" in [yY]*) ;; *) echo "abort." ; exit ;; esac

list=($(aws ecs list-task-definitions --family-prefix ${1} --output text --query 'taskDefinitionArns[]'))

for i in "${list[@]}"
do
  task_def=$(echo "${i}" | awk -F'/' '{print $2}')
  aws ecs deregister-task-definition --task-definition ${task_def} >/dev/null
  echo "${task_def} deregister completed."
done
#!/bin/bash
array=(
  "bir":"asd",
  "wiki":"ad",
)
exec 0< $array
count=1
while read line
do
echo "Line #$count: $line"
count=$(( $count + 1 ))
done
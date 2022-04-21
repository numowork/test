#echo "write Name:"
##read name
##echo "Name is :" $name
#
#name='adfaf';
#
#declare -A array_name
#
#array_name=(
#  ["num1"]="foobar1"
#  ["num2"]="foobar2"
#  ["num3"]="foobar3"
#  ["num4"]="foobar4"
#  ["d"]="foobar01"
#  ["w"]="foobar02"
#  ["ooo"]="foobar03"
#)
#
#declare -A array_a=()
##logPaths=("api.log" "auth.log" "jenkins.log" "data.log")
#for i in "${!array_name[@]}"; do
#    array_a[$i]="${array_name[$i]}"
##    echo array_a[$i];
#done
#
#
#
#echo "${array_a["d"]}"
#
#declare -a array_key
#array_key=(
#  "num1"
#  "ooo"
#  "num4"
#
#)
#  echo "${array_key}"
#
#for i in "${array_key[@]}"; do
#  for j in "${!array_name[@]}"; do
#    if [[ $i == $j ]]; then
#      echo "${array_name[$i]}"
#    fi
#  done
#done




#BASEDIR=$(dirname "$0")

declare -A brands=(
  ["audi"]="0.0.0.0"
  ["Citroyen"]="2.03.5.6"
  ["ertwyrthy"]="1.0.0.1"
#  ["M3"]="ssh root@0.0.0.0 -i ~/All/ssh/root.pem -o StrictHostKeyChecking=no"
#  ["MacBook Pro"]="ssh root@127.0.0.1 -i ~/All/ssh/root.pem -o StrictHostKeyChecking=no"
#  ["maybch"]="ssh root@128.0.0.2 -i ~/All/ssh/root.pem -o StrictHostKeyChecking=no"
#  ["nax"]="ssh root@1.0.0.1 -i ~/All/ssh/root.pem -o StrictHostKeyChecking=no"
#  ["nissan"]="ssh root@1.0.0.1 -i ~/All/ssh/root.pem -o StrictHostKeyChecking=no"
#  ["sdfsf"]="ssh root@1.0.0.1 -i ~/All/ssh/root.pem -o StrictHostKeyChecking=no"
#  ["skoda"]="ssh root@1.0.0.1 -i ~/All/ssh/root.pem -o StrictHostKeyChecking=no"
)

for key in "${!brands[@]}"; do
  echo "${brands[$key]}" $key
  #  eval "${hosts[key]} BRAND=${key} 'bash -s' < ${BASEDIR}/scripts/update.sh"
done

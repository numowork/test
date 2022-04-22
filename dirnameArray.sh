shopt -s nullglob
array=(*)
array2=(file*)
cd /root/numowork/
array3=( $(ls) )

echo "$array3"
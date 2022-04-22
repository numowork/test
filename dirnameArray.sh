shopt -s nullglob
#array=(*)
#array2=(file*)
cd /root/numowork/
array3=(*)

for key in "${array3[@]}"; do
  echo "$key"
done

echo "$"
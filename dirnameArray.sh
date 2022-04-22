shopt -s nullglob
#array=(*)
#array2=(file*)

array3=(/root/numowork/*)

for key in "${array3[@]}"; do
  echo "$key"
done

echo "$"
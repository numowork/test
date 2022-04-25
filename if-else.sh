echo "Write your age"
read age
if [ $age -ge 0 ] && [ $age -lt 12 ]; then
      echo "You are kid"
    elif [ $age -ge 12 ] && [ $age -lt 18 ]; then
      echo "You are teenager"
    elif [ $age -ge 18 ]&&[ $age -lt 60 ]; then
      echo "You are adult"
    else
      echo "You are old"
fi
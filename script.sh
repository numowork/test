ls
pwd
whoami
echo "Name User $USER"
name="Numonbek"
str="Name user"
echo "$str $name"

mydir=`pwd`

echo "My Location $mydir"

mydir2=$(pwd)

echo "My Location $mydir2"

number1=10
number2=12
number3=$(($number1+$number2))
echo "$number3"
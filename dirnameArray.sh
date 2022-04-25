shopt -s nullglob
#array=(*)
#array2=(file*)
cd /srv/logs/
brands=(*)

for key in "${brands[@]}"; do
  echo "$key"
#  cp /srv/theplatform/app.log  /srv/logs/$key/app.log
  mongoimport --db $key --collection logs --file /srv/logs/$key/app.log
  echo 'importing process'
  rm /srv/logs/$key/app.log
done

echo "$"
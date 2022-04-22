shopt -s nullglob
#array=(*)
#array2=(file*)
cd /srv/logs/
brands=(*)

for key in "${brands[@]}"; do
  echo "$key"
  cp /srv/theplatform/app.log  /srv/logs/$key/app.log
#  mongoimport --db test --collection restaurants --file /tmp/primer-dataset.json
done

echo "$"
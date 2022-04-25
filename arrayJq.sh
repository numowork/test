declare -A prices
while IFS=$'\t' read -r key value; do
    prices[$key]=$value
done < <(
    jq -r 'to_entries[] | [.key, .value] | @tsv' json.file
)

declare -p prices
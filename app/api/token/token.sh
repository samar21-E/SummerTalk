#!/bin/bash

API_KEY_SECRET="Summertalksfu_default_secret"
# SummerTALK_URL="https://sfu.Summertalk.com/api/v1/token"
SummerTALK_URL="http://localhost:3010/api/v1/token"

curl $SummerTALK_URL \
    --header "authorization: $API_KEY_SECRET" \
    --header "Content-Type: application/json" \
    --data '{"username":"username","password":"password","presenter":"true", "expire":"1h"}' \
    --request POST
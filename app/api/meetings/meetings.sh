#!/bin/bash

API_KEY_SECRET="Summertalksfu_default_secret"
# SummerTALK_URL="https://sfu.Summertalk.com/api/v1/meetings"
SummerTALK_URL="http://localhost:3010/api/v1/meetings"

curl $SummerTALK_URL \
    --header "authorization: $API_KEY_SECRET" \
    --header "Content-Type: application/json" \
    --request GET

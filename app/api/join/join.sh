#!/bin/bash

# Configuration
API_KEY_SECRET="Summertalksfu_default_secret"
SummerTALK_URL="https://sfu.Summertalk.com/api/v1/join"
# Alternative URL for local testing:
SummerTALK_URL="http://localhost:3010/api/v1/join"

# Request data with proper JSON formatting
REQUEST_DATA='{
    "room": "test",
    "roomPassword": false,
    "name": "Summertalksfu",
    "avatar": false,
    "audio": false,
    "video": false,
    "screen": false,
    "hide": false,
    "notify": true,
    "duration": "unlimited",
    "token": {
        "username": "username",
        "password": "password",
        "presenter": true,
        "expire": "1h"
    }
}'

# Make the API request
curl -X POST "$SummerTALK_URL" \
    -H "Authorization: $API_KEY_SECRET" \
    -H "Content-Type: application/json" \
    -d "$REQUEST_DATA"
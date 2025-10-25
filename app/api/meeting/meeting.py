# pip3 install requests
import requests
import json

API_KEY_SECRET = "Summertalksfu_default_secret"
# SummerTALK_URL = "https://sfu.Summertalk.com/api/v1/meeting"
SummerTALK_URL = "http://localhost:3010/api/v1/meeting"

headers = {
    "authorization": API_KEY_SECRET,
    "Content-Type": "application/json",
}

response = requests.post(
    SummerTALK_URL,
    headers=headers
)

print("Status code:", response.status_code)
data = json.loads(response.text)
print("meeting:", data["meeting"])

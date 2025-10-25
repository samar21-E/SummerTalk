'use strict';

async function getStats() {
    try {
        // Use dynamic import with await
        const { default: fetch } = await import('node-fetch');

        const API_KEY_SECRET = 'Summertalksfu_default_secret';
        // const SummerTALK_URL = 'https://sfu.Summertalk.com/api/v1/stats';
        const SummerTALK_URL = 'http://localhost:3010/api/v1/stats';

        const response = await fetch(SummerTALK_URL, {
            method: 'GET',
            headers: {
                authorization: API_KEY_SECRET,
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        if (data.error) {
            console.log('Error:', data.error);
        } else {
            if (data) {
                const formattedData = JSON.stringify(data, null, 2);
                console.log(formattedData);
            }
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getStats();

'use strict';

async function getJoin() {
    try {
        // Use dynamic import with await
        const { default: fetch } = await import('node-fetch');

        const API_KEY_SECRET = 'Summertalksfu_default_secret';
        // const SummerTALK_URL = 'https://2e54-165-51-150-65.ngrok-free.app/api/v1/join';
        const SummerTALK_URL = 'http://localhost:3010/api/v1/join';

        const response = await fetch(SummerTALK_URL, {
            method: 'POST',
            headers: {
                authorization: API_KEY_SECRET,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                room: 'test',
                roomPassword: false,
                name: 'Summertalksfu',
                avatar: false,
                audio: false,
                video: false,
                screen: false,
                hide: false,
                notify: true,
                duration: 'unlimited',
                token: {
                    username: 'username',
                    password: 'password',
                    presenter: true,
                    expire: '1h',
                },
            }),
        });
        const data = await response.json();
        if (data.error) {
            console.log('Error:', data.error);
        } else {
            console.log('join:', data.join);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getJoin();

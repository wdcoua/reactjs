import axios from 'axios';

const INSTAGRAM_CLIENT_ID = '1554518342058550';
const REDIRECT_URI = 'http://localhost:3000/redirect'; // Змініть це на реальний URL вашого додатку

export const handleInstagramAuth = () => {
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${INSTAGRAM_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user_profile,user_media&response_type=code`;
    window.location.href = authUrl;
};

export const fetchInstagramToken = async (code) => {
    const tokenUrl = 'https://api.instagram.com/oauth/access_token';
    const requestBody = {
        client_id: INSTAGRAM_CLIENT_ID,
        client_secret: 'd0b5caa885b04b8829304d25dc2240af',
        grant_type: 'authorization_code',
        redirect_uri: REDIRECT_URI,
        code: code
    };

    try {
        const response = await axios.post(tokenUrl, requestBody);
        return response.data.access_token;
    } catch (error) {
        console.error('Error fetching Instagram token:', error);
        return null;
    }
};

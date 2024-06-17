import axios from 'axios';

const API_URL = 'http://localhost:8000';  // Adjust the URL to match your backend

export const getConfig = async () => {
    const response = await axios.get(`${API_URL}/config`);
    return response.data;
};

export const runTask = async (taskData) => {
    const response = await axios.post(`${API_URL}/run-task`, taskData);
    return response.data;
};

export const streamUpdates = () => {
    return new EventSource(`${API_URL}/stream-updates`);
};
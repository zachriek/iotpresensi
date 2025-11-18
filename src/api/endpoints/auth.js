import apiClient from '../client';

const baseURL = '/auth';

export const authAPI = {
	login: async ({ email, password }) => {
		const response = await apiClient.post(`${baseURL}/login`, { email, password });
		return response.data;
	},

	getProfile: async () => {
		const response = await apiClient.get(`${baseURL}/me`);
		return response.data;
	},

	logout: async () => {
		const response = await apiClient.post(`${baseURL}/logout`);
		return response.data;
	},
};

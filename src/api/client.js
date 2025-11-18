import axios from 'axios';
import useAuthStore from '../stores/useAuthStore';
import { toast } from 'react-toastify';

const apiClient = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
	timeout: 60000,
	headers: {
		'Content-Type': 'application/json',
	},
});

apiClient.interceptors.request.use(
	(config) => {
		const token = useAuthStore.getState().token;
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
	(response) => response,
	(error) => {
		const excludedPaths = ['/reset-password'];
		const requestUrl = error.config?.url;

		const isExcluded = excludedPaths.some((path) => requestUrl?.includes(path));

		if (error.response?.status === 403 && !isExcluded) {
			useAuthStore.getState().logout();
		}

		return Promise.reject(error);
	}
);

apiClient.interceptors.response.use(
	(response) => {
		const message = response.data?.message;
		if (message) {
			const short = message.length > 120 ? message.slice(0, 120) + '…' : message;
			toast.success(short);
		}
		return response;
	},
	(error) => {
		const msg = error.response?.data?.message || 'Terjadi kesalahan server.';
		const short = msg.length > 120 ? msg.slice(0, 120) + '…' : msg;
		toast.error(short);
		return Promise.reject(error);
	}
);

export default apiClient;

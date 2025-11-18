import apiClient from '../../client';

const baseURL = '/mahasiswa';

export const attendanceMahasiswaAPI = {
	getAttendances: async () => {
		const response = await apiClient.get(`${baseURL}/attendance`);
		return response.data;
	},
};

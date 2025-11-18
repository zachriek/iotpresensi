import { create } from 'zustand';
import { attendanceMahasiswaAPI } from '../../api/endpoints/mahasiswa/attendance';

const useAttendanceStore = create()((set) => ({
	attendances: [],
	isLoading: true,
	errorMessage: null,
	errorMap: null,

	getAttendances: async () => {
		try {
			const response = await attendanceMahasiswaAPI.getAttendances();
			set({ attendances: response?.data?.attendances });
			return { success: true, data: response };
		} catch (error) {
			set({ errorMessage: error.response.data.message });
			return { success: false, errorMessage: error.response.data.message };
		}
	},

	clearError: () => set({ errorMessage: null, errorMap: null }),
}));

export default useAttendanceStore;

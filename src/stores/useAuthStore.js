import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { authAPI } from '../api/endpoints/auth';

const useAuthStore = create()(
	persist(
		(set) => ({
			user: null,
			token: null,
			isLoading: true,
			errorMessage: null,
			errorMap: null,

			login: async (data) => {
				set({ isLoading: true, errorMessage: null, errorMap: null });
				try {
					const response = await authAPI.login(data);
					set({ token: response?.data?.token, isLoading: false });
					return { success: true, data: response };
				} catch (error) {
					set({ errorMessage: error.response.data.message, errorMap: error.errorMap, isLoading: false });
					return { success: false, errorMessage: error.response.data.message, errorMap: error.errorMap };
				} finally {
					set({ isLoading: false });
				}
			},

			getProfile: async () => {
				try {
					const response = await authAPI.getProfile();
					set({ user: response?.data?.user });
					return { success: true, data: response };
				} catch (error) {
					set({ errorMessage: error.response.data.message });
					return { success: false, errorMessage: error.response.data.message };
				}
			},

			logout: async () => {
				set({ isLoading: true, errorMessage: null, errorMap: null });
				try {
					const response = await authAPI.logout();
					set({ user: null, token: null, errorMessage: null });
					return { success: true, data: response };
				} catch (error) {
					set({ errorMessage: error.response.data.message, errorMap: error.errorMap, isLoading: false });
					return { success: false, errorMessage: error.response.data.message, errorMap: error.errorMap };
				} finally {
					set({ isLoading: false });
				}
			},

			setToken: (token) => set({ token }),
			clearToken: () => set({ token: null }),

			clearError: () => set({ errorMessage: null, errorMap: null }),
		}),
		{
			name: 'e-presensi-auth-storage',
			partialize: (state) => ({
				user: state.user,
				token: state.token,
			}),
		}
	)
);

export default useAuthStore;

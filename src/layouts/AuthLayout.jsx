import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useAuthStore from '../stores/useAuthStore';

const AuthLayout = () => {
	const { token } = useAuthStore();
	const navigate = useNavigate();

	useEffect(() => {
		if (token) {
			navigate('/mahasiswa');
		}
	}, [token, navigate]);

	return <Outlet />;
};

export default AuthLayout;

import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import useAuthStore from '../stores/useAuthStore';

const AppLayout = () => {
	const navigate = useNavigate();
	const { getProfile, token } = useAuthStore();
	const location = useLocation();

	useEffect(() => {
		if (!token) navigate('/login');
		const fetch = async () => {
			if (token) await getProfile();
		};
		fetch();
	}, [location.pathname, token]);

	return <Outlet />;
};

export default AppLayout;

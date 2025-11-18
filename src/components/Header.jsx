import useAuthStore from '../stores/useAuthStore';

export default function Header() {
	const { user } = useAuthStore();
	return (
		<header className="header">
			<h1>IoT Presensi</h1>
			<p className="subtitle">{user?.name}</p>
		</header>
	);
}

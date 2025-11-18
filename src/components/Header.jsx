<<<<<<< HEAD
import useAuthStore from '../stores/useAuthStore';

export default function Header() {
	const { user } = useAuthStore();
	return (
		<header className="header">
			<h1>IoT Presensi</h1>
			<p className="subtitle">{user?.name}</p>
		</header>
	);
=======
export default function Header({ role }) {
  return (
    <header className="header">
      <h1>IoT Presensi</h1>
      <p className="subtitle">{role.toUpperCase()}</p>
    </header>
  )
>>>>>>> upstream/main
}

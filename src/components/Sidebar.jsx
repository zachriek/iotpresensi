import { Link } from 'react-router-dom';
import useAuthStore from '../stores/useAuthStore';

export default function Sidebar({ role }) {
	const { logout } = useAuthStore();

	return (
		<aside className="sidebar">
			{role === 'admin' && (
				<>
					<Link to="/admin">Dashboard</Link>
					<Link to="/admin/mahasiswa">Data Mahasiswa</Link>
					<Link to="/admin/dosen">Data Dosen</Link>
					<Link to="/admin/presensi">Data Presensi</Link>
				</>
			)}

			{role === 'dosen' && (
				<>
					<Link to="/dosen">Dashboard</Link>
					<Link to="/dosen/mahasiswa">Daftar Mahasiswa</Link>
					<Link to="/dosen/riwayat">Riwayat Kelas</Link>
				</>
			)}

			{role === 'mahasiswa' && (
				<>
					<Link to="/mahasiswa">Dashboard</Link>
					{/* <Link to="/mahasiswa/checkin">Check-In</Link> */}
					<Link to="/mahasiswa/riwayat">Riwayat Presensi</Link>
				</>
			)}

			<button onClick={async () => await logout()} className="text-left logout cursor-pointer">
				Logout
			</button>
		</aside>
	);
}

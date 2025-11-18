import { useEffect } from 'react';
import Layout from '../../components/Layout';
import useAttendanceStore from '../../stores/mahasiswa/useAttendanceStore';
import { formatDate, formatTime } from '@/utils/date';
import echo from '@/libs/echo';

const RiwayatPresensi = () => {
	const { getAttendances, attendances } = useAttendanceStore();

	useEffect(() => {
		// Load pertama
		getAttendances();

		// Listen WebSocket
		echo.channel('presensi').listen('PresensiUpdated', (e) => {
			console.log('Event diterima:', e.data);

			// Fetch ulang data attendance (realtime)
			getAttendances();
		});

		return () => {
			echo.leave('presensi');
		};
	}, []);

	return (
		<Layout role="mahasiswa">
			<div className="page">
				<header className="header">
					<h2>Riwayat Presensi Mahasiswa</h2>
				</header>

				<main className="content">
					<div className="table-container">
						<table className="table">
							<thead>
								<tr>
									<th>Waktu Presensi</th>
									<th>Kelas</th>
									<th>Ruang</th>
									<th>Kelas Mulai</th>
									<th>Kelas Selesai</th>
									<th>Status</th>
								</tr>
							</thead>

							<tbody>
								{attendances?.map((att) => (
									<tr key={att?.id}>
										{/* Waktu Presensi */}
										<td>{formatDate(att?.check_in_at)}</td>

										{/* Kelas */}
										<td>
											{att?.class?.course?.code} {att?.class?.course?.name} {att?.class?.name}
										</td>

										{/* Ruang */}
										<td>{att?.schedule?.room ?? '-'}</td>

										{/* Kelas mulai */}
										<td>{formatTime(att?.schedule?.start_time)}</td>

										{/* Kelas selesai */}
										<td>{formatTime(att?.schedule?.end_time)}</td>

										{/* Status */}
										<td>{att?.status ?? '-'}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</main>
			</div>
		</Layout>
	);
};

export default RiwayatPresensi;

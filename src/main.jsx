import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';

// admin
import DashboardAdmin from './pages/admin/DashboardAdmin';
import DataMahasiswa from './pages/admin/DataMahasiswa';
import DataDosen from './pages/admin/DataDosen';
import DataPresensi from './pages/admin/DataPresensi';

// dosen
import DashboardDosen from './pages/dosen/DashboardDosen';
import DaftarMahasiswa from './pages/dosen/DaftarMahasiswa';
import RiwayatKelas from './pages/dosen/RiwayatKelas';

// mahasiswa
import DashboardMahasiswa from './pages/mahasiswa/DashboardMahasiswa';
import CheckInPresensi from './pages/mahasiswa/CheckInPresensi';
import RiwayatPresensi from './pages/mahasiswa/RiwayatPresensi';

import './index.css';
import AuthLayout from './layouts/AuthLayout';
import AppLayout from './layouts/AppLayout';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route index path="/" element={<App />} />

				<Route element={<AuthLayout />}>
					<Route path="/login" element={<Login />} />
				</Route>

				<Route element={<AppLayout />}>
					{/* Admin */}
					<Route path="/admin" element={<DashboardAdmin />} />
					<Route path="/admin/mahasiswa" element={<DataMahasiswa />} />
					<Route path="/admin/dosen" element={<DataDosen />} />
					<Route path="/admin/presensi" element={<DataPresensi />} />

					{/* Dosen */}
					<Route path="/dosen" element={<DashboardDosen />} />
					<Route path="/dosen/mahasiswa" element={<DaftarMahasiswa />} />
					<Route path="/dosen/riwayat" element={<RiwayatKelas />} />

					{/* Mahasiswa */}
					<Route path="/mahasiswa" element={<DashboardMahasiswa />} />
					<Route path="/mahasiswa/checkin" element={<CheckInPresensi />} />
					<Route path="/mahasiswa/riwayat" element={<RiwayatPresensi />} />
				</Route>
			</Routes>

			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover={false}
				theme="light"
				style={{ zIndex: 99999 }}
			/>
		</BrowserRouter>
	</React.StrictMode>
);

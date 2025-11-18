import Layout from '../../components/Layout'

export default function DashboardMahasiswa() {
  return (
    <Layout role="mahasiswa">
      <h2>Dashboard Mahasiswa</h2>
      <p>Selamat datang! Gunakan sistem ini untuk melakukan presensi dan memantau riwayat kehadiranmu.</p>
      <div className="grid">
        <div className="card">Status Hari Ini: Hadir</div>
        <div className="card">Total Presensi: 23</div>
      </div>
    </Layout>
  )
}

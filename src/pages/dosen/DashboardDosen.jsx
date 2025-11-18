import Layout from '../../components/Layout'

export default function DashboardDosen() {
  return (
    <Layout role="dosen">
      <h2>Dashboard Dosen</h2>
      <p>Selamat datang, Anda dapat memantau kehadiran mahasiswa di kelas Anda.</p>
      <div className="grid">
        <div className="card">Kelas Aktif: 3</div>
        <div className="card">Mahasiswa Hadir Hari Ini: 58</div>
      </div>
    </Layout>
  )
}

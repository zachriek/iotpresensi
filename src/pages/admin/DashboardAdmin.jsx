import Layout from '../../components/Layout'

export default function DashboardAdmin() {
  return (
    <Layout role="admin">
      <h2>Dashboard Admin</h2>
      <p>Selamat datang di panel admin. Anda dapat mengelola seluruh data presensi, dosen, dan mahasiswa.</p>
      <div className="grid">
        <div className="card">Total Mahasiswa: 120</div>
        <div className="card">Total Dosen: 10</div>
        <div className="card">Presensi Hari Ini: 95%</div>
      </div>
    </Layout>
  )
}

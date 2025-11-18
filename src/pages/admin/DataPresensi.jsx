import Layout from '../../components/Layout'

export default function DataPresensi() {
  const data = [
    { id: 1, nama: 'Alya Nayra', waktu: '2025-11-10 07:55', status: 'Hadir' },
    { id: 2, nama: 'Bima Adi', waktu: '2025-11-10 08:02', status: 'Hadir' },
  ]
  return (
    <Layout role="admin">
      <h2>Data Presensi</h2>
      <table className="table">
        <thead>
          <tr><th>No</th><th>Nama</th><th>Waktu</th><th>Status</th></tr>
        </thead>
        <tbody>
          {data.map((p, i) => (
            <tr key={p.id}><td>{i + 1}</td><td>{p.nama}</td><td>{p.waktu}</td><td>{p.status}</td></tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

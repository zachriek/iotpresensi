import Layout from '../../components/Layout'

export default function RiwayatKelas() {
  const data = [
    { id: 1, nama: 'Alya Nayra', waktu: '2025-11-10 07:55', status: 'Hadir' },
    { id: 2, nama: 'Bima Adi', waktu: '2025-11-10 08:02', status: 'Hadir' },
  ]
  return (
    <Layout role="dosen">
      <h2>Riwayat Kelas</h2>
      <table className="table">
        <thead><tr><th>No</th><th>Nama</th><th>Waktu</th><th>Status</th></tr></thead>
        <tbody>{data.map((r, i) => <tr key={r.id}><td>{i + 1}</td><td>{r.nama}</td><td>{r.waktu}</td><td>{r.status}</td></tr>)}</tbody>
      </table>
    </Layout>
  )
}

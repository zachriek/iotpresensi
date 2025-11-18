import Layout from '../../components/Layout'

export default function DaftarMahasiswa() {
  const data = [
    { id: 1, nama: 'Alya Nayra', nim: '230501' },
    { id: 2, nama: 'Bima Adi', nim: '230502' },
  ]
  return (
    <Layout role="dosen">
      <h2>Daftar Mahasiswa</h2>
      <table className="table">
        <thead><tr><th>No</th><th>Nama</th><th>NIM</th></tr></thead>
        <tbody>{data.map((m, i) => <tr key={m.id}><td>{i + 1}</td><td>{m.nama}</td><td>{m.nim}</td></tr>)}</tbody>
      </table>
    </Layout>
  )
}

import Layout from '../../components/Layout'

export default function DataMahasiswa() {
  const data = [
    { id: 1, nama: 'Alya Nayra', nim: '230501', jurusan: 'RPL' },
    { id: 2, nama: 'Bima Adi', nim: '230502', jurusan: 'RPL' },
  ]
  return (
    <Layout role="admin">
      <h2>Data Mahasiswa</h2>
      <table className="table">
        <thead>
          <tr><th>No</th><th>Nama</th><th>NIM</th><th>Jurusan</th></tr>
        </thead>
        <tbody>
          {data.map((m, i) => (
            <tr key={m.id}><td>{i + 1}</td><td>{m.nama}</td><td>{m.nim}</td><td>{m.jurusan}</td></tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

import Layout from '../../components/Layout'

export default function DataDosen() {
  const data = [
    { id: 1, nama: 'Pak Dwi', matkul: 'Jaringan Komputer' },
    { id: 2, nama: 'Bu Rani', matkul: 'Rekayasa Perangkat Lunak' },
  ]
  return (
    <Layout role="admin">
      <h2>Data Dosen</h2>
      <table className="table">
        <thead>
          <tr><th>No</th><th>Nama</th><th>Mata Kuliah</th></tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={d.id}><td>{i + 1}</td><td>{d.nama}</td><td>{d.matkul}</td></tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

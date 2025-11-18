import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="welcome">
      <h1>IoT Presensi</h1>
      <p>Sistem presensi berbasis Internet of Things menggunakan sensor sidik jari.</p>
      <Link to="/login" className="btn">Masuk ke Sistem</Link>
    </div>
  )
}

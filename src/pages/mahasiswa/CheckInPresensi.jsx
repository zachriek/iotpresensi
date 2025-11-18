import React, { useState } from 'react'
import Layout from '../../components/Layout'

export default function CheckInPresensi() {
  const [id, setId] = useState('')
  const [status, setStatus] = useState(null)

  const handleCheckIn = () => {
    if (!id) return alert('Masukkan ID fingerprint!')
    setStatus({ waktu: new Date().toLocaleString(), success: true })
  }

  return (
    <Layout role="mahasiswa">
      <h2>Check-In Presensi</h2>
      <input className="input" placeholder="Masukkan ID fingerprint" value={id} onChange={(e) => setId(e.target.value)} />
      <button className="btn" onClick={handleCheckIn}>Check-In</button>
      {status && (
        <div className="card success">
          <p>Presensi berhasil!</p>
          <p>Waktu: {status.waktu}</p>
        </div>
      )}
    </Layout>
  )
}


import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function Layout({ children, role }) {
  return (
    <div className="layout">
      <Header role={role} />
      <div className="main">
        <Sidebar role={role} />
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  )
}

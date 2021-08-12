
import Header from './Header'
import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="container">
        <main className="main">
          <Header />
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout

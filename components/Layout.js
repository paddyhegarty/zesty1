
import Header from './Header'
import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>
        <Header />
        {children}
      </main>
    </>
  )
}

export default Layout

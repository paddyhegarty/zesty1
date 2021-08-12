import Layout from '../components/Layout'
import '../styles/main.min.css'

const Application = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Application

import Head from 'next/head'
import ArticleList from '../components/ArticleList'

const Home = ({ articles }) => {

  return (
    <div>
      <Head>
        <title>Web dev news</title>
      </Head>

      <ArticleList articles={articles} />
    </div>
  )
}

export default Home


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://www.londondaily.net/wp-json/wp/v2/posts`)
  const articles = await res.json()

  // Pass data to the page via props
  return { props: { articles } }
}



// export const getStaticProps = async () => {

//   const res = await fetch(`http://ni.in-beta6.co.uk/wp-json/wp/v2/posts`)
//   const articles = await res.json()
//   return {
//     props: {
//       articles
//     }
//   }
// }

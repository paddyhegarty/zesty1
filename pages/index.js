import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {

  return (
    <div>
      <Head>
        <title>Web dev news</title>
      </Head>

      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://www.londondaily.net/wp-json/wp/v2/posts`)
  const articles = await res.json()
  return {
    props: {
      articles
    }
  }
}

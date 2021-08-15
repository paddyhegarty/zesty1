import Head from 'next/head'
import TabbedSection from '../components/TabbedSection'
import OurWork from '../components/OurWork'
import NumbersSection from '../components/NumbersSection'
import ActionSection from '../components/ActionSection'
import IntroSection from '../components/IntroSection'

const Home = ({ articles, categories, newsLetterPost, introPost }) => {

  return (
    <div>
      <Head>
        <title>Web dev news</title>
      </Head>
      <IntroSection introPost={introPost} />
      <TabbedSection posts={articles} cats={categories} />
      <OurWork posts={articles} cats={categories} />
      <ActionSection posts={articles} newsLetterPost={newsLetterPost} />
      <NumbersSection posts={articles} cats={categories} />

    </div>
  )
}

export default Home

export async function getServerSideProps() {
  const posts = await fetch(`http://localhost/wordpress/wp-json/wp/v2/posts?per_page=100`)
  const articles = await posts.json()

  const cats = await fetch(`http://localhost/wordpress/wp-json/wp/v2/categories`)
  const categories = await cats.json()

  const singlePost1 = await fetch(`http://localhost/wordpress/wp-json/wp/v2/posts/40`)
  const newsLetterPost = await singlePost1.json()

  const singlePost2 = await fetch(`http://localhost/wordpress/wp-json/wp/v2/posts/42`)
  const introPost = await singlePost2.json()

  return {
    props: {
      articles,
      categories,
      newsLetterPost,
      introPost
    }
  }
}



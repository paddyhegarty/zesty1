import Link from 'next/link'

const article = ({ article }) => {

  return (
    <div>
      <>
        <h1>{article.title.rendered}</h1>
        <p>{article.content.rendered}</p>
        <br />
        <Link href='/'>Go Back</Link>
      </>
    </div>
  )
}

export const getServerSideProps = async context => {
  const res = await fetch(`http://localhost/wordpress/wp-json/wp/v2/posts/${context.params.id}`)
  const article = await res.json()

  return {
    props: {
      article
    }
  }
}

export default article



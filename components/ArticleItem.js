import articleStyles from '../styles/Article.module.css'
import Link from 'next/link'

const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`} >
      <a className={articleStyles.card} key={article.id}>
        <h3>{article.title.rendered} &rarr;</h3>
        <p>{article.excerpt.rendered}</p>
      </a>
    </Link>
  )
}

export default ArticleItem

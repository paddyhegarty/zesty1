
import ArticleItem from './ArticleItem'

const ArticleList = ({ articles }) => {
  return (
    <div className="grid">
      {articles.map((article) => {
        return (
          <ArticleItem article={article} key={article.id} />
        )
      })}
    </div>
  )
}

export default ArticleList

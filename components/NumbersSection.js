import ArticleItem from './ArticleItem'

const NumbersSection = ({ posts }) => {

  const CAT_ID = 4;
  const NO_ITEMS = 5;

  let articles = posts.filter(item => item.categories[0] === CAT_ID)

  return (
    <div className="grid-container">
      <div className="grid-x grid-padding-x medium-up-5">
        {articles.slice(0, NO_ITEMS).map((article) => { // use slice to limit the number of items displayed
          return (
            <div className="cell">
              <ArticleItem article={article} key={article.id} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NumbersSection
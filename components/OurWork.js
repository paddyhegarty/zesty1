
import ArticleItem from './ArticleItem'

const OurWork = ({ posts, cats }) => {

  const CAT_ID = 1;
  const NO_ITEMS = 3;

  let getCategory = cats.filter(item => item.id === CAT_ID);
  let getArticles = posts.filter(item => item.categories[0] === CAT_ID)

  let heading = getCategory[0].name;
  let description = getCategory[0].description;

  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell medium-4">
          <h1>{heading}</h1>
          <p>{description}</p>
        </div>
        <div className="cell large-8">
          <div className="grid-x grid-padding-x medium-up-3">
            {getArticles.slice(0, NO_ITEMS).map((article) => { // use slice to limit the number of items displayed
              return (
                <div className="cell" key={article.id}>
                  <ArticleItem article={article} key={article.id} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurWork

import ArticleItem from './ArticleItem'
import Tabs from "../components/tabs/Tabs";

const TabbedSection = ({ posts, cats }) => {

  const CAT_ID = 2;
  const NO_ITEMS = 3;

  //let getCategory = cats.filter(item => item.id === CAT_ID);
  let articles = posts.filter(item => item.categories[0] === CAT_ID)
  //let heading = getCategory[0].name;

  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell medium-4">
          image
        </div>
        <div className="cell medium-8">
          <Tabs>
            {articles.slice(0, NO_ITEMS).map((article, x) => { // use slice to limit the number of items displayed
              return (
                <div label={x.toString()} key={x}>
                  <ArticleItem article={article} key={article.id} />
                </div>
              )
            })}
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default TabbedSection
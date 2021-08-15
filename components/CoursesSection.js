import CourseItem from "./CourseItem"

const CoursesSection = ({ posts }) => {

  const CAT_ID = 5;
  const NO_ITEMS = 3;

  let articles = posts.filter(item => item.categories[0] === CAT_ID)

  return (
    <div className="grid-container">
      {articles.slice(0, NO_ITEMS).map((article) => {
        return (
          <CourseItem article={article} key={article.id} />
        )
      })}
    </div>
  )
}

export default CoursesSection

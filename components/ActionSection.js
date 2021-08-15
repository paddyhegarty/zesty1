import CoursesSection from "./CoursesSection"
import NewsLetterSection from "./NewsLetterSection"

const ActionSection = ({ posts, newsLetterPost }) => {
  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell large-7">
          <CoursesSection posts={posts} />
        </div>
        <div className="cell large-5">
          <NewsLetterSection newsLetterPost={newsLetterPost} />
        </div>
      </div>
    </div>
  )
}

export default ActionSection

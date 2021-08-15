import Link from 'next/link'

const CourseItem = ({ article }) => {
  return (
    <div className="grid-x">
      <div className="cell large-8">
        <p>ICON</p>
        <p>{article.title.rendered}</p>
      </div>
      <div className="cell large-4">
        <button>Book Now</button>
        <Link href="/article/[id]" as={`/article/${article.id}`}>Find Out More</Link>
      </div>
    </div>
  )
}

export default CourseItem

import NewsLetterForm from "./NewsLetterForm"

const NewsLetterSection = ({ newsLetterPost }) => {
  return (
    <div>
      Image
      <h3>{newsLetterPost.title.rendered}</h3>
      <div dangerouslySetInnerHTML={{ __html: newsLetterPost.content.rendered }}></div>
      <NewsLetterForm />
    </div>
  )
}

export default NewsLetterSection

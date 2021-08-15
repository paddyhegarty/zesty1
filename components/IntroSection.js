const IntroSection = ({ introPost }) => {
  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell medium-8">{introPost.content.rendered}</div>
        <div className="cell medium-4">Image</div>
      </div>
    </div>
  )
}

export default IntroSection

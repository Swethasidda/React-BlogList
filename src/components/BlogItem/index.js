// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {title, description, publishedDate} = blogItemDetails
  return (
    <div className="blogItem-container">
      <div className="title-publishedate-container">
        <h1 className="title-text">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description-text">{description}</p>
    </div>
  )
}

export default BlogItem

// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogListDetails} = props
  return (
    <ul className="blogList-container">
      {blogListDetails.map(each => (
        <BlogItem blogItemDetails={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList

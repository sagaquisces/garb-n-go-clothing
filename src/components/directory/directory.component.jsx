import Category from '../category/category.component'

import './directory.styles.scss'

const Directory = ({directory}) => {
  return (
    <div className="directory-container">
      {directory.map((category) => (
        <Category key={category.id} category={category}/>
      ))}
    </div>

  )
}

export default Directory

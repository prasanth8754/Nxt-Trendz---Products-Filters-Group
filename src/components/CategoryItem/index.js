import './index.css'

const CategoryItem = props => {
  const {categoryDetails, onSelectCategory, activeCategoryId} = props
  const {name, categoryId} = categoryDetails

  const selectCategory = () => {
    onSelectCategory(categoryId)
  }

  const activeCategoryClass =
    activeCategoryId === categoryId ? 'dynamic-color' : ''

  return (
    <li className="cat-li-cont">
      <button
        className={`cat-btn ${activeCategoryClass}`}
        type="button"
        onClick={selectCategory}
      >
        <p className="cat-para">{name}</p>
      </button>
    </li>
  )
}

export default CategoryItem

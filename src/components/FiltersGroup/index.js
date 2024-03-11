import {BsSearch} from 'react-icons/bs'
import CategoryItem from '../CategoryItem'
import RatingListItem from '../RatingListItem'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    searchValue,
    onChangeSearchInput,
    onSelectCategory,
    onSelectRating,
    activeCategoryId,
    activeRatingId,
    onclearFilters,
  } = props

  const changeSearch = event => {
    const searchTitle = event.target.value
    if (searchTitle !== '' && event.key === 'Enter') {
      onChangeSearchInput(searchTitle.toLowerCase())
    }
  }

  const clearFilters = () => {
    onclearFilters()
  }

  return (
    <div className="filters-group-container">
      <div className="search-cont">
        <input
          defaultValue={searchValue}
          className="search-input-sm"
          type="search"
          placeholder="Search"
          onKeyDown={changeSearch}
        />
        <BsSearch className="search-icon" />
      </div>
      <h1 className="cat-h1">Category</h1>
      <ul className="cat-ul-cont">
        {categoryOptions.map(eachItem => (
          <CategoryItem
            categoryDetails={eachItem}
            key={eachItem.categoryId}
            onSelectCategory={onSelectCategory}
            activeCategoryId={activeCategoryId}
          />
        ))}
      </ul>
      <h1 className="cat-h1 rat-h1">Rating</h1>
      <ul className="cat-ul-cont">
        {ratingsList.map(eachItem => (
          <RatingListItem
            ratingDetails={eachItem}
            key={eachItem.ratingId}
            onSelectRating={onSelectRating}
            activeRatingId={activeRatingId}
          />
        ))}
      </ul>
      <button className="clear-filter-btn" type="button" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup

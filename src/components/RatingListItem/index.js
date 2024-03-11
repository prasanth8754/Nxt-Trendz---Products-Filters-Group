import './index.css'

const RatingListItem = props => {
  const {ratingDetails, onSelectRating, activeRatingId} = props
  const {imageUrl, ratingId} = ratingDetails
  const selectRating = () => {
    onSelectRating(ratingId)
  }

  const activeRatingClass = activeRatingId === ratingId ? 'dynamic-color' : ''

  return (
    <li className="rat-li-cont">
      <button
        className={`rat-btn ${activeRatingClass}`}
        type="button"
        onClick={selectRating}
      >
        <img className="rat-img" src={imageUrl} alt={`rating ${ratingId}`} />
        &up
      </button>
    </li>
  )
}

export default RatingListItem

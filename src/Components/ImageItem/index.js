import './index.css'

const ImageItem = props => {
  const {imageDetails, checkThumbnail} = props
  const {thumbnailUrl, id} = imageDetails

  const onClickImg = () => {
    checkThumbnail(id)
  }
  return (
    <li className="app-item">
      <button type="button" className="img-button">
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="app-image"
          onClick={onClickImg}
        />
      </button>
    </li>
  )
}

export default ImageItem

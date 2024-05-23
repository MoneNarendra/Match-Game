import './index.css'

const ImgItem = props => {
  const {eachImg, userClick} = props
  const {id, thumbnailUrl} = eachImg
  const clickedImg = () => {
    userClick(id)
  }
  return (
    <li className="eachImg-container" key={id}>
      <button className="each-img-button" type="button" onClick={clickedImg}>
        <img src={thumbnailUrl} alt="thumbnail" className="list-image" />
      </button>
    </li>
  )
}

export default ImgItem

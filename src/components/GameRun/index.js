import {Component} from 'react'
import TabName from '../TabName'
import ImgItem from '../ImgItem'
import './index.css'

class GameRun extends Component {
  state = {
    activeTab: 'FRUIT',
    displayImg: {
      id: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
      category: 'FRUIT',
    },
  }

  changeTab = id => {
    this.setState({activeTab: id})
  }

  getRandomImg = () => {
    const {imagesList} = this.props
    const num = Math.floor(Math.random() * imagesList.length)
    this.setState({displayImg: imagesList[num]})
  }

  userClick = givenId => {
    const {increaseScore, stopGame} = this.props
    const {displayImg} = this.state
    const {id} = displayImg
    if (id === givenId) {
      this.getRandomImg()
      increaseScore()
    } else if (id !== givenId) {
      stopGame()
    }
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {activeTab, displayImg} = this.state
    const {imageUrl} = displayImg

    const filterdImageList = imagesList.filter(
      eachImage => eachImage.category === activeTab,
    )

    return (
      <div className="top">
        <div className="game-container">
          <div className="inner-container">
            <img src={imageUrl} alt="match" className="thumbnail-img" />
            <ul className="tab-list-container">
              {tabsList.map(eachTab => (
                <TabName
                  eachTab={eachTab}
                  key={eachTab.tabId}
                  isActiveTab={activeTab === eachTab.tabId}
                  changeTab={this.changeTab}
                />
              ))}
            </ul>
            <ul className="list-images-container">
              {filterdImageList.map(eachImg => (
                <ImgItem
                  eachImg={eachImg}
                  key={eachImg.id}
                  userClick={this.userClick}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GameRun

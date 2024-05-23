import './index.css'

const TabName = props => {
  const {eachTab, isActiveTab, changeTab} = props
  const {tabId, displayText} = eachTab

  const activTabClass = isActiveTab ? 'active-tab' : ''
  const activTabName = isActiveTab ? 'active-text' : ''

  const clickTab = () => {
    changeTab(tabId)
  }

  return (
    <li className={`tab-item ${activTabClass}`}>
      <button type="button" className="tab-button" onClick={clickTab}>
        <h1 className={`tab-name ${activTabName}`}>{displayText}</h1>
      </button>
    </li>
  )
}

export default TabName

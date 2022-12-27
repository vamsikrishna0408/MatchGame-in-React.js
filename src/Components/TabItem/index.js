import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, clickTabItem} = props
  const {tabId, displayText} = tabDetails
  const activeClassName = isActive ? 'tab-button active' : 'tab-button'
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }
  return (
    <li className="tab-item">
      <button
        type="button"
        className={activeClassName}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem

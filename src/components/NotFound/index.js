// Write your code here
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div>
    <Header />
    <div className="not-found">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
        alt="not found"
        className="not-found-img"
      />
      <h1 className="not-found-text">Lost Your Way?</h1>
      <p className="not-found-text">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)
export default NotFound

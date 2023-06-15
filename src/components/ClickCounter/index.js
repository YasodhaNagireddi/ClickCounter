// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  countIncrement = () => {
    const {count} = this.state
    this.setState({count: count + 1})
  }

  render() {
    const {count} = this.state
    return (
      <div className="counter-container">
        <h1 className="counter-heading">
          The Button has been Clicked <span className="counter">{count}</span>
          times
        </h1>
        <p className="counter-description">
          Click the button to increase the count!
        </p>
        <button
          type="button"
          className="counter-button"
          onClick={this.countIncrement}
        >
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter

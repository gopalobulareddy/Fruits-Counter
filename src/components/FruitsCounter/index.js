// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count: 0}

  onIncrease = () => {
    const {count} = this.state
    this.setState({count: count + 1})
  }

  onIncrease = () => {
    const {count} = this.state
    this.setState({count: count + 1})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="cart">
          <h1 className="heading">
            Bob ate <span className="counter">{count}</span> mangoes
            <span className="counter">{count} </span> bananas
          </h1>
          <div className="btn-container">
            <div className="btn-container-1">
              <img
                className="image1"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button onClick={this.onIncrease} className="btn-1">
                Eat Mango
              </button>
            </div>
            <div className="bg-container-2">
              <img
                className="image1"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />

              <button onClick={this.onIncrease} className="btn-1">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

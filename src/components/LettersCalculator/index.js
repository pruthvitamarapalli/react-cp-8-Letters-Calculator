// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {textInput: ''}

  onChangeLettersCount = event => {
    const {value} = event.target
    this.setState({textInput: value})
  }

  render() {
    const {textInput} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="text-content">
            <h1 className="heading"> Calculate the Letters you enter</h1>
            <form className="form-container">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                type="text"
                className="input-text"
                id="phraseText"
                placeholder="Enter the phrase"
                onChange={this.onChangeLettersCount}
              />
            </form>
            <p className="description">No.of letters: {textInput.length}</p>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              className="image"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator

import React from 'react';
import Start from './Start'
import './App.css';
import _ from 'lodash';
import profile from './profile.jpg';
import Ev from './Ev';
import Check from './Check';

const message = 'central'
const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase()
  let chars = _.shuffle(Array.from(word))     
  return {
    word,
    chars,
    counter: 1,
    guess: [],
    completed: false,
    check: 0
  }
}

class App extends React.Component {
  state = {
    show: false,
    give_up: false
  }
  state = prepareStateFromWord(message);
  click = (value) => {
    let guess = [...this.state.guess, value]
    this.setState({ guess })
    if (guess.length === this.state.chars.length) {
      if (guess.join('').toString() === this.state.word) {
        this.setState({ guess: [], completed: true })
      } else {
        this.setState({ guess: [], counter: this.state.counter + 1 })
      }
    }
  }
  show_name = () => {
    this.setState({
      show: !this.state.show
    })
  }

  reset = () => {
    this.setState({ check: this.state.check + 1, completed: false })
  }
  
  render() {
    let ch1= this.state.completed === false ? '' : <button className="button" onClick={this.reset}><h1>Play Again</h1></button>;
    let ans = this.state.completed === false ? '' : <h3 className="ans">This word is {message}</h3>;
    let ch2 = this.state.completed === false ? '' : <h1 className="win">You Win</h1>;
   

    return (
      <div>
        <div>
         <Start/>{
  }
        </div>
        <div className="first">
          <div className="second">
            <div className="profile-area"><img className="profile" src={profile}></img></div>
            <div className="center-box">
              <div className="center-text">
                <div className="text1"><h1 className="text">LAB:3SA03  6035512015</h1></div>
                <div className="click">
                  
                  <div className="box-myname">
                    <div></div>
                    
                  </div>
                </div>
              </div>
            </div>

            <div>
              {
                Array.from(this.state.chars).map((x, y) => (
                  <Ev
                    value={x}
                    key={y}
                    click={this.click}
                    number={this.state.counter}
                    check={this.state.check}
                  />
                ))
              }
              <div className="box">
                <h1 className="text">Choose</h1>
                <h1 className="text">You can play 5 Round</h1>
                {
                  Array.from(this.state.guess).map((x, y) => (
                    <Ev
                      value={x}
                      key={y}
                      click={this.click}
                    />
                  ))
                }
                <div>
                  
                  <Check check_count={this.state.counter} />
                </div>
                <div className="button-area">
                  {ch1}
                  {ans}
                  {ch2}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
export default App;

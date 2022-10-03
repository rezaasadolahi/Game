import { Component } from "react"
import Player from "./Components/Player"


const weapons = ['Paper', 'Rock', 'Scissors']


class App extends Component {
  state = {
    playerOne: weapons[0],
    playerTwo: weapons[0],
    winner: ''
  }


  startGame = () => {
    let count = 0
    let gameInterval = setInterval(() => {
      count++
      this.setState({
        playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
        winner: ''
      })

      if (count > 13) {
        clearInterval(gameInterval)
        this.setState({
          winner: this.selectWinner()
        })
      }
    }, 100)
  }


  selectWinner = () => {
    const { playerOne, playerTwo } = this.state

    if (playerOne === playerTwo) {
      return "Oops it's a Tie!"
    } else if (
      (playerOne === "Rock" && playerTwo === "Scissors") ||
      (playerOne === "Scissors" && playerTwo === "Paper") ||
      (playerOne === "Paper" && playerTwo === "Rock")
    ) {
      return "Player One Wins"
    } else {
      return "Player Two Wins"
    }
  }




  render() {
    return (
      <center>
        <h1 className="mb-5 pb-5">Rock Paper Scissors</h1>

        <section className="d-flex justify-content-center">
          <Player weapon={this.state.playerOne} />
          <Player weapon={this.state.playerTwo} />
        </section>

        <section className="d-flex justify-content-center buttons-player">
          <button
            className="btn btn-dark rounded-circle mx-2 btn-weapon"
            onClick={() => this.setState({ playerOne: 'Paper', winner: '' })}
          >
            Paper
          </button>

          <button
            className="btn btn-dark rounded-circle mx-2 btn-weapon"
            onClick={() => this.setState({ playerOne: 'Rock', winner: '' })}
          >
            Rock
          </button>

          <button
            className="btn btn-dark rounded-circle mx-2 btn-weapon"
            onClick={() => this.setState({ playerOne: 'Scissors', winner: '' })}
          >
            Scissors
          </button>
        </section>

        <h2 className="text-success status-game ">{this.state.winner}</h2>

        <div>
          <button className="btn btn-primary rounded btn-start btn-lg" onClick={this.startGame}>Start</button>
        </div>

      </center>
    )
  }
}


export default App
import React from 'react'
//* Images
import Rock from './Images/rock.png'
import Paper from './Images/paper.png'
import Scissors from './Images/scissors.png'





function Player({ weapon }) {
    return (
        <div className="playerImage mx-5 px-5">
            <img width="200px"
                src={weapon === "Rock" ? Rock : weapon === "Scissors" ? Scissors : Paper}
                alt="Rock Paper Scissors"
            />
        </div>
    )
}


export default Player
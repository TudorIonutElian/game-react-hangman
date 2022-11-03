import React, {Component} from "react";
import GameBoard from "../GameBoard/GameBoard";
import GameStats from "../GameStats/GameStats";

class Game extends Component {
    constructor() {
        super();
        this.state = {
            letters: [
                "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", 
                "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
            ]
        }
    }

    render() {
        return (
            <div className="h-full">
                <div className="text-3xl text-white uppercase font-bold">Hangman Game</div>
                <GameStats />
                <GameBoard originalLetters={this.state.letters}/>
            </div>
        );
    }
}

export default Game;
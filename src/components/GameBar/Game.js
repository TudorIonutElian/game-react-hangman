import React, {Component} from "react";
import GameBoard from "../GameBoard/GameBoard";
import GameStats from "../GameStats/GameStats";

class Game extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="h-full">
                <div className="text-3xl text-white uppercase font-bold">Hangman Game</div>
                <GameStats />
                <GameBoard />
            </div>
        );
    }
}

export default Game;
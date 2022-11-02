import React, {Component} from "react";
import GameStats from "../GameStats/GameStats";

class Game extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="text-3xl text-white uppercase font-bold">Hangman Game</div>
                <GameStats />
            </div>
        );
    }
}

export default Game;
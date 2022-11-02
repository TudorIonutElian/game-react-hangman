import React, {Component} from "react";
import GameStatsSquare from "./GameStatsSquare";

class GameStats extends Component {
    constructor() {
        super();
        this.state = {
            gameStats: [
                { property: "Game Started", value: "NO" },
                { property: "Percentage", value: 100 },
                { property: "Games Played", value: 0 },
            ]
        }
    }

    render() {
        const gameStats = this.state.gameStats.map((gs) =>{
            return <GameStatsSquare property={gs.property} value={gs.value} />
        });

        return (
            <div className="bg-blue-500 w-10/12 mx-auto my-4 rounded-md flex flex-row justify-around h-12 content-center">
                {gameStats}
                <button className="mr-1 py-2 px-4 bg-blue-500 text-blue-50 font-semibold rounded-lg shadow-md hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 border-2 border-blue-50">Start</button>
                <button className="ml-1 py-2 px-4 bg-purple-500 text-blue-50 font-semibold rounded-lg shadow-md hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 border-2 border-blue-50">Reset</button>
            </div>
        );
    }
}

export default GameStats;
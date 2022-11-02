import React, {Component} from "react";

class GameStatsSquare extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="flex flex-row w-1/2 content-center justify-center items-center font-bold text-white">
                <div className="mx-1">{this.props.property}:</div>
                <div className="mx-1 bg-purple-900 rounded-md px-2 py-1">{this.props.value}</div>
            </div>
        );
    }
}

export default GameStatsSquare;
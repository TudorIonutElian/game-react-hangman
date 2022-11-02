import React, {Component} from "react";

function GameBoard(){

    return (
        <div className="flex flex-row h-5/6 border-2 border-purple-900 w-10/12 mx-auto rounded-lg text-white">
            <div className="w-2/5">LEFT GAME BOARD</div>
            <div>RIGHT GAME BOARD</div>
        </div>
    );
}

export default GameBoard;
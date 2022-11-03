import React, {Component} from "react";
import Letter from "../Letter/Letter";

class GameBoard extends Component{
    constructor(props){
        super(props);
        this.state = {
            letters: this.props.originalLetters
        }
    }

    render() {
        const letters = this.state.letters.map((letter)=>{
            return <Letter letter={letter} key={letter} />
        });

        return (
            <div className="flex flex-row h-5/6 border-2 border-purple-900 w-10/12 mx-auto rounded-lg text-white">
                <div className="w-2/5">
                    <div className="elements w-full h-full bg-blue-500 border-4 border-purple-900">

                    </div>
                </div>
                <div className="w-3/5 h-full">
                    <div className="grid grid-cols-9 grid-rows-3 gap-4 my-12 mx-12">
                        {letters}
                    </div>
                </div>
            </div>
        );
    }
}

export default GameBoard;
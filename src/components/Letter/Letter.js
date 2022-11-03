import React, { Component } from "react";

class Letter extends Component {
    render() {
        return (
            <button className="p-2 border-2 border-black rounded-md font-bold text-black bg-blue-400 cursor-pointer hover:bg-purple-600 hover:text-white">
                {this.props.letter}
            </button>
        );
    }
}

export default Letter;
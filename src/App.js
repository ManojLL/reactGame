import React from 'react';
import './gameStyles.css'
class Square extends React.Component {
    render() {
        return (
            <button
                className="square">
                {/*
          todo
          */}
            </button>
        )
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square/>
    }

    render() {
        const status = "next Player X"
        return (

            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )

    }
}

class App extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        )
    }

}

export default App;

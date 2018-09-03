import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.values}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square values={i} />;
  }

  render() {
    const status = 'Next player: X';

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
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

class Login extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <input type="password"/>

      </div>
    )
  }
}


ReactDOM.render(
  <div>
    <Game />  <Login />
  </div>,
  document.getElementById('root')
);


  // ReactDOM.render(
  //   <Login />,
  //   document.getElementById('root')
  // );

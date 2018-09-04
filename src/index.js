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
          <Clock />

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


// My components
class Login extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <input type="password" />

      </div>
    )
  }
}
// My components end

// Clock compoenent starts
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() };
  }

  componentDidMount() {

    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    alert(" will unmount")

  }

  tick() {
    this.setState({
      date: new Date()
    })

  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
class Numbers extends React.Component {
  constructor(props) {

    super(props);
    this.state = { numbers: 2 }
    this.changeToOne = this.changeToOne.bind(this);
    // this.setState({numbers : 1})
  }

  changeToOne() {
    // console.log(this.state)
    if (this.state.numbers === 1) {
      this.setState({ numbers: 2 })
    }
    else {
      this.setState({ numbers: 1 })

    }
  }

  render() {
    let button = this.state.numbers;
    let showing;
    if (button === 2) {
      showing = <button onClick={this.changeToOne} >Abdul</button>
    }
    else {
      showing = <button onClick={this.changeToOne} >Wahid</button>

    }
    return (
      <div>{showing}</div>
    );
  }
}

class Lists extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {}

  }
  render() {
    let mylist = ["abdul","wahid",3,4,5];
    const forLoop=  mylist.map((it,index) => <p>{it}  {index}</p>)

    return (
      <div>{forLoop}</div>

    )
  } 
}


// Clock compoenent ends

ReactDOM.render(
  <div>
    <Game />
    <Login />
    <Numbers />
    <Lists />
  </div>,
  document.getElementById('root')
);

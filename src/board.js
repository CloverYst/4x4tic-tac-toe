import React from 'react';
import Square from './square';


class Board extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         squares:Array(12).fill(null),
    //         xIsNext: true,
    //     }
    // }
    // handleClick(i){
    //     const newsquares = this.state.squares.slice();
    //     if(this.calculateWinner(newsquares) || newsquares[i]){
    //         return;
    //     }
    //     newsquares[i]=this.state.xIsNext? 'X' : 'O';
    //     this.setState({
    //         squares:newsquares,
    //         xIsNext: !this.state.xIsNext,
    //     });
    // }

    renderSquare(i) {
      return (<Square 
                    value={this.props.squares[i]} 
                    onClick={()=>
                        this.props.onClick(i)} 
            />
      );
    }
  
    render() {
    //   const winner = calculateWinner(this.state.squares);
    //   let status;
    //   if(winner){
    //       status = 'Winner' + winner;
    //   }else{
    //       status = 'Next player: ' + (this.state.xIsNext? 'X': 'O');
    //   }
    //   const status = 'Next player: '+ (this.state.xIsNext? 'X':'O');

      return (
        <div>
          {/* <div className="status">{status}</div> */}
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
          </div>
          <div className="board-row">
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
          </div>
          <div className="board-row">
            {this.renderSquare(8)}
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
          </div>
          <div className="board-row">
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
            {this.renderSquare(15)}
          </div>
        </div>
      );
    }
  }

  export default Board;
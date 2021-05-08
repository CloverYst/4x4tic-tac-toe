import React from 'react';

class Square extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         value:null,
    //     };
    // }
    render() {
      return (
        // <button className="square" onClick={() => this.setState({value:'X'})}>
        <button className="square" onClick={() => this.props.onClick()} >
          {/* {this.state.value} */}
          {this.props.value}
        </button>
      );
    }
  }

  export default Square;
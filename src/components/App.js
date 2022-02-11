import React from "react";
import { Component } from "react/cjs/react.production.min";
import { connect } from 'react-redux';

import {increment,decrement} from '../actions'

class App extends Component {

  render() {
    const props = this.props

    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;

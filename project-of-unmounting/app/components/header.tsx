import React, { Component } from 'react'

export default class header extends Component {
    componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
      }
      render() {
        return (
          <h1>Hello World!</h1>
        );
      }

}

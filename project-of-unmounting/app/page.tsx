"use client"
import React, { Component } from 'react'
import  Header  from "./components/header";
import { Console } from 'console';
export default class page extends Component {
  constructor(props:any){
    super(props);
this.state=({value:1})
  }
  removed(){
this.setState({value:0})
  }

  render() {
    return (
      <div>
        {(this.state.value)?<Header/>:<p>i am deleted</p>}
      <div>

      <button onClick={()=>this.removed()}>Delete header </button>
      </div>
      </div>
    )
  }
}




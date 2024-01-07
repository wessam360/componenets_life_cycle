"use client"
import React, { Component } from 'react'

export default class page extends Component {

  constructor(props:any){
    // it is rendered beofre render function
    super(props);
    this.state={value:0,update:`not updatd`}
    // console.log("called as object created")
  }
  // componentDidMount(): void {
  //   // it is called after componenets rendered and after re-redering(updating)
  //   console.log(`called after components rendered`)

  // }
abc(){
  this.setState({value:this.state.value+1 })
}
shouldComponentUpdate() {
  // moves componenet into lock/allowed state on changing of state.
  return true
}
static getDerivedStateFromProps(nextprops:any,nextstate:any){
  // called before rendering and after update
console.log(`next`,nextprops,nextstate)
}
getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
  // give previous prop and called after  update :before update means previous value snapshot 
console.log(`previous`,prevProps,prevState)
}

  render() {
    return (
      <div  className=' h-[100vh] w-[100vw] bg-gradient-to-r to-orange-500 from-yellow-700 '>
{/* <p>{console.log(`called at rendering`)}</p> */}
<p>Value:{this.state.value}</p>
<p>Componenet Update:{this.state.update}</p>
<button onClick={()=>this.abc()} className=' border'>Click me</button>
  </div>
    )
  }
}

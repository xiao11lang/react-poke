import React, { Component } from 'react'
import Poke from './Poke'
export default class Player extends Component {
  render() {
    let pokes=this.props.pokes.map((poke,index)=>{
      return <Poke key={index} activeIndex={poke.activeIndex}></Poke>
    })
    return (
      <div className='player'>
        {pokes}
      </div>
    )
  }
}

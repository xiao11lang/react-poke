import React, { Component } from 'react'
import Poke from './Poke'
import bg from '../imgs/bg.jpg'
export default class Player extends Component {
  render() {
    let pokes=this.props.pokes.map((poke,index)=>{
      return <Poke key={index} activeIndex={poke.activeIndex}></Poke>
    })
    let bgs=this.props.pokes.map((poke,index)=>{
      return <img key={index} src={bg}></img>
    })
    return (
      <div className='player'>
        {this.props.dealing?bgs:pokes}
      </div>
    )
  }
}

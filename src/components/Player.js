import React, { Component } from 'react'
import Pokes from './Pokes'
export default class Player extends Component {
  render() {
    let pokes=this.props.pokes.map((poke,index)=>{
      return <p key={index}>{poke.points}</p>
    })
    return (
      <div className='player'>
        {pokes}
      </div>
    )
  }
}

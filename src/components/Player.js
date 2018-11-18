import React, { Component } from 'react'
import Poke from './Poke'
import bg from '../imgs/bg.jpg'
import check from '../check'
import {connect} from 'react-redux'
class Player extends Component {
  render() {
    let result=''
    if(this.props.pokes.length===2&&this.props.index!==0&&!this.props.dealing){
      let poke1=this.props.currentRoundPoke[this.props.dealIndex[0]];
      let poke2=this.props.pokes
      if(check(poke1,poke2).win){
        result='胜'
      }else{
        result='负'
      }
    }
    let pokes=this.props.pokes.map((poke,index)=>{
      return <Poke key={index} activeIndex={poke.activeIndex}></Poke>
    })
    let bgs=this.props.pokes.map((poke,index)=>{
      return <img key={index} src={bg} alt='none'></img>
    })
    return (
      <div className='player'>
        {this.props.dealing?bgs:pokes}
        <div className={'result'+this.props.index}>{result}</div>
      </div>
    )
  }
}
function select(state){
  return {
    currentRoundPoke:state.currentRoundPoke,
    dealIndex:state.dealIndex
  }
}
export default connect(select)(Player)
import React, { Component } from 'react'
import Player from './components/Player'
import {connect} from 'react-redux'
import * as actions from './store/action'
import {pokes} from './until/poke'
import {shuffle} from './until/shuffle'
class App extends Component {
  constructor(){
    super()
    this.state={
      index:0
    }
  }
  deal(){
    let that=this;
    let index=0;
    let currentRoundPoke=this.props.pokeHeap.slice((this.props.round-1)*8,this.props.round*8)
    console.log(this.props.pokeHeap)
    this.time=setInterval(function(){
      if(index>7){
        clearInterval(that.time)
      }else{
        that.props.deal({
          index:index%4,
          poke:currentRoundPoke[index]
        })
        index++;
      }
      
    },1000)
  }
  newRound(){
    let round=this.props.round;
    if(this.props.round===4){
      round=1;
    }else{
      round++
    }
    this.props.newRound(round)
  }
  componentDidMount (){
    //this.props.init(pokes)
    this.props.shuffle(shuffle(pokes))
    
  }
  
  render() {
    return (
      <div>
        <button onClick={()=>this.deal()} id='start'>start</button>
        <button onClick={()=>this.newRound()} id='new'>new</button>
        <Player pokes={this.props.currentRoundPoke[0]}></Player>
        <Player pokes={this.props.currentRoundPoke[1]}></Player>
        <Player pokes={this.props.currentRoundPoke[2]}></Player>
        <Player pokes={this.props.currentRoundPoke[3]}></Player>
      </div>
    )
  }
}
function select(state){
  return {
    pokeHeap:state.pokeHeap,
    currentRoundPoke:state.currentRoundPoke,
    round:state.round
  }
}
export default connect(select,actions)(App)
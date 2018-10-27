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
    let currentRoundPoke=this.props.pokeHeap.slice(0,8)
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
  componentDidMount (){
    //this.props.init(pokes)
    this.props.shuffle(shuffle(pokes))
    
  }
  
  render() {
    return (
      <div>
        <button onClick={()=>this.deal()}>start</button>
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
    currentRoundPoke:state.currentRoundPoke
  }
}
export default connect(select,actions)(App)
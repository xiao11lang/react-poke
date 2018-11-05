import React, { Component } from 'react'
import Player from './components/Player'
import {connect} from 'react-redux'
import * as actions from './store/action'
import {pokes} from './until/poke'
import {shuffle} from './until/shuffle'
import './App.css'
class App extends Component {
  constructor(){
    super()
    this.state={
      newRound:true,
      dealing:false
    }
  }
  deal(){
    let that=this;
    let index=0;
    let currentRoundPoke=this.props.pokeHeap.slice((this.props.round-1)*8,this.props.round*8)
    this.time=setInterval(function(){
      if(index>7){
        clearInterval(that.time);
        that.setState(()=>{
          return {
            newRound:false,
            dealing:false
          }
        })
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
      this.props.shuffle(shuffle(pokes.slice(0)))
    }else{
      round++;
    }
    this.props.newRound(round);
    this.setState(()=>{
      return {
        newRound:true,
        dealing:false
      }
    })
  }
  dice(){
    let count=0;
    let that=this;
    //this.newRound()
    //this.props.dice(3+Math.round(9*Math.random()))
    this.setState({
      dealing:true
    })
    this.timer=setInterval(function(){
      if(count===10){
        clearInterval(that.timer);
        that.deal()
      }else{
        that.props.dice(3+Math.round(9*Math.random()));
        count++
      }
    },100)
  }
  componentDidMount (){
    //this.props.init(pokes)
    this.props.shuffle(shuffle(pokes.slice(0)))
    
  }
  
  render() {
    let players=this.props.dealIndex.map((playIndex,index)=>{
      return <Player key={index} pokes={this.props.currentRoundPoke[playIndex]} dealing={this.state.dealing}></Player>
    })
    return (
      <div>
        {this.state.newRound&&!this.state.dealing?<button onClick={()=>this.dice()} id='dice'>掷骰子</button>:null}
        {!this.state.newRound?<button onClick={()=>this.newRound()} id='new'>下一轮</button>:null}
        <p>{this.props.diceNumber}</p>
        {players}
      </div>
    )
  }
}
function select(state){
  return {
    pokeHeap:state.pokeHeap,
    currentRoundPoke:state.currentRoundPoke,
    round:state.round,
    diceNumber:state.diceNumber,
    dealIndex:state.dealIndex
  }
}
export default connect(select,actions)(App)
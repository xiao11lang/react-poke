import * as Actions from './constant'
import {combineReducers} from 'redux'
function pokeHeap(state=[],action){
    switch(action.type){
        case Actions.INIT:
        return action.pokes;
        case Actions.SHUFFLE:
        return action.pokes;
        default: return state

    }
}//扑克堆
function currentIndex(state=0,action){
    if(action.type===Actions.DEAL){
        return action.index
    }else{
        return state
    }
}//
function currentRoundPoke(state=[[],[],[],[]],action){
    if(action.type===Actions.DEAL){
        return state.map((poke,index)=>{
            if(index===action.index){
                return [action.poke,...poke]
            }else{
                return poke
            }
        })
    }else if(action.type===Actions.NEWROUND){
        return [[],[],[],[]]
    }
    else{
        return state
    }
}//本轮牌堆上前八张扑克
function round(state=1,action){
    if(action.type===Actions.NEWROUND){
        return action.round
    }else{
        return state
    }
}//当前轮数，共四轮
function dealIndex(state=[0,1,2,3],action){
    if(action.type===Actions.DICE){
        switch(action.diceNumber%4){
            case 0:
            return [1,2,3,0];
            case 1:
            return [0,1,2,3];
            case 2:
            return [3,0,1,2];
            case 3:
            return [2,3,0,1];
        }
    }else{
        return state
    }
}//投掷色子点数不同，抓牌顺序不同
function diceNumber(state=3,action){
    if(action.type===Actions.DICE){
        return action.diceNumber
    }else{
        return state
    }
}//色子点数
export default combineReducers({pokeHeap,currentIndex,currentRoundPoke,round,dealIndex,diceNumber})
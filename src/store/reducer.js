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
}
function currentIndex(state=0,action){
    if(action.type===Actions.DEAL){
        return action.index
    }else{
        return state
    }
}
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
}
function round(state=1,action){
    if(action.type===Actions.NEWROUND){
        return action.round
    }else{
        return state
    }
}
export default combineReducers({pokeHeap,currentIndex,currentRoundPoke,round})
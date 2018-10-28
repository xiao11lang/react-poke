import * as Actions from './constant'
export function init(pokes){
    return {
        type:Actions.INIT,
        pokes
    }
}
export function shuffle(pokes){
    return {
        type:Actions.SHUFFLE,
        pokes
    }
}
export function deal({index,poke}){
    return {
        type:Actions.DEAL,
        index,
        poke
    }
}
export function newRound(round){
    return {
        type:Actions.NEWROUND,
        round
    }
}
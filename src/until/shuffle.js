export function shuffle(arr){
    let res=[];
    let n=arr.length;
    while(n>0){
        res.push(arr.splice(Math.floor(Math.random()*n),1)[0])
        n--
    }
    return res
}
export function deal(pokes){}
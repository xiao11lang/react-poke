function isKing(pokes) {
    if (pokes[0].points === 3 && pokes[1].points === 6 && pokes[1].weight === 8) {
        return true
    } else if (pokes[1].points === 3 && pokes[0].points === 6 && pokes[0].weight === 8) {
        return true
    } else {
        return false
    }
}//是否为王牌

function isDouble(pokes) {
    if (pokes[0].points === pokes[1].points && pokes[0].weight === pokes[1].weight) {
        return true
    } else {
        return false
    }
}//是否对子

function pointsEqualZero(pokes) {
    if ((pokes[0].points + pokes[1].points) % 10 === 0) {
        return true
    } else {
        return false
    }
}//点数和是否为10的倍数
function getZeroWeight(pokes){
    let sortPokes=pokes.sort(function(p1,p2){
        return p2.weight-p1.weight
    })
    if(sortPokes[0].weight===7&&sortPokes[1].weight===5){
        return {
            weight:5
        }
    }else if(sortPokes[0].weight===7&&sortPokes[1].weight===1){
        return {
            weight:4
        }
    }else if(sortPokes[0].weight===6&&sortPokes[1].weight===5){
        return {
            weight:3
        }
    }else if(sortPokes[0].weight===6&&sortPokes[1].weight===1){
        return {
            weight:2
        }
    }else{
        return {
            weight:1
        }
    }
}//点数为10倍数时获取权重
function getPointsSum(pokes){
    return (pokes[0].points+pokes[1].points)%10
}//获取点数和
function getWeightSum(pokes){
    return pokes[0].weight+pokes[1].weight
}//获取权重和
function check(poke1, poke2) {
    //王牌
    if (isKing(poke1)) {
        return {
            win: false
        }
    } else if (isKing(poke2)) {
        return {
            win: true
        }
    } else {
        if (isDouble(poke1) && isDouble(poke2)) {
            if (poke1[0].weight >= poke2[0].weight) {
                return {
                    win: false
                } //都是对子
            }
        } else if (isDouble(poke1) && !isDouble(poke2)) {
            return {
                win: false
            } //庄家对子
        } else if (!isDouble(poke1) && isDouble(poke2)) {
            return {
                win: true
            } //闲家对子
        } else {
            //都不是，比较点数
            //点数为10倍数先排除Q8 28的情况
            if (pointsEqualZero(poke1) && pointsEqualZero(poke1)) {
                /*处理点数和为10整数倍*/
                if(getZeroWeight(poke1)>=getZeroWeight(poke2)){
                    return {
                        win:false
                    }//庄家权重大
                }else{
                    return {
                        win:true
                    }
                }
            } else if (pointsEqualZero(poke1) && !pointsEqualZero(poke1)) {
                if(getZeroWeight(poke1)===1){
                    return {
                        win:true
                    }//庄家为最小点数
                }else{
                    return {
                        win:false
                    }//庄家为天杠或地杠
                }
                
            } else if (!pointsEqualZero(poke1) && pointsEqualZero(poke1)) {
                if(getZeroWeight(poke2)===1){
                    return {
                        win:false
                    }//闲家为最小牌
                }else{
                    return {
                        win:true
                    }//闲家为天杠或地杠
                }
                
            } else {
                /*处理不为对子，点数和不为10整数倍，仅比较点数和*/
                if(getPointsSum(poke1)>getPointsSum(poke2)){
                    return {
                        win:false
                    }//庄家点数和大
                }else if(getPointsSum(poke1)===getPointsSum(poke2)){
                    /*处理点数和一样*/
                    if(getWeightSum(poke1>=getWeightSum(poke2))){
                        return {
                            win:false
                        }//庄家权重和较大
                    }else{
                        return {
                            win:true
                        }//闲家权重和大
                    }
                }else{
                    return {
                        win:true
                    }//闲家点数和大
                }
            }
        }
    }

}
export default check
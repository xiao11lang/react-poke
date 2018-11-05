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

            } else if (pointsEqualZero(poke1) && !pointsEqualZero(poke1)) {

            } else if (!pointsEqualZero(poke1) && pointsEqualZero(poke1)) {

            } else {

            }
        }
    }

}
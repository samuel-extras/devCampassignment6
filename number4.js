function generateRandom(){
    var randomTimes20=  (Math.random()*20)
    if(randomTimes20 >10){
        return randomTimes20
    }else{
        return (randomTimes20 + 10)
    }
}
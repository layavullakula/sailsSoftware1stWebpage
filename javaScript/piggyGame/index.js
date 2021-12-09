var pict = document.getElementById("ppp");
var rollDiceBtn = document.getElementById("rollDice");
var switchPlayer = document.getElementById("switch")
var score1 = document.getElementById("score1")
var score2 = document.getElementById("score2")


rollDiceBtn.addEventListener("click",function(){
    // console.log(pict.src)

    if(score1.textContent<50 && score2.textContent<50){
        const randomId = Math.trunc(Math.random()*6)+1
        pict.src = "https://layavullakula.github.io/sailsSoftware1stWebpage/javaScript/piggyGame/dices/dice"+randomId+".jpg"
    
        console.log("no one won")
        if (pict.src !== "https://layavullakula.github.io/sailsSoftware1stWebpage/javaScript/piggyGame/dices/dice1.jpg"){
            // console.log("random Id", randomId)
            switchPlayer.textContent === "Player 1 Chance" ? score1.textContent = parseInt(score1.textContent)+randomId : score2.textContent = parseInt(score2.textContent)+randomId
            // switchPlayer.textContent === "Player 1" ? 
        }else{
            // console.log("6",switchPlayer.textContent)
            switchPlayer.textContent = switchPlayer.textContent === "Player 1 Chance" ? "Player 2 Chance" : "Player 1 Chance"
        }
    }else if (score1.textContent >= 50){
        result.textContent = "Player 1 Wins"
        switchPlayer.textContent = ""
    }else if (score2.textContent >= 50){
        result.textContent = "Player 2 Wins"
        switchPlayer.textContent = ""
    }

    
})

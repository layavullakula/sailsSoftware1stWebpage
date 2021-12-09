var pict = document.getElementById("ppp");
var rollDiceBtn = document.getElementById("rollDice");
var switchPlayer = document.getElementById("switch")

rollDiceBtn.addEventListener("click",function(){
    const randomId = Math.trunc(Math.random()*6)+1
    pict.src = "dices/dice"+randomId+".jpg"
    console.log(pict.src)

    if (pict.src === "./javaScript/piggyGame/dices/dice1.jpg"){
        console.log("6 number dice")
        switchPlayer.textContent = switchPlayer.textContent === "Player 1" ? "Player 2" : "Player 1"
    }
})

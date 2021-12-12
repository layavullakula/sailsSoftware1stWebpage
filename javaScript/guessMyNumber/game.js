let generatedNumber
let guessedNumber


function generateNumber(){
    console.log("cover",cover)

    generatedNumber = Math.trunc(Math.random()*100)+1
    cover.textContent = "Number generated, Now input the number to check" 
    console.log("cover",cover)

    generateBtn.classList.add("ndis")
    checkBtn.classList.remove("ndis")
    guessInput.classList.remove("ndis")
}

function generateNumbe(){
    guessedNumber = guessInput.value
    console.log(generatedNumber,guessedNumber, score.textContent)
    if (generatedNumber < guessedNumber){
        outpuText.textContent = "Too High"
        score.textContent = parseInt(score.textContent)> 0 ?  parseInt(score.textContent) - 1 : gameEnded()
        wholeBg.classList.remove("wrg2")
        wholeBg.classList.add("wrg1")
    }else if (generatedNumber > guessedNumber){
        outpuText.textContent = "Too Low"
        score.textContent = parseInt(score.textContent)> 0 ?  parseInt(score.textContent) - 1 : gameEnded()
        wholeBg.classList.remove("wrg1")
        wholeBg.classList.add("wrg2")
    }else{
        outpuText.textContent = "Right"
        maxScore.textContent = parseInt(maxScore.textContent)<parseInt(score.textContent) ? score.textContent : maxScore.textContent
        wholeBg.classList.remove("wrg2", "wrg1")
        wholeBg.classList.add("crt")
    }
}



function restartGame(){
    console.log("came")
    wholeBg.classList.remove("wrg1", "wrg2", "crt")
    cover.textContent = "Firstly, click on generate Button to generate a number"
    score.textContent = 20
    generateBtn.classList.remove("ndis")
    checkBtn.classList.add("ndis")
    guessInput.classList.add("ndis")
    outpuText.textContent = ""
}

function gameEnded(){
    alert("Limit Exceeded Click on Restart Button")
}
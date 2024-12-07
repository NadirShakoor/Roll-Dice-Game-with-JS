
// const randomnumber = Math.floor(Math.random()*6)+1

const dicebtn = document.getElementById("dice-btn")
const result = document.getElementById("resultMessage")
const img = document.getElementById("diceImage")
const newGame = document.getElementById("new-game")
const inputname = document.getElementById("name-input")

function rollDice(){
    const randomnumber = Math.floor(Math.random()*6)+1
    // const img = {
    //     1: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg",
    //     2: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg",
    //     3: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg",
    //     4: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg",
    //     5: "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg",
    //     6: "https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg"
    // }
    // img.style.opacity = 0;
    // img.style.transition = " opacity 0.3s ease"
    
    
    setTimeout(() => {
    if (randomnumber === 1){
        img.src = "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg"
    }else if (randomnumber === 2){
        img.src = "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg"
    }else if (randomnumber === 3){
        img.src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg"
    }else if(randomnumber === 4){
        img.src = "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg"
    }else if (randomnumber === 5){
        img.src = "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg"
    }else if (randomnumber === 6){
        img.src = "https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg"
    }
    
    let name = inputname.value.trim()
    if (randomnumber >=4){
         result.textContent = `You rolled a ${randomnumber}!🎉 You Win!🏆 : ${name}`
         result.style.color = "green"
    }else{
        result.textContent = `You rolled a ${randomnumber}.😢 You Lose! Try Again! : ${name}`
        result.style.color = "red"
    }

    
    img.style.display = "block"
    img.style.opacity = 1;
}, 300);
}

function newgame(){
    img.style.display = "none"
    result.textContent = "Click the button to roll the dice!"
    result.style.color = "black"
    img.src = ""
   
}
dicebtn.addEventListener("click",rollDice)
newGame.addEventListener("click",newgame)
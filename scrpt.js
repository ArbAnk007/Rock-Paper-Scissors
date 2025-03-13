let h2 = document.querySelector('h2')
let p = document.querySelector('p')

// Retrieving the data from local storage.
let score = JSON.parse(localStorage.getItem('score'))

// If there is no data in the local storage then create an object with default values.
if(score === null){
    score = {
        won:0,
        lost:0,
        ties:0
    }
}

// All the functions required for the game.
function rock(){
    // Choosing the computer's move.
    let botMove = Math.floor(Math.random()*3)

    // Checking if its win lose or draw.
    if(botMove == 0){
        score.ties++
        h2.innerHTML = `You<img src="./Assets/rock-emoji.png"> <img src="./Assets/rock-emoji.png">Bot<br>It is a tie!`
    }else if(botMove == 1){
        score.lost++
        h2.innerHTML = `You<img src="./Assets/rock-emoji.png"> <img src="./Assets/paper-emoji.png">Bot<br>Bot Won!`
    }else{
        score.won++
        h2.innerHTML = `You<img src="./Assets/rock-emoji.png"> <img src="./Assets/scissors-emoji.png">Bot<br>You Won!`

    }

    // Displaying the score using DOM manipulation.
    p.innerText =  `Won: ${score.won} Lost: ${score.lost} Ties: ${score.ties}`

    // Saving the score in the local storage for future games.
    localStorage.setItem('score',JSON.stringify(score))

}

function paper(){
    // Choosing the computer's move.
    let botMove = Math.floor(Math.random()*3)

    // Checking if its win lose or draw.
    if(botMove == 0){
        score.won++
        h2.innerHTML = `You<img src="./Assets/paper-emoji.png"> <img src="./Assets/rock-emoji.png">Bot<br>You Won!`
    }else if(botMove == 1){
        score.ties++
        h2.innerHTML = `You<img src="./Assets/paper-emoji.png"> <img src="./Assets/paper-emoji.png">Bot<br>It is a tie!`
    }else{
        score.lost++
        h2.innerHTML = `You<img src="./Assets/paper-emoji.png"> <img src="./Assets/scissors-emoji.png">Bot<br>Bot Won!`
    }

    // Displaying the score using DOM manipulation.
    p.innerText =  `Won: ${score.won} Lost: ${score.lost} Ties: ${score.ties}`

    // Saving the score in the local storage for future games.
    localStorage.setItem('score',JSON.stringify(score))



}

function scissors(){
    // Choosing the computer's move.
    let botMove = Math.floor(Math.random()*3)

    // Checking if its win lose or draw.
    if(botMove == 0){
        score.lost++
        h2.innerHTML = `You<img src="./Assets/scissors-emoji.png"> <img src="./Assets/rock-emoji.png">Bot<br>Bot Won!`
    }else if(botMove == 1){
        score.won++
        h2.innerHTML = `You<img src="./Assets/scissors-emoji.png"> <img src="./Assets/paper-emoji.png">Bot<br>You Won!`
    }else{
        score.ties++
        h2.innerHTML = `You<img src="./Assets/scissors-emoji.png"> <img src="./Assets/scissors-emoji.png">Bot<br>It is a tie!`
    }

    // Displaying the score using DOM manipulation.
    p.innerText =  `Won: ${score.won} Lost: ${score.lost} Ties: ${score.ties}`

    // Saving the score in the local storage for future games.
    localStorage.setItem('score',JSON.stringify(score))
    

}

function reset(){
    // Resetting all the score to zero.
    score.won = 0
    score.lost = 0
    score.ties = 0
    h2.innerText = "Score Reset!"
    p.innerText =  `Won: ${score.won} Lost: ${score.lost} Ties: ${score.ties}`
    
    // Storing the resetted data in local storage.
    localStorage.setItem('score',JSON.stringify(score))
}

let intervalId
let autoPlayStatus = false
let autoPlayId

// Creating a function which allows two bots to play automatically.
function autoPlay(){
    if(!autoPlayStatus){
        document.querySelector('#auto-play').innerText = "Stop Play"
        autoPlayId = setInterval(function(){
            let botOneMove = Math.floor(Math.random()*3)
            let botTwoMove = Math.floor(Math.random()*3)
            if(botOneMove==0){
                if(botTwoMove == 0){
                    score.ties++
                    h2.innerHTML = `Bot1<img src="./Assets/rock-emoji.png"> <img src="./Assets/rock-emoji.png">Bot2`
                }else if(botTwoMove == 1){
                    score.lost++
                    h2.innerHTML = `Bot1<img src="./Assets/rock-emoji.png"> <img src="./Assets/paper-emoji.png">Bot2`
                }else{
                    score.won++
                    h2.innerHTML = `Bot1<img src="./Assets/rock-emoji.png"> <img src="./Assets/scissors-emoji.png">Bot2`
                }
            
                // Displaying the score using DOM manipulation.
                p.innerText =  `Won: ${score.won} Lost: ${score.lost} Ties: ${score.ties}`
            
                // Saving the score in the local storage for future games.
                localStorage.setItem('score',JSON.stringify(score))
            }else if(botOneMove == 1){
                if(botTwoMove == 0){
                    score.ties++
                    h2.innerHTML = `Bot1<img src="./Assets/paper-emoji.png"> <img src="./Assets/rock-emoji.png">Bot2`
                }else if(botTwoMove == 1){
                    score.lost++
                    h2.innerHTML = `Bot1<img src="./Assets/paper-emoji.png"> <img src="./Assets/rock-emoji.png">Bot2`
                }else{
                    score.won++
                    h2.innerHTML = `Bot1<img src="./Assets/paper-emoji.png"> <img src="./Assets/rock-emoji.png">Bot2`
                }

                // Displaying the score using DOM manipulation.
                p.innerText =  `Won: ${score.won} Lost: ${score.lost} Ties: ${score.ties}`
            
                // Saving the score in the local storage for future games.
                localStorage.setItem('score',JSON.stringify(score))
            }else{
                if(botTwoMove == 0){
                    score.ties++
                    h2.innerHTML = `Bot1<img src="./Assets/scissors-emoji.png"> <img src="./Assets/rock-emoji.png">Bot2`
                }else if(botTwoMove == 1){
                    score.lost++
                    h2.innerHTML = `Bot1<img src="./Assets/scissors-emoji.png"> <img src="./Assets/paper-emoji.png">Bot2`
                }else{
                    score.won++
                    h2.innerHTML = `Bot1<img src="./Assets/scissors-emoji.png"> <img src="./Assets/scissors-emoji.png">Bot2`
                }

                // Displaying the score using DOM manipulation.
                p.innerText =  `Won: ${score.won} Lost: ${score.lost} Ties: ${score.ties}`
            
                // Saving the score in the local storage for future games.
                localStorage.setItem('score',JSON.stringify(score))
            }
        },1000)
        autoPlayStatus = true
    }else{
        clearInterval(autoPlayId)
        autoPlayStatus = false
        document.querySelector('#auto-play').innerText = "Auto Play"
    }
    
}





// Calling all the functions above using the event listener on buttons.
document.querySelector('#rock').addEventListener('click',rock)
document.querySelector('#paper').addEventListener('click',paper)
document.querySelector('#scissors').addEventListener('click',scissors)
document.querySelector('#reset').addEventListener('click',reset)
document.querySelector('#auto-play').addEventListener('click',autoPlay)

// Displaying the score as the page loads.
p.innerText = `Won: ${score.won} Lost: ${score.lost} Ties: ${score.ties}`

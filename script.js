// For players to score themselves
let add = document.getElementById('increment')
let reset1 = document.getElementById('reset')
let int = document.getElementById('number')
var integer = 0
//
// For players to time themselves
var seconds = 00
var tens = 00
var appendTens = document.getElementById('tens')
var appendSeconds = document.getElementById('seconds')
var buttonStart = document.getElementById('button-start')
var buttonStop = document.getElementById('button-stop')
var buttonRestart = document.getElementById('button-restart')


add.addEventListener('click', function(){
    integer += 1
    int.innerHTML = integer
})

reset1.addEventListener('click', function(){
    integer -= 1
    int.innerHTML = integer
})

function startTimer(){
    tens++
    if(tens<9){
        appendTens.innerHTML = '0' + tens;
    }
    if(tens>9){
        appendTens.innerHTML = tens;
    } 
    if(tens>99){
        seconds++
        appendSeconds.innerHTML = "0" + seconds
        tens = 0
        appendTens.innerHTML = '0' + 0
    }
    if(seconds>9){
        appendSeconds.innerHTML = seconds
    }

}

buttonStart.onclick = function(){
    interval = setInterval(startTimer,10)
}

buttonStop.onclick = function(){
    clearInterval(interval);
}

buttonRestart.onclick = function(){
    clearInterval(interval)
    tens = '00'
    seconds = '00'
    appendSeconds.innerHTML = seconds
    appendTens.innerHTML = tens
}



const flashcards = document.getElementsByClassName("flashcards")[0];
const createBox = document.getElementsByClassName("createBox")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer") ;
let contentArray = localStorage.getItem("items") ? 
JSON.parse(localStorage.getItem("items")) : [];

contentArray.forEach(divMaker)
function divMaker(text){
    var div = document.createElement('div')
    var h2_question = document.createElement('h2')
    var h2_answer = document.createElement('h2')

    div.className = 'flashcard'

    h2_question.setAttribute('style', '; padding: 15px; margin-top:30px;color:white')

    h2_question.innerHTML = text.my_question

    h2_answer.setAttribute('style', 'text-align:center; display:none;color:white')

    h2_answer.innerHTML = text.my_answer

    div.appendChild(h2_question)
    div.appendChild(h2_answer)

    div.addEventListener('click', function(){
        if(h2_answer.style.display == 'none')
        h2_answer.style.display = 'block'
        else
        h2_answer.style.display = 'none'
    })

    flashcards.appendChild(div)

}

function addFlashcard(){
    var flashcard_info = {
        'my_question' : question.value,
        'my_answer' : answer.value
    }

    contentArray.push(flashcard_info)
    localStorage.setItem("items", JSON.stringify(contentArray))
    divMaker(contentArray[contentArray.length - 1])
    question.value = ''
    answer.value = ''

}

function deleteFlashcard(){
    localStorage.clear()
    flashcards.innerHTML = '';
    contentArray = []
}

function showCreateCardBox() {
    createBox.style.display = 'block'
}

function hideCreateBox() {
    createBox.style.display = 'none'
}



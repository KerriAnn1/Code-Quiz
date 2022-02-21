var currentQuestion = 0
var time = 10
var timerId;
var questionsEl = document.getElementById("questions")
var timerEl = document.getElementById("time")
var choicesEl = document.getElementById("choices")
var submitBtn = document.getElementById("submit")
var startBtn = document.getElementById("start")
var initialsEl = document.getElementById("initials")
var feedbackEl = document.getElementById("feedback")
var endScreenEl = document.getElementById("end-screen")

function startQuiz(){
    console.log ("starting quiz")
    var startScreenEl = document.getElementById("start-screen")
    startScreenEl.setAttribute("class", "hide")
    questionsEl.removeAttribute("class", "hide")
    timerId= setInterval(clockTick, 1000) 
    timerEl.textContent=time
    getQuestions()
}
//define clocktick frunction//
function clockTick(){
    console.log (time)
    //print time value to timer//
    timerEl.textContent = time;
    //decrement the value of time by 1//
    time--;
    if (time === 0) {
        //replace alert method with end quiz//
      endScreenEl.removeAttribute("class", "hide")
      questionsEl.setAttribute("class", "hide")
      clearInterval(timerId)
    }
}


function getQuestions(){
    var cur = questions[currentQuestion]
    console.log(cur)
    var titleElement = document.getElementById("question-title")
    titleElement.textContent=cur.title 
    choicesEl.innerHTML=""
    cur.choices.forEach(function(choice,i){
        var choiceEl=document.createElement("button")
        choiceEl.setAttribute("class", "choice")
        choiceEl.setAttribute("value", choice)
        choiceEl.textContent=i +1+"." +choice
        choicesEl.appendChild(choiceEl)
        
    })

    
}

function checkAnswer(){
    if (this.value !== questions[currentQuestion].answer){

    }
}

startBtn.addEventListener("click", startQuiz)







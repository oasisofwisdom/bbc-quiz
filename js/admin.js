import { db } from "./firebase.js"

import {
doc,
updateDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"

let questionIndex = 0

async function nextQuestion(){

questionIndex++

await updateDoc(doc(db,"quiz","state"),{

currentQuestion: questionIndex

})

}

async function prevQuestion(){

questionIndex--

await updateDoc(doc(db,"quiz","state"),{

currentQuestion: questionIndex

})

}

async function startTimer(){

await updateDoc(doc(db,"quiz","state"),{

timer:15

})

}

async function revealAnswer(){

await updateDoc(doc(db,"quiz","state"),{

showAnswer:true

})

}

window.nextQuestion = nextQuestion
window.prevQuestion = prevQuestion
window.startTimer = startTimer
window.revealAnswer = revealAnswer

import { db } from "./firebase.js"

import {

doc,
onSnapshot

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"

const stateRef = doc(db,"quiz","state")

onSnapshot(stateRef,(doc)=>{

let data = doc.data()

if(data.quizStarted){

document.getElementById("waiting").style.display="none"
document.getElementById("questionArea").style.display="block"

}

})

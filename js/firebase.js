// Firebase libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"

const firebaseConfig = {

apiKey: "AIzaSyAmhkuBBy-jjevVz9AkdMTG3XYzMNTtDlg",
authDomain: "bbc-quiz-9bbf7.firebaseapp.com",
projectId: "bbc-quiz-9bbf7",

}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }

document
.getElementById("loginForm")
.addEventListener("submit", function(e){

e.preventDefault()

let name = document.getElementById("name").value
let fellowship = document.getElementById("fellowship").value

localStorage.setItem("bbc_name", name)
localStorage.setItem("bbc_fellowship", fellowship)

window.location.href = "quiz.html"

})

let questions = []

fetch("data/questions.json")
.then(res => res.json())
.then(data => {

questions = data

})

let name = localStorage.getItem("bbc_name")

document
.getElementById("welcome")
.innerText = "Welcome " + name

// later this will connect to Firebase


const interval = 1000
let myVar = setInterval(myTimer, interval);


function myTimer() {
	//console.log("sec")
	let now = document.querySelector("#counter").innerText 

	document.querySelector("#counter").innerText = parseInt(now, 10) + 1
}

const form = document.querySelector("#comment-form")	
form.addEventListener('submit', function(event){
	event.preventDefault()
	const ul = document.querySelector("#list")
	const li = document.createElement("li")
	li.innerText = event.target[0].value
	ul.appendChild(li)
	form.reset()
})

document.addEventListener('click', function (event) {


	if (event.target.id == '+'){
		let now = document.querySelector("#counter").innerText 
		document.querySelector("#counter").innerText = parseInt(now, 10) + 1
	}
	if (event.target.id == '-'){
		let now = document.querySelector("#counter").innerText 
		document.querySelector("#counter").innerText = parseInt(now, 10) - 1

	}
	if (event.target.id == '<3'){
		const ul = document.querySelector(".likes")
		const li = document.createElement("li")
		li.innerText = document.querySelector("#counter").innerText + " likes"
		ul.appendChild(li)
	}

	let now = 0

	if (event.target.id == 'pause'){
		if (document.getElementById("-").disabled == false) {
			document.getElementById("-").disabled = true
			document.getElementById("+").disabled = true
			document.getElementById("<3").disabled = true
			event.target.innerText = "Resume"
			clearInterval(myVar)

		}else{
			document.getElementById("-").disabled = false
			document.getElementById("+").disabled = false
			document.getElementById("<3").disabled = false
			event.target.innerText = "Pause"

			 myVar = setInterval(myTimer, interval);
		}
	}
})
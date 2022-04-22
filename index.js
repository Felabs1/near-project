// alert("hello world");

// id's

var mydiv = document.getElementById("mydiv");
// mydiv.innerHTML = "hello felix";

function items(){
	const cars = ["toyota", "subaru", "BMW", "volvo"];
	for(index = 0; index < cars.length; index++){
		const element = cars[index];
		const node = document.createElement("li");
		const textNode = document.createTextNode(element);
		node.appendChild(textNode);
		mydiv.appendChild(node);
	}
}


// items();


// function names(){
// 	let name = prompt("input your name");
// 	if (name == undefined || name.length == "0"){
// 		alert("oh no name");
// 	}else{
// 		console.log(`hello ${name}`);
// 	}
// }

// names();


const input = document.getElementById("input");
const result = document.getElementById("result");


const eventListener = function(e){
	// document.write(e.target.value);
	result.innerHTML = e.target.value;
}


input.addEventListener("keyup", eventListener);
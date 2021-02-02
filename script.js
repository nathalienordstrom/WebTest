//the first line of code states that the script will run only after the page has loaded 
//and the script is ready to be executed.
$(document).ready(function () {
	//select the close by class and apply a click even listener
	$(".close").on("click", function () {
		//select the modal element by id , and apply display none when close is clicked
		//this will close the modal on click
		$("#modal").css("display", "none")
	});

});

// local store the name written in the input
function getName() {
	return localStorage.getItem("userName");
}

// get the local stored username to use in greeting
function updateHTML() {
	var name = getName();
	document.getElementById("greeting").innerHTML = "Välkommen  ";
	document.getElementById("storedName").innerHTML = name;
}

function myFunction() {
	// Gets input value
	var name = document.getElementById("myInput").value;

	// Saves data to retrieve later
	localStorage.setItem("userName", name);

	// Updates HTML
	updateHTML();
}


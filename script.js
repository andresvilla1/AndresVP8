// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
	
	
var audio = document.getElementById("you-win");
var a = document.getElementById("bat");
var b = document.getElementById("stick");
var c = document.getElementById("truck");
var d = document.getElementById("mic");
	
// "el" stands for the "element" that was just clicked
function allOpaque(el){
	el.classList.add("opaque");
}

// "el" stands for the "element" that was just clicked
function removeColor(el){
}

function showIngram(el){
}

function nextImage(el){
		if (el.src.match("images/neeganbattwo.png")){
		el.src = "images/stick.png";
	} else if (el.src.match("images/stick.png")){
		el.src = "images/toytruck.png";
	} else if (el.src.match("images/toytruck.png")){
		el.src = "images/mic.png";
	} else if (el.src.match("images/mic.png")){
		el.src = "images/neeganbattwo.png";
	} else {
	}
}

function nextImagetwo(el){
		if (el.src.match("images/stick.png")){
		el.src = "images/neeganbattwo.png";
	} else if (el.src.match("images/neeganbattwo.png")){
		el.src = "images/toytruck.png";
	} else if (el.src.match("images/toytruck.png")){
		el.src = "images/mic.png";
	} else if (el.src.match("images/mic.png")){
		el.src = "images/stick.png";
	} else {
	}
}

function nextImagethree(el){
		if (el.src.match("images/toytruck.png")){
		el.src = "images/mic.png";
	} else if (el.src.match("images/mic.png")){
		el.src = "images/stick.png";
	} else if (el.src.match("images/stick.png")){
		el.src = "images/neeganbattwo.png";
	} else if (el.src.match("images/neeganbattwo.png")){
		el.src = "images/toytruck.png";
	} else {
	}
}

function nextImagefour(el){
		if (el.src.match("images/mic.png")){
		el.src = "images/toytruck.png";
	} else if (el.src.match("images/toytruck.png")){
		el.src = "images/stick.png";
	} else if (el.src.match("images/stick.png")){
		el.src = "images/neeganbattwo.png";
	} else if (el.src.match("images/neeganbattwo.png")){
		el.src = "images/mic.png";
	} else {
	}
}

function myFunction() {
  alert("Correct! Click the key to advance!");
}

function checkConfiguration(el){

	if(document.getElementById("bat").src.match("images/neeganbattwo.png") && document.getElementById("stick").src.match("images/neeganbattwo.png") && document.getElementById("truck"). src.match("images/neeganbattwo.png") && document.getElementById("mic").src.match("images/neeganbattwo.png")){
		document.getElementById("bat").classList.add("opaque");
		document.getElementById("stick").classList.add("opaque");
		document.getElementById("truck").classList.add("opaque");
		document.getElementById("mic").classList.add("opaque");
		document.getElementById("checkanswer").src = "images/key.png";

	} else {
		alert("Wrong! Your dead:(");
	}
}

function  checkConfigurationtwo(el){
	if(a.src.match("images/neeganbattwo.png") && b.src.match("images/neeganbattwo.png") && c.src.match("images/neeganbattwo.png") && d.src.match("images/neeganbattwo.png")){
		a.classList.add("opaque");
		b.classList.add("opaque");
		c.classList.add("opaque");
		d.classList.add("opaque");
		document.getElementById("checkanswer").classList.add("display");
		document.getElementById("key").classList.remove("display");
		alert("Correct! Click the key to enter the next room:)");
	} else {
		alert("Wrong! Your dead:(");
	}
	// when the JACKPOT! button is clicked, play the slot machine sound
}
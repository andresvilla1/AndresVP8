// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
	
	
var audio = document.getElementById("you-win");
a = document.getElementById("bat");
b = document.getElementById("stick");
c = document.getElementById("truck");
d = document.getElementById("mic");
	
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
		alert("Correct! Click the key to advance!");

	} else {
		
	}
}
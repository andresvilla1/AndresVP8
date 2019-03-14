// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
	
	
var a = document.getElementById("bat");
var b = document.getElementById("stick");
var c = document.getElementById("truck");
var d = document.getElementById("mic");
// these are all variables that is used in the checkConfiguration function. 
	

// "el" stands for the "element" that was just clicked
function nextImage(el){
		if (el.src.match("images/neeganbattwo.png")){
		el.src = "images/stick.png"; // 
	} else if (el.src.match("images/stick.png")){
		el.src = "images/toytruck.png";
	} else if (el.src.match("images/toytruck.png")){
		el.src = "images/mic.png";
	} else if (el.src.match("images/mic.png")){
		el.src = "images/neeganbattwo.png";
	} else {
	}
}
// this code is a code that makes the image (when it's clicked on) switch to other images that are named. 


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


function  checkConfigurationtwo(el){
	if(a.src.match("images/neeganbattwo.png") && b.src.match("images/neeganbattwo.png") && c.src.match("images/neeganbattwo.png") && d.src.match("images/neeganbattwo.png")){
		a.classList.add("opaque"); // this code adds the opaque class to the picture/id. 
		b.classList.add("opaque");
		c.classList.add("opaque");
		d.classList.add("opaque");
		document.getElementById("checkanswer").classList.add("display"); // when it this occurs, it gets the id and adds the display class
		document.getElementById("key").classList.remove("display"); // when this occurs, it gets he id and removes the display class it was originally on.
		alert("Correct! Click the key to enter the next room:)");
	} else {
		alert("Wrong! Your dead:("); // an alert is like a notification that pops up on the screen saying something. 
	}
	// when the images match up to the src's then it will add opaque to each a,b,c, and d class. then the class "display" will be removed and will add the class display on the src. Then an alert will pop up saying whatever is in the quotations. Finally, if the srcs dont match up, then a alert will pop up saying whatever is in the quotations.
}
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');
myImage.onclick = function(){
	if(myImage.getAttribute('src') === 'img/firefox-icon.png'){
		myImage.setAttribute('src','img/firefox-logo.jpg');
	} else {
		myImage.setAttribute('src','img/firefox-icon.png');	
	}
}

var myButton = document.querySelector('button');

function setUserName(){
	var myName = prompt("Please enter your name");
	myHeading.textContent = "Mozilla is cool " + myName;
	localStorage.setItem('name', myName);
}

myButton.onclick = function(){
	setUserName();
}

var storedName = localStorage.getItem('name');
if(!storedName){
	setUserName();
} else {
	myHeading.textContent = "Mozilla is cool, " + storedName;
}
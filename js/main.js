var myHeading = document.querySelector('h1');
myHeading.textContent= 'Hello world!';

var myImg = document.querySelector('img');
var myButton = document.querySelector('button');

myImg.onclick = function(){
    var ceyil = myImg.getAttribute('src');
    if(ceyil === 'images/firefox-dev-bluelogo.jpg')
        myImg.setAttribute("src","images/tonbish.jpg");
        else
        myImg.setAttribute("src","images/firefox-dev-bluelogo.jpg");
        
    
}
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
var shown = 0;
var change = 0;
var timer;
var newScale
var start;
var startScaling = 0;
var div = document.querySelector(".threediv > div:first-child");
function changeBac2(){   
  var imageUrl = div.getAttribute("data-image");
  var imageArray = imageUrl.split('/');
  div.style.backgroundImage =  'url("'+ imageArray[change] +'")';
  div.style.backgroundRepeat = "no-repeat";
  div.style.backgroundSize = "cover";
  div.style.backgroundPosition = "center";
  div.style.height = "800px";
  div.style.transition = ""
  startScaling = 0;
  changeContent()
  changeColour()
  start = setInterval(changeScale,100); 
}
function changeScale(){
  let initScale = 1;
  if(startScaling === 0){
    newScale = initScale
    startScaling++;
    div.style.transform = `scale(${newScale}`
    }
    else {
      if (newScale >= 1.05) {
        clearInterval(start);
      }
      else {
        startScaling++;
        newScale += 0.0008;
        div.style.transform = `scale(${newScale}`
       
      }
      
    }
}
function changeBac(){
    change++;  
    if (change >= 4) {
    change = 0;
  }
  changeBac2();   
    if(shown==0){
     
      timer = setInterval(changeBac, 6000);
      shown++;
    } 
      //return true;
      //return false; 
}
function changeContent(){

  var contentDiv = document.querySelectorAll(".threediv > div:nth-child(2) > div >div");
  for(var i = 0; i < contentDiv.length; i++){
    contentDiv[i].style.display = "none";
  }
  contentDiv[change].style.display = "block";
}
function slideRight(){
  changeBac();
  clearInterval(timer);
  timer = setInterval(changeBac, 5000);
}

function slideLeft(){
  if(change <=0){
    change = 3;
  }
  else{
    change--;
  }
  changeBac2();
  clearInterval(timer);
  timer = setInterval(changeBac, 5000);
  
}
 function changeColour(){
   var span= document.querySelectorAll(".threediv > div:nth-child(3) span");
   for(var i = 0; i < span.length; i++){
     span[i].style.backgroundColor = "";
   }
   span[change].style.backgroundColor = "#ffd300";
 }



//*Defining the variables 

let list = document.querySelector('.sliders .list-photos');
let photos = document.querySelectorAll('.sliders .list-photos .photo'); //div list
let previous = document.getElementById('prev');
let next = document.getElementById('next');
let active = 0;
let lenghItems = photos.length - 1; //lenght cantidad de items adentro de esa lista o array 
let playButton = document.getElementById('playbtn');
const images = document.querySelectorAll('img');
let i = 0;
let stopButton = document.getElementById('stopbtn');
var idInterval;

next.onclick = nextImages;

function nextImages() {
    if(active + 1 > lenghItems){
        active = 0
    } else {
        active = active + 1;
    }
    showImages();
}

previous.onclick = function(){
  if(active === 0) {
    active = lenghItems;
  } else {
    active = active -1;
  }
  showImages();
}


playButton.onclick = function(){
   idInterval = setInterval(nextImages,2000);
} 


stopButton.onclick = function() {
    clearInterval(idInterval);
}

function showImages() {
    let checkleft = photos[active].offsetLeft;
    list.style.left = -checkleft + 'px';

    let checkRight = photos[active].offsetRight;
    list.style.right = -checkRight + 'px';
}














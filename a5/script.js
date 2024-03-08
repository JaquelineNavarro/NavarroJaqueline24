
//*Defining the variables 

let list = document.querySelector('.sliders .list-photos');

let photos = document.querySelectorAll('.sliders .list-photos .photo');

let previous = document.getElementById('prev');

let next = document.getElementById('next');


let active = 0;
let lenghItems = photos.length - 1;

next.onclick = function(){
    if(active + 1 > lenghItems){
        active = 0;
    } else {
        active = active + 1;
    }
    reloadSliders();
}

previous.onclick = function(){
    if(active - 1 > lenghItems){
        active = 0;
    } else {
        active = active - 1;
    }
    reloadSliders();
}

function reloadSliders() {
    let checkleft = photos[active].offsetLeft;
    list.style.left = -checkleft + 'px';

    let checkRight = photos[active].offsetRight;
    list.style.right = -checkRight + 'px';
}

var playButton = document.getElementById("playbtn");
playButton.addEventListener("click",setInterval)


function playSlideShow () {
    
}
const images = document.querySelectorAll('img');
let i = 0;

setInterval(function(){
    if(i == 0) {
        images[i].style.display = 'block';
    } else if(i == images.length) {
        images[i - 1].style.display = 'none';
        images[0].style.display = 'block';
        i = 0; 
    } else {
        images[i - 1].style.display = 'none';
        images [i].style.display = 'block';
    }
    i ++;
}, 3000);









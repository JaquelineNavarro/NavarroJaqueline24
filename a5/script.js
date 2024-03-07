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

    let checkRight = phots[active].offsetRight;
    list.style.right = -checkRight + 'px';
}




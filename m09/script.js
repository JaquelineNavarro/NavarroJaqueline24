console.log("script loaded")

var dotSpots = document.getElementById("dotArea");
dotSpots.addEventListener("click",dots);

var deleteBtn = document.getElementById("deleteButton");
deleteBtn.addEventListener("click",deleateAll);


function dots (event) {
    console.log("dots")
    let newSpot = document.createElement("div");
    newSpot.classList.add("dot"); 
    newSpot.style.left = (event.pageX - 4) + "px";
    newSpot.style.top = (event.pageY - 4) + "px";
    document.getElementById("dotArea").appendChild(newSpot);
    
}

function deleateAll () {
    console.log("delete")
    document.getElementById("dotArea").innerHTML = ""
}


console.log("script finish")

// var  mybutton = document.querySelector("button");
// mybutton.addEventListener("click", function(event) {


// var element = document.getElementsByTagName("div");
// for (index = element.length - 1; index >= 0; index--) {
//     element[index].parentNode.removeChild(element[index]);
// }

// // Let us stop the propagation of events

// event.stopPropagation();
//   });
//   addEventListener("click", function(event) {
//     var dot = document.createElement("div");
//     dot.className = "dot";
//     dot.style.left = (event.pageX - 4) + "px";
//     dot.style.top = (event.pageY - 4) + "px";
//     document.body.appendChild(dot);
//   });

// // window.addEventListener("click", event => {
// //     let dot = document.createElement("div");
// //     dot.className = "dot";
// //     dot.style.left = (event.pageX - 4) + "px";
// //     dot.style.top = (event.pageY - 4) + "px";
// //     document.body.appendChild(dot);
// // });
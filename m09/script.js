console.log("script loaded")

var dotSpots = document.getElementById("dotArea");
dotSpots.addEventListener("click",dots);

var deleteBtn = document.getElementById("deleteButton");
deleteBtn.addEventListener("click",deleateAll);


function dots (event) {
    console.log("dots")
    let changeColor = document.getElementById("selectColor").value;
    let changeSize = document.getElementById("selectSize").value;
    let newSpot = document.createElement("div");
 
    newSpot.style.backgroundColor = changeColor;
    newSpot.classList.add(changeSize);
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


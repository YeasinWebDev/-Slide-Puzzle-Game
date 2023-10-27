 let rows = 3;
 let colums = 3;

 let currTile;
 let otherTile; //blank tile

let turns =0;

// let imgOrder = ["1", "2", "3", "4", "5", "6" ,"7", "8","9"]

let imgOrder = ["8", "5", "9", "2", "1", "6", "4", "7", "3"]

window.onload = function() {
    for(let r=0; r<rows ; r++){
        for(let c= 0; c< colums; c++){
            
            // <img id="0-0" src="1.jpg">
            let tile = document.createElement("img")
            tile.id = r.toString() + "-" + c.toString()
            tile.src = imgOrder.shift() + ".jpg"

            // DRAG FUNCTION
            tile.addEventListener("dragstart", dragStart);  //click an image to drag
            tile.addEventListener("dragover", dragOver);    //moving image around while clicked
            tile.addEventListener("dragenter", dragEnter);  //dragging image onto another one
            tile.addEventListener("dragleave", dragLeave);  //dragged image leaving anohter image
            tile.addEventListener("drop", dragDrop);        //drag an image over another image, drop the image
            tile.addEventListener("dragend", dragEnd);      //after drag drop, swap the two tiles


            document.getElementById("board").append(tile)
        }
    }
}


function dragStart() {
    currTile = this; //this refers to the img title being dragged 
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
}

function dragLeave() {

}

function dragDrop(){
    otherTile = this; //this refers to the img title being dropped on
}


function dragEnd() {
    // if(!otherTile.src.includes("3.jpg")){
    //     return
    // }
    
    let currCoods = currTile.id.split("-"); // "0-0" .. [0,0]
    let r = parseInt(currCoods[0])
    let c = parseInt(currCoods[1])


    let otherCoods = otherTile.id.split("-"); // "0-0" .. [0,0]
    let r2= parseInt(otherCoods[0])
    let c2 = parseInt(otherCoods[1])


    let moveLeft = r === r2 && c === c2-1
    let moveRight = r === r2 && c === c2+1

    let moveUp = r === r2 + 1 && c === c2
    let moveDown = r === r2 - 1 && c === c2


    let Move = moveUp || moveDown || moveRight || moveLeft

    if(Move){ 
    let currImg = currTile.src;
    let otherImg = otherTile.src;

    currTile.src = otherImg
    otherTile.src = currImg

    turns += 1;
    document.getElementById("turns").innerHTML = turns
    }
}
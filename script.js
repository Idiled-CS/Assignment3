let numRows = 0;
let numCols = 0;
const grid = document.getElementById("grid");

let colorSelected; 

//Coloring
function color(){
    console.log("I did something!");

}
//Adds a row
function addR() {
    numRows++;

    let newRow = document.createElement("tr");
    newRow.id = "row" + numRows;
    grid.appendChild(newRow);
    //We're making one row then filling that row with the amount of cols we have
    for(var i = 0; i < numCols; i++){
        let newCol = document.createElement("td");
        newCol.id = "col" + i;
        newCol.style.backgroundColor = "white"

        //Adding an onclick function
        newCol.onclick = color();

        newRow.appendChild(newCol);
    }
}
//Adds a column
function addC() {
    numCols++;

    //We're making sure we loop through all the rows and adding a grid element at the end of each to stimulate adding a col
    let rows = grid.children;
    for(var i = 0; i < rows.length; i ++){
        let newCol = document.createElement("td");
        newCol.id = "col" + numCols;
        newCol.style.backgroundColor = "white"

        newCol.onclick = color();

        rows.item(i).appendChild(newCol);
    }
}

//Removes a row
function removeR() {
    //To no care about crashes
    if(grid.children.length == 0)
        return;
    
    //We're just removing them by the last rows
    grid.removeChild(grid.lastElementChild);

    numRows--;
}
//Remove a column
function removeC() {
    let rows = grid.children;

    //We're going through each rows and removing the last elements to remove it by cols
    for(var i = 0; i < rows.length; i ++){
        rows.item(i).removeChild(rows.item(i).lastElementChild);
    }

    numCols--;
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    let t = document.getElementsByTagName("td");

    //Going through the td documents to make them all one color
    for(var x = 0; x < t.length; x++)
        t.item(x).style.backgroundColor = colorSelected;
}

function clearAll(){
    let t = document.getElementsByTagName("td");

    //Making all td tags white
    for(var x = 0; x < t.length; x++)
        t.item(x).style.backgroundColor = "white";
}

function fillU(){
    let t = document.getElementsByTagName("td");

    //Going through the td documents but also checking before making them a certain color
    for(var x = 0; x < t.length; x++){
        if(t.item(x).style.backgroundColor == "white")
            t.item(x).style.backgroundColor = colorSelected;
    }
}
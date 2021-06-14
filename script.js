let numRows = 0;
let numCols = 4;
const grid = document.getElementById("grid");

let colorSelected; 

//Adds a row
function addR() {
    numRows++;
    let newRow = document.createElement("tr");
    newRow.id = "row" + numRows;
    grid.appendChild(newRow);

    for(var i = 0; i < numCols; i++){
        let newCol = document.createElement("td");
        newCol.id = "col" + i;

        newRow.appendChild(newCol);
    }
}
//Adds a column
function addC() {
    numCols++;

    let rows = grid.children;
    for(var i = 0; i < rows.length; i ++){
        let newCol = document.createElement("td");
        newCol.id = "col" + numCols;

        rows.item(i).appendChild(newCol);
    }
}

//Removes a row
function removeR() {
}
//Remove a column
function removeC() {
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
}

function clearAll(){
}

function fillU(){
}
/*
Project Name: Color Swap
Developer: Nathan Garrow
Goal: create array of cells in table and change the color randomly on button push.
*/
//create array of boxes
var box = document.getElementsByClassName("color-box");

function swapColor() {
  //test console.log("working on " + box.length + " elements...");

  for(var i = 0; i < box.length; i++) {
    box[i].style.backgroundColor = "red";
  }
  var compCell = Math.floor(Math.random() * 9);
  if (compCell == 9) {compCell -= 2;};
  console.log(compCell);
  box[compCell].style.backgroundColor = "blue";
}

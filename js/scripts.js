function changePlc() {
  document.querySelector("#form #textInput2").placeholder = "Type name here..";
}
function changeVal() {
  document.querySelector("#form #textInput3").value = "Type name here change..";
}
function resetVal() {
  document.querySelector("#form #textInput3").value = "type something reset..";
}
function clickPlc() {
  document.querySelector("#form #textInput2").placeholder = "";
}
function blurPlc() {
  document.querySelector("#form #textInput2").placeholder =
    "type something blur..";
}
function keyPress(event) {
  console.log(event.keyCode);
}

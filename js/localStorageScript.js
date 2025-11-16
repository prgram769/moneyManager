// Creating the localStorage script for my moneyManager page

const prueba = document.getElementsByTagName("body");

const mainContainerPrueba = document.getElementById("mainContainerID");
const addTableBtn = document.getElementById("addTableButton");

var paragraph = document.getElementById("horizontalLineForm");

// paragraph.style.borderBottom = "0px";

addTableBtn.addEventListener("click", (event) => {
  paragraph.style.borderBottom = "2px solid black";
})

var storedBody;

document.addEventListener("DOMContentLoaded", (event) => {
  if (localStorage.getItem("completeBody") == null) {
    localStorage.setItem("completeBody", storedBody);

    storedParagraph = localStorage.getItem("formSeparateParagraph");
  }

  if (localStorage.getItem("formSeparateParagraph") != null) {
    mainContainerPrueba.textContent = storedParagraph;

  }
})

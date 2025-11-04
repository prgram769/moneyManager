const dateInput = document.getElementById("date");
const descriptionInput = document.getElementById("description");
const categoryInput = document.getElementById("category");
const amountInput = document.getElementById("amount");
const submitButton = document.getElementById("submitButton");
const mainContainer = document.getElementsByClassName("mainContainer");

function addRemoveMoney() {

  var dateInputValue = dateInput.value;
  var descriptionInputValue = descriptionInput.value;
  var categoryInputValue = categoryInput.value;
  var amountInputValue = amountInput.value;
  
  // Create horizontal line

  if (document.getElementById("horizontalLine") == null) {
    var horizontalLine = document.createElement("p");

    horizontalLine.setAttribute("id", "horizontalLine");
    horizontalLine.style.borderBottom = "2px solid black";

    document.body.appendChild(horizontalLine);
  }

  // Create section for table 1

  if (document.getElementById("section") == null) {
    var elementID = 0;

    elementID++;

    var sectionTable1 = document.createElement("section");

    sectionTable1.setAttribute("id", "section");

    document.body.appendChild(sectionTable1);

    if (document.getElementById("addSectionBtn")) {
      var addSectionBtn = document.createElement("button");

      addSectionBtn.setAttribute("id", "addSectionBtn");

      console.log(addSectionBtn);

      mainContainer.appendChild(addSectionBtn);
    }
  }
}

submitButton.addEventListener("click", (event) => {
  addRemoveMoney();
})

const dateInput = document.getElementById("date");
const descriptionInput = document.getElementById("description");
const categoryInput = document.getElementById("category");
const amountInput = document.getElementById("amount");
const submitButton = document.getElementById("submitButton");

function addRemoveMoney() {
  var elementID = 0;

  elementID++;

  var dateInputValue = dateInput.value;
  var descriptionInputValue = descriptionInput.value;
  var categoryInputValue = categoryInput.value;
  var amountInputValue = amountInput.value;
  
  // Create horizontal line

  var horizontalLine = document.createElement("p");
  
  horizontalLine.style.borderBottom = "2px solid black";

  document.body.appendChild(horizontalLine);
}

submitButton.addEventListener("click", (event) => {
  addRemoveMoney();
})

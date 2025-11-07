const dateInput = document.getElementById("date");
const descriptionInput = document.getElementById("description");
const categoryInput = document.getElementById("category");
const amountInput = document.getElementById("amount");
const submitButton = document.getElementById("submitButton");

var mainContainer = document.getElementById("mainContainerID");
var form = document.getElementById("formID");
var main = document.getElementById("mainSemantic");
var elementID = 0;

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

    mainContainer.appendChild(horizontalLine);
  }

  // Create section for table 1

  if (document.getElementById("section") == null) {

    var sectionTable1 = document.createElement("section");

    sectionTable1.setAttribute("id", `section${elementID}`);

    main.appendChild(sectionTable1);

    if (document.getElementById("addSectionBtn") == null) {
      var addSectionBtn = document.createElement("button");

      addSectionBtn.setAttribute("id", "addSectionBtn");
      addSectionBtn.textContent = "Add section";

      form.appendChild(addSectionBtn);
    }
  }

  // create the table
  
  var table = document.createElement("table");

  table.setAttribute("id", `table${elementID}`);

  var tableTitle = document.createElement("caption");

  tableTitle.setAttribute("id", `tableTitle${elementID}`);
  tableTitle.textContent = `Table${elementID}`;

  var tableDate = document.createElement("th");

  tableDate.setAttribute("id", `tableDate${elementID}`);
  tableDate.textContent = "Date";

  var tableDescription = document.createElement("th");

  tableDescription.setAttribute("id", `tableDescription${elementID}`);
  tableDescription.textContent = "Description";

  var tableCategory = document.createElement("th");

  tableCategory.setAttribute("id", `tableCategory${elementID}`);
  tableCategory.textContent = "Category";

  var tableAmount = document.createElement("th");

  tableAmount.setAttribute("id", `tableAmount${elementID}`);
  tableAmount.textContent = "Amount";

  sectionTable1.appendChild(table);

  table.appendChild(tableTitle);
  table.appendChild(tableDate);
  table.appendChild(tableDescription);
  table.appendChild(tableCategory);
  table.appendChild(tableAmount);

  elementID++;
}

submitButton.addEventListener("click", (event) => {
  addRemoveMoney();
})

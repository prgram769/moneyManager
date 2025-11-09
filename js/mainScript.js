const dateInput = document.getElementById("date");
const descriptionInput = document.getElementById("description");
const categoryInput = document.getElementById("category");
const amountInput = document.getElementById("amount");
const addTableButton = document.getElementById("addTableButton");

var mainContainer = document.getElementById("mainContainerID");
var form = document.getElementById("formID");
var main = document.getElementById("mainSemantic");
var addBtn = document.getElementById("addElementsBtn");
var elementID = 0;

function createTable(tableName) {
  if (document.getElementById(`section${elementID}`) == null) {

    var sectionTable = document.createElement("section");

    sectionTable.setAttribute("id", `section${elementID}`);

    main.appendChild(sectionTable);

    var table = document.createElement("table");

    table.setAttribute("id", `table${elementID}`);

    var tableTitle = document.createElement("caption");

    tableTitle.setAttribute("id", `tableTitle${elementID}`);
    tableTitle.textContent = tableName;

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

    sectionTable.appendChild(table);

    table.appendChild(tableTitle);
    table.appendChild(tableDate);
    table.appendChild(tableDescription);
    table.appendChild(tableCategory);
    table.appendChild(tableAmount);

  }

  if (document.getElementById("addElementsBtn") == null) {

    var addElementsBtn = document.createElement("button");

    addElementsBtn.setAttribute("id", "addElementsBtn");
    addElementsBtn.type = "button";
    addElementsBtn.textContent = "Add elements";

    form.appendChild(addElementsBtn);

    addElementsBtn.addEventListener("click", (event) => {

      // Geting the values to the table's rows

      var dateInputValue = dateInput.value;
      var descriptionInputValue = descriptionInput.value;
      var categoryInputValue = categoryInput.value;
      var amountInputValue = amountInput.value;

      // Making the table's rows

      var tableDateRow = document.createElement("td");

      tableDateRow.setAttribute("id", `tableDateRow${elementID}`);
      tableDateRow.textContent = dateInputValue;

      var tableDescriptionRow = document.createElement("td");

      tableDescriptionRow.setAttribute("id", `tableDescriptionRow${elementID}`);
      tableDescriptionRow.textContent = descriptionInputValue;

      var tableCategoryRow = document.createElement("td");

      tableCategoryRow.setAttribute("id", `tableCategoryRow${elementID}`);
      tableCategoryRow.textContent = categoryInputValue;

      var tableAmountRow = document.createElement("td");

      tableAmountRow.setAttribute("id", `tableAmountRow${elementID}`);
      tableAmountRow.textContent = amountInputValue;

      // Adding the elements to the table 

      tableDate.appendChild(tableDateRow);
      tableDescription.appendChild(tableDescriptionRow);
      tableCategory.appendChild(tableCategoryRow);
      tableAmount.appendChild(tableAmountRow);

    })
  }

}

function addRemoveMoney() {

  // Create horizontal line

  if (document.getElementById("horizontalLine") == null) {
    var horizontalLine = document.createElement("p");

    horizontalLine.setAttribute("id", "horizontalLine");
    horizontalLine.style.borderBottom = "2px solid black";

    mainContainer.appendChild(horizontalLine);
  }

  // create the table

  var tableName = prompt("Enter the name of the table");

  tableName = tableName.charAt(0).toUpperCase() + tableName.slice(1);

  createTable(tableName);

  elementID++;
}

addTableButton.addEventListener("click", (event) => {
  addRemoveMoney();
})

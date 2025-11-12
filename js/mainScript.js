// Getting vars

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
var totalValue = 0;

// Creating the subsection to store the sections

if (document.getElementById("subSectionMain") == null) {
  var subSectionMain = document.createElement("section");

  subSectionMain.setAttribute("id", "subSectionMain");

  main.appendChild(subSectionMain);
}

// Creating table

function createTable(tableName) {
  if (document.getElementById(`section${elementID}`) == null) {
    var tableTotalValue = 0;

    var sectionTable = document.createElement("section");

    sectionTable.setAttribute("id", `section${elementID}`);

    subSectionMain.appendChild(sectionTable);

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

    var tableTotal = document.createElement("th");

    tableTotal.setAttribute("id", `tableTotal${elementID}`);
    tableTotal.textContent = "Total";

    sectionTable.appendChild(table);

    table.appendChild(tableTitle);
    table.appendChild(tableDate);
    table.appendChild(tableDescription);
    table.appendChild(tableCategory);
    table.appendChild(tableAmount);
    table.appendChild(tableTotal);

  }

  var addElementsCell = document.createElement("td");

  table.appendChild(addElementsCell);

  var addElementsBtn = document.createElement("button");

  addElementsBtn.setAttribute("id", "addElementsBtn");
  addElementsBtn.type = "button";
  addElementsBtn.textContent = "Add elements";

  addElementsCell.appendChild(addElementsBtn);

  addElementsBtn.addEventListener("click", (event) => {

    // Geting the values to the table's rows

    var dateInputValue = dateInput.value;
    var descriptionInputValue = descriptionInput.value;
    var categoryInputValue = categoryInput.value;
    var amountInputValue = amountInput.value;

    // Making the table's rows

    if (dateInputValue && descriptionInputValue && categoryInputValue && amountInputValue != null) {
      var tableDateRow = document.createElement("tr");

      tableDateRow.setAttribute("id", `tableDateRow${elementID}`);
      tableDateRow.textContent = dateInputValue;

      var tableDescriptionRow = document.createElement("tr");

      tableDescriptionRow.setAttribute("id", `tableDescriptionRow${elementID}`);
      tableDescriptionRow.textContent = descriptionInputValue;

      var tableCategoryRow = document.createElement("tr");

      tableCategoryRow.setAttribute("id", `tableCategoryRow${elementID}`);
      tableCategoryRow.textContent = categoryInputValue;

      var tableAmountRow = document.createElement("tr");

      tableAmountRow.setAttribute("id", `tableAmountRow${elementID}`);
      tableAmountRow.textContent = amountInputValue;

      // Adding value to the totalValue

      totalValue += parseInt(amountInputValue);

      console.log(totalValue);

      // Adding value to the tableTotalValue

      tableTotalValue += parseInt(amountInputValue);

      var tableTotalLabel;

      if (document.getElementById(`tableTotalLabel${elementID}`) == null) {
        tableTotalLabel = document.createElement("tr");
        tableTotalLabel.setAttribute("id", `tableTotalLabel${elementID}`);
      }

      tableTotalLabel.textContent = tableTotalValue;

      // Adding the elements to the table 

      tableDate.appendChild(tableDateRow);
      tableDescription.appendChild(tableDescriptionRow);
      tableCategory.appendChild(tableCategoryRow);
      tableAmount.appendChild(tableAmountRow);
      tableTotal.appendChild(tableTotalLabel);

      dateInput.value = "";
      descriptionInput.value = "";
      categoryInput.value = "";
      amountInput.value = "";

      // Creating an horizontal line to separate the total result

      var totalLabel;

      if (document.getElementById("separateTotalSection") == null) {
        var separateTotalSection = document.createElement("section");

        separateTotalSection.setAttribute("id", "separateTotalSection");

        main.appendChild(separateTotalSection);

        var horizontalLine = document.createElement("p");

        horizontalLine.setAttribute("id", "horizontalLineTotal");
        horizontalLine.setAttribute("class", "horizontalLine");

        separateTotalSection.appendChild(horizontalLine);

        var totalSection = document.createElement("section");

        totalSection.setAttribute("id", "totalSection");

        totalLabel = document.createElement("h1");

        totalLabel.setAttribute("id", "totalLabel");

        totalSection.appendChild(totalLabel);

        separateTotalSection.appendChild(totalSection);
      }

      totalLabel.textContent = totalValue;

      elementID++;
    } else {
      alert("You must fill the gaps with the specific data");
    }
  })
}

function addRemoveMoney() {

  // Create horizontal line

  if (document.getElementById("horizontalLineForm") == null) {
    var horizontalLine = document.createElement("p");

    horizontalLine.setAttribute("id", "horizontalLineForm");
    horizontalLine.setAttribute("class", "horizontalLine");

    mainContainer.appendChild(horizontalLine);
  }

  // create the table

  var tableName = prompt("Enter the name of the table");

  tableName = tableName.charAt(0).toUpperCase() + tableName.slice(1);

  createTable(tableName);
}

addTableButton.addEventListener("click", (event) => {
  addRemoveMoney();

  elementID++;
})

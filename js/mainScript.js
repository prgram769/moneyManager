// Getting vars

const dateInput = document.getElementById("date");
const descriptionInput = document.getElementById("description");
const categoryInput = document.getElementById("category");
const amountInput = document.getElementById("amount");
const addTableButton = document.getElementById("addTableButton");

let mainContainer = document.getElementById("mainContainerID");
let form = document.getElementById("formID");
let main = document.getElementById("mainSemantic");
let addBtn = document.getElementById("addElementsBtn");
let elementID = 0;
let totalValue = 0;

// Creating the var for the total value label

let totalLabel;

// Creating the subsection to store the sections

let subSectionMain;

if (document.getElementById("subSectionMain") == null) {
  subSectionMain = document.createElement("section");

  subSectionMain.setAttribute("id", "subSectionMain");

  main.appendChild(subSectionMain);
}

// Creating table

// Creating the table vars

let table;
let tableCaption;
let tableHeadersRow;
let tableDateHeader;
let tableDescriptionHeader;
let tableCategoryHeader;
let tableAmountHeader;
let tableTotalHeader;
let addElementsBtnHeader;
let addElementsBtn;
let deleteTableBtnHeader;
let deleteTableBtn;

function addElements() {
  // Creating the cells to the table values

  let tableDataRow = document.createElement("tr");
  let tableDateCell = document.createElement("td");

  tableDateCell.textContent = dateInput.value;

  let tableDescriptionCell = document.createElement("td");

  tableDescriptionCell.textContent = descriptionInput.value;

  let tableCategoryCell = document.createElement("td");

  tableCategoryCell.textContent = categoryInput.value;

  let tableAmountCell = document.createElement("td");
  
  tableAmountCell.textContent = amountInput.value;

  tableDataRow.appendChild(tableDateCell);
  tableDataRow.appendChild(tableDescriptionCell);
  tableDataRow.appendChild(tableCategoryCell);
  tableDataRow.appendChild(tableAmountCell);

  table.appendChild(tableDataRow);
}

function createTable(tableName) {
  let horizontalLine = document.getElementById("horizontalLineForm");

  horizontalLine.style.borderBottom = "2px solid black";

  let tableSection = document.createElement("section");

  tableSection.setAttribute("id", `${tableName}Section`);

  subSectionMain.appendChild(tableSection);

  table = document.createElement("table");

  tableSection.appendChild(table);

  tableCaption = document.createElement("caption");
  tableCaption.textContent = tableName;

  table.appendChild(tableCaption);

  tableDateHeader = document.createElement("th");
  tableDateHeader.textContent = "Date";

  tableDescriptionHeader = document.createElement("th");
  tableDescriptionHeader.textContent = "Description";

  tableCategoryHeader = document.createElement("th");
  tableCategoryHeader.textContent = "Category";

  tableAmountHeader = document.createElement("th");
  tableAmountHeader.textContent = "Amount";

  tableTotalHeader = document.createElement("th");
  tableTotalHeader.textContent = "Total";

  addElementsBtnHeader = document.createElement("th");

  addElementsBtn = document.createElement("button");
  addElementsBtn.setAttribute("id", "addElementsBtn");
  addElementsBtn.textContent = "Add elements";

  addElementsBtnHeader.appendChild(addElementsBtn);

  deleteTableBtnHeader = document.createElement("th");

  deleteTableBtn = document.createElement("button");
  deleteTableBtn.setAttribute("id", "deleteTableBtn");
  deleteTableBtn.textContent = "Delete table";

  deleteTableBtnHeader.appendChild(deleteTableBtn);

  tableHeadersRow = document.createElement("tr");
  tableHeadersRow.appendChild(tableDateHeader);
  tableHeadersRow.appendChild(tableDescriptionHeader);
  tableHeadersRow.appendChild(tableCategoryHeader);
  tableHeadersRow.appendChild(tableAmountHeader);
  tableHeadersRow.appendChild(tableTotalHeader);
  tableHeadersRow.appendChild(addElementsBtnHeader);
  tableHeadersRow.appendChild(deleteTableBtnHeader);

  table.appendChild(tableHeadersRow);

  addElementsBtn.addEventListener("click", (event) => {
    addElements();
  })

  createHorizontalTotalLine();

  elementID++;
}

function createHorizontalTotalLine() {
  // Creating an horizontal line to separate the total result

  if (document.getElementById("separateTotalSection") == null) {
    let separateTotalSection = document.createElement("section");

    separateTotalSection.setAttribute("id", "separateTotalSection");

    main.appendChild(separateTotalSection);

    let horizontalLine = document.createElement("p");

    horizontalLine.setAttribute("id", "horizontalLineTotal");
    horizontalLine.setAttribute("class", "horizontalLine");

    separateTotalSection.appendChild(horizontalLine);

    let totalSection = document.createElement("section");

    totalSection.setAttribute("id", "totalSection");

    totalLabel = document.createElement("h1");

    totalLabel.setAttribute("id", "totalLabel");

    totalSection.appendChild(totalLabel);

    separateTotalSection.appendChild(totalSection);
  }

  totalLabel.textContent = "Total: " + totalValue;
}

function addRemoveMoney() {
  // create the table

  let tableName = prompt("Enter the name of the table");

  tableName = tableName.charAt(0).toUpperCase() + tableName.slice(1);

  createTable(tableName);
}

addTableButton.addEventListener("click", (event) => {
  addRemoveMoney();

  elementID++;
})

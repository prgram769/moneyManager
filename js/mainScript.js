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
let totalValue = 0;
let totalTables = localStorage.getItem("totalTables") || 0;
let eventsForTable = localStorage.getItem("eventsForTable") || 0;
let tablesCaptions = JSON.parse(localStorage.getItem("tablesCaptions")) || [];
let tablesDates = JSON.parse(localStorage.getItem("tablesDates")) || [];
let tablesDescriptions = JSON.parse(localStorage.getItem("tablesDescription")) || [];
let tablesCategories = JSON.parse(localStorage.getItem("tablesCategories")) || [];
let tablesAmounts = JSON.parse(localStorage.getItem("tablesAmounts")) || [];
let tablesTotalValue = JSON.parse(localStorage.getItem("tablesTotalValue")) || [];
let savesElementsForTable = JSON.parse(localStorage.getItem("savesElementsForTable")) || [];

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
let tableTotalValue;
let tableValue;

function addElements() {
  // Creating the cell to the table values and adding the values to the cells

  if (dateInput.value && descriptionInput.value && categoryInput.value && amountInput.value != null) {
    let eventGrandParentNode = event.target.closest("table");
    let tableDataRow = document.createElement("tr");
    let tableDateCell = document.createElement("td");

    tableDateCell.textContent = dateInput.value;

    let tableDescriptionCell = document.createElement("td");

    tableDescriptionCell.textContent = descriptionInput.value;

    let tableCategoryCell = document.createElement("td");

    tableCategoryCell.textContent = categoryInput.value;

    let tableAmountCell = document.createElement("td");

    tableAmountCell.textContent = amountInput.value;

    let tableTotalCell = document.createElement("td");

    tableDataRow.appendChild(tableDateCell);
    tableDataRow.appendChild(tableDescriptionCell);
    tableDataRow.appendChild(tableCategoryCell);
    tableDataRow.appendChild(tableAmountCell);
    tableDataRow.appendChild(tableTotalCell);

    eventGrandParentNode.appendChild(tableDataRow);

    let prueba = event.target.closest("table").lastChild.children[3].textContent;

    console.log(prueba)

    tableTotalValue += parseInt(prueba);

    totalValue += parseInt(amountInput.value);

    tableTotalCell.textContent = tableTotalValue;

    // Adding the data to localStorage

    tablesDates.push(tableDateCell.textContent);
    tablesDescriptions.push(tableDescriptionCell.textContent);
    tablesCategories.push(tableCategoryCell.textContent);
    tablesAmounts.push(tableAmountCell.textContent);
    tablesTotalValue.push(tableTotalCell.textContent);

    localStorage.setItem("tablesDates", JSON.stringify(tablesDates));
    localStorage.setItem("tablesDescriptions", JSON.stringify(tablesDescriptions));
    localStorage.setItem("tablesCategories", JSON.stringify(tablesCategories));
    localStorage.setItem("tablesAmounts", JSON.stringify(tablesAmounts));
    localStorage.setItem("tablesTotalValue", JSON.stringify(tablesTotalValue));

    form.reset();

    createHorizontalTotalLine();

    eventsForTable++;

    localStorage.setItem("eventsForTable", eventsForTable);
  } else {
    alert("You must fill the gaps with the specific data");
  }
}

function deleteTable() {
  let buttonClosest = event.target.closest("section");
  let totalParent = buttonClosest.children[0].lastChild.children[4].textContent;
  totalValue -= parseInt(totalParent);

  totalLabel.textContent = `Total: ${totalValue}`;

  subSectionMain.removeChild(buttonClosest);
}

function createTable(tableName) {
  tableTotalValue = 0;

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

  deleteTableBtn.addEventListener("click", (event) => {
    deleteTable();
  })

  totalTables++;

  localStorage.setItem("totalTables", totalTables);

  tablesCaptions.push(tableCaption.textContent);

  localStorage.setItem("tablesCaptions", JSON.stringify(tablesCaptions));
}

// Creating the functions to display the tasks when you reload

function createTableToLocalStorage(tableName) {
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

  deleteTableBtn.addEventListener("click", (event) => {
    deleteTable();
  })

  savesElementsForTable.push(eventsForTable);

  localStorage.setItem("savesElementsForTable", JSON.stringify(savesElementsForTable));

  eventsForTable = 0;
}

function addElementsReload(tablesDates, tablesDescriptions, tablesCategories, tablesAmounts, tablesTotalValue) {
  let tableDataRow = document.createElement("tr");
  let tableDateCell = document.createElement("td");

  tableDateCell.textContent = tablesDates;

  let tableDescriptionCell = document.createElement("td");

  tableDescriptionCell.textContent = tablesDescriptions;

  let tableCategoryCell = document.createElement("td");

  tableCategoryCell.textContent = tablesCategories;

  let tableAmountCell = document.createElement("td");

  tableAmountCell.textContent = tablesAmounts;

  let tableTotalCell = document.createElement("td");

  tableDataRow.appendChild(tableDateCell);
  tableDataRow.appendChild(tableDescriptionCell);
  tableDataRow.appendChild(tableCategoryCell);
  tableDataRow.appendChild(tableAmountCell);
  tableDataRow.appendChild(tableTotalCell);

  tableTotalValue += parseInt(tablesAmounts);

  totalValue += parseInt(tablesAmounts);

  tableTotalCell.textContent = tablesTotalValue;

  table.appendChild(tableDataRow);

  createHorizontalTotalLine();
}

// Creating a function to create an horizontal line to separate the total result

function createHorizontalTotalLine() {
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

  totalLabel.textContent = `Total: ${totalValue}`;
}

function addRemoveMoney() {
  // create the table

  let tableName = prompt("Enter the name of the table");

  tableName = tableName.charAt(0).toUpperCase() + tableName.slice(1);

  createTable(tableName);
}

addTableButton.addEventListener("click", (event) => {
  addRemoveMoney();
})

document.addEventListener("DOMContentLoaded", (event) => {
  let tableTotals = localStorage.getItem("totalTables");
  let tableTitle = JSON.parse(localStorage.getItem("tablesCaptions"));
  let tableDate = JSON.parse(localStorage.getItem("tablesDates"));
  let tableDescription = JSON.parse(localStorage.getItem("tablesDescriptions"));
  let tableCategory = JSON.parse(localStorage.getItem("tablesCategories"));
  let tableAmount = JSON.parse(localStorage.getItem("tablesAmounts"));

  for (let i = 0; i < tableTotals; i++) {
    createTableToLocalStorage(tableTitle[i]);

    addElementsReload(tableDate[i], tableDescription[i], tableCategory[i], tableAmount[i], tablesTotalValue[i]);
  }
})

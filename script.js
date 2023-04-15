// Selectors
const inputBox = document.querySelector(".input-box");
const addBtn = document.querySelector(".add-btn");
const listContainer = document.querySelector(".list-container");

// Adding Events
addBtn.addEventListener("click", addTask);

function addTask() {
  if (inputBox.value === "") {
    alert("Input Your Task");
  } else {
    //  Create li
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;
    // Append li
    listContainer.appendChild(li);
    // Create delete button
    const span = document.createElement("span");
    span.classList.add("del-btn");
    span.innerHTML = `&times`;
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.classList.contains("del-btn")) {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function getTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
getTask();

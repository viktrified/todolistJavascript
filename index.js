// add activity/activities to list
// remove activity/activities from list
// tick completed activity/activities
// untick activity/activities

let taskCount = 0;

const addTask = () => {
  taskCount++;

  const tableBody = document.querySelector("#todoTable tbody");

  const row = document.createElement("tr");

  const noCell = document.createElement("td");
  noCell.textContent = taskCount;
  row.appendChild(noCell);

  const activityCell = document.createElement("td");
  const activityInput = document.createElement("input");
  activityInput.type = "text";
  activityInput.placeholder = "Enter activity";
  activityCell.appendChild(activityInput);
  row.appendChild(activityCell);

  const statusCell = document.createElement("td");
  const statusCheckbox = document.createElement("input");
  statusCheckbox.type = "checkbox";
  statusCheckbox.onclick = () => {
    statusCell.textContent = statusCheckbox.checked
      ? "Completed"
      : "Incompleted";
  };
  statusCell.appendChild(statusCheckbox);
  row.appendChild(statusCell);

  const actionCell = document.createElement("td");
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("remove-button");
  removeButton.onclick = () => {
    row.remove();
    taskCount--;
    updateTaskNumbers();
  };
  actionCell.appendChild(removeButton);
  row.appendChild(actionCell);

  tableBody.appendChild(row);
};

function updateTaskNumbers() {
  const rows = document.querySelectorAll("#todoTable tbody tr");
  rows.forEach((row, index) => {
    row.cells[0].textContent = index + 1;
  });
  taskCount = rows.length;
}

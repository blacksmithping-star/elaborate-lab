const input = document.querySelector("#task");
const list = document.querySelector("#taskList");

function addTask() {
  if (!input.value.trim()) return;
  const li = document.createElement("li");
  li.textContent = input.value;
  li.onclick = () => li.remove();
  list.appendChild(li);
  saveTasks();
  input.value = "";
}

function saveTasks() {
  localStorage.setItem("tasks", list.innerHTML);
}

window.onload = () => {
  list.innerHTML = localStorage.getItem("tasks") || "";
};

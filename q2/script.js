const form = document.querySelector(".form");
const input = document.querySelector(".input__text");
const ul = document.querySelector(".tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = document.createElement("li");
  task.textContent = input.value;
  task.classList.add("task-list");
  ul.appendChild(task);
  input.value = "";
  input.focus();
});

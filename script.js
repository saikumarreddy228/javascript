
const places = [
  "Paris, France 🇫🇷",
  "Tokyo, Japan 🇯🇵",
  "Dubai, UAE 🇦🇪",
  "New York, USA 🇺🇸",
  "Sydney, Australia 🇦🇺"
];

document.getElementById("showPlace").onclick = function() {
  const randomIndex = Math.floor(Math.random() * places.length);
  document.getElementById("destination").textContent =
    "Your destination is: " + places[randomIndex];
};

document.getElementById("addTask").onclick = function() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
};

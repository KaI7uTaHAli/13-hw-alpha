document.addEventListener("DOMContentLoaded", () => {
	const taskInput = document.getElementById("taskText");
	const addTaskButton = document.getElementById("addTask");
	const taskList = document.getElementById("taskList");

	addTaskButton.addEventListener("click", () => {
		const taskText = taskInput.value.trim();
		if (taskText === "") return;

		const li = document.createElement("li");
		li.textContent = taskText;
		
		const deleteButton = document.createElement("button");
		deleteButton.textContent = "Удалить";
		deleteButton.style.marginLeft = "10px";
		deleteButton.addEventListener("click", () => {
			taskList.removeChild(li);
		});

		li.appendChild(deleteButton);
		taskList.appendChild(li);
		taskInput.value = "";
	});
});

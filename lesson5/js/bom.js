const favChap = document.getElementById("favchap");
const submitButton = document.querySelector("button");
const listElement = document.querySelector(".list");

submitButton.addEventListener("click", function () {

	if (favChap.value != "") {
		let listItem = document.createElement("li");
		let deleteButton = document.createElement("button");

		listItem.textContent = favChap.value;
		deleteButton.textContent = "❌";

		listItem.appendChild(deleteButton);
		listElement.appendChild(listItem);

		deleteButton.addEventListener("click", function () {
			listElement.removeChild(listItem);
		});

		favChap.focus();
		favChap.value = "";
	}
});
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Function to display notes from local storage
function showNotes() {
  const savedNotes = localStorage.getItem("notes");
  if (savedNotes) {
    notesContainer.innerHTML = savedNotes;
  }
}

// Function to update local storage with notes content
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// Event listener for create button to add new note
createBtn.addEventListener("click", () => {
  const inputBox = document.createElement("p");
  const deleteImg = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  deleteImg.src = "images/delete.png";

  notesContainer.appendChild(inputBox);
  inputBox.appendChild(deleteImg);

  updateStorage(); // Update local storage after adding new note
});

// Event listener for deleting notes
notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage(); // Update local storage after deleting note
  }
});

// Event listener for typing in notes to update local storage
notesContainer.addEventListener("input", () => {
  updateStorage(); // Update local storage when user types in notes
});

// Function to handle "Enter" keypress in contenteditable paragraph
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});

// Show notes from local storage when the page loads
showNotes();

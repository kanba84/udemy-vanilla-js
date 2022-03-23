import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //alert(inputText);

  addIntoImCompleteList(inputText);

  //console.log(li);
};

const addIntoCompleteList = (todoText) => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const todo = document.createElement("p");
  todo.className = "todo";
  todo.innerText = todoText;
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", () => {
    //alert();
    const deleteTarget = backButton.parentNode.parentNode;
    deleteFromCompleteList(deleteTarget);
    addIntoImCompleteList(todoText);
  });

  li.appendChild(div);
  div.appendChild(todo);
  div.appendChild(backButton);

  document.getElementById("complete-list").appendChild(li);
};

const addIntoImCompleteList = (todoText) => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const todo = document.createElement("p");
  todo.className = "todo";
  todo.innerText = todoText;
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode.parentNode;
    deleteFromImcompleteList(completeTarget);
    addIntoCompleteList(todoText);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode.parentNode;
    deleteFromImcompleteList(deleteTarget);
  });

  li.appendChild(div);
  div.appendChild(todo);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("imcomplete-list").appendChild(li);
};

const deleteFromImcompleteList = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
};

const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

let tasks = document.querySelector(".tasks");
let input_text = document.querySelector(".user-input input");
let add_btn = document.querySelector("#addBtn");

// Add Event Listener to Add Button
add_btn.addEventListener("click", function () {
  let n = input_text.value.trim();
  if (n.length < 1) {
    alert("Enter some Tasks!!!");
  } else {
    let li = `<li class="task-items">${n}<img class="trash-icon pointer" src="delete.svg" alt="trash-icon"></li>`;
    tasks.innerHTML += li;
    input_text.value = "";
  }
});

// Event Bubbling
tasks.addEventListener("click",function (event) {
    if(event.target.tagName==="IMG") {
        event.target.parentElement.remove();
    }
})
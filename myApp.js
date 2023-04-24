const inputText = document.getElementById("input");
const list = document.getElementById("list");

function addList() {
    let todo = inputText.value;
    let newList = document.createElement("li");
    newList.innerText = todo;
    list.appendChild(newList);
    inputText.value = "";

    newList.addEventListener('click', function() {
        newList.style.textDecoration = "line-through";
    })

    newList.addEventListener('dblclick', function() {
        list.removeChild(newList);
    })
}


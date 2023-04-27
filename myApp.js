const inputText = document.getElementById("input");
const list = document.getElementById("list");

function addList() {
    if (inputText.value === ""){
        alert("You should add a list");
    } else {
    let todo = inputText.value;
    let newList = document.createElement("li");

   
    newList.innerText = todo;
    list.appendChild(newList);
    inputText.value = "";

    newList.addEventListener('click', function() {
        newList.style.textDecoration = "line-through";
        newList.style.color = "red";
        
    })

    newList.addEventListener('dblclick', function() {
        list.removeChild(newList);
    })

}
}

inputText.addEventListener("keyup", function(e) {
        if (e.code === 'Enter') {
            addList();
        }
    });



    


var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    li.appendChild(btn);
    btn.onclick = removeListItem;
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    } 
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
       }  
}

function deleteListElement(event) {
    event.target
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.onclick = function(event) {
    var item = event.target;
    item.classList.toggle("done");
}

function removeListItem(event) {
    event.target.parentNode.remove();
}

function deleteButton() {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    listItems[i].appendChild(btn);
    btn.onclick = removeListItem;
}

for (i = 0; i < listItems.length; i++) {
    deleteButton();
}
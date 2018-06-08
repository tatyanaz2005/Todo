function todoList() {
    var item = document.getElementById('TodoInput').value
    var text = document.createTextNode(item)
    var newItem = document.createElement('li')
    var newButton = document.createElement("button")
    newItem.appendChild(text)
    document.getElementById('TodoList').appendChild(newItem)
    document.getElementById('TodoList').appendChild(newButton)
    newButton.id = "StrikeButton"
    newButton.onclick = "Strike()"
    document.getElementById('StrikeButton').innerHTML ="X"
    newItem.id = "List"
}

function Strike() {
    var ele = document.getElementsByClassName("myelement");
    ele.style.setProperty("text-decoration", "line-through");
}
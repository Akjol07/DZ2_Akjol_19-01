function add_item() {
    let item = document.getElementById("box");
    let list_item = document.getElementById("list_item");
    if (item.value !== "") {
        let make_li = document.createElement("li");
        make_li.appendChild(document.createTextNode(item.value));
        list_item.appendChild(make_li);
        item.value = "";
    }
    else {
        alert("Добавьте задачу!");
    }
}

function delete_item() {
    let list_item = document.getElementById("list_item");
    if (list_item.childNodes.length === 0){
        alert("Нечего удалять!");
    } else {
        list_item.removeChild(list_item.lastChild);
    }
}
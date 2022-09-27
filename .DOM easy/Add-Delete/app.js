    function addItem() {
        let input = document.getElementById("newItemText");
        let text = input.value;
        let newLi = document.createElement("li");
        newLi.textContent = text + " ";
        let deleteLink = document.createElement("a");
        deleteLink.textContent = "[Delete]";
        deleteLink.href = "#";
        deleteLink.addEventListener("click", deleteItem);
        newLi.appendChild(deleteLink);
 
        document.getElementById("items").appendChild(newLi);
        input.value = "";
 
        function deleteItem() {
            document.getElementById("items").removeChild(newLi);
        }
    }

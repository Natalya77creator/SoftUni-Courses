function deleteByEmail() {
    let target = document.getElementsByName("email")[0].value;
    let emails = document.querySelectorAll("#customers tr td:last-child");
    let deleted = false;
    for (let email of emails) {
        if (email.textContent === target) {
            let row = email.parentNode;
            row.parentNode.removeChild(row);
            deleted = true;
            break;
        }
    }
    if (deleted) {
        document.getElementById("result").textContent = "Deleted."
    } else {
        document.getElementById("result").textContent = "Not found."
    }
}
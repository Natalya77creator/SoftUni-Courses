function search() {
    let townList = Arraay.from(document.querySelectorAll('ul li'));
    let searchText = document.getElementById('searchText').value;
    let count = 0;
    for (const item of townList) {
        let text = item.textContent

        if (text.includes(searchText)) {
            item.slyle.textDecoration = "underline";
            item.style.fontWeigth = "bold";
            count++;
        } else {
            item.slyle.textDecoration = "none";
            item.style.fontWeigth = "normal";
        }
    }
    document.getElementById('result').innerText = `${count} matches found`
}
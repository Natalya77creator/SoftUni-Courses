function extractText() {
    let itemNodes = 
    document.querySelectorAll('ul li');
    let textarea = 
    document.getElementById('result');
    for (let node of itemNodes) {
        textarea.value += node.textContent + "\n";
    }
}
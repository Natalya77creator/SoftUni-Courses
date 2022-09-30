function focused() {
    let boxes = Array.from(document.querySelectorAll('div div'))
    for (const box of boxes) {
        box.style.background = 'grey'
    }
}
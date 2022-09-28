function addItem() {
    let input = [...document.querySelectorAll('[type=text]')]
    let option = document.createElement('option');
    option.value = input[1].value; 
    option.textContent = input[0].value;
    document.getElementById('menu').appendChild(option);
    input[1].value = '';
    input[0].value = ''
 
 }
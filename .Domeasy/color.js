let btn = document.getElementById('mybnt');
btn.addEventListener('mouseover', function(){

    if (background == 'white') {
bnt.style.background = 'green';
bnt.style.color = 'white';
    } else {
bnt.style.background = 'white';
bnt.style.color = 'black';
    }
})
btn.addEventListener('mouseover', function(){
    btn.setAttribute('disable', true)
})
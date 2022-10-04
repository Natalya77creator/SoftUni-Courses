function create(words) {
   for (const word of words) {
      let div = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style.display = 'none';
      debugger;
      div.appendChild(paragraph);
      div.addEventListener('click', function() {
         paragraph.style.display = 'block';
      })
      let con = document.getElementById('content');
      con.appendChild(div)
     
   }
}  
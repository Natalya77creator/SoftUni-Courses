    function addItem() {
       let ul = document.getElementById('items');

       let input = document.getElementById('newText').value;
       let value = input.value
       let li = document.createElement('li');
       li.textContent = value;
       let delbnt = document.createElement('a');
       delbnt.textContent = 'Deleted';
       delbnt.addEventListener('click', function (event) {
            console.log(event);
       })
       li.append(delbnt);
       ul.append(li);
       input.value = '';
    }

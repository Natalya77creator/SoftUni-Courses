function deleteByEmail() {
  let entr = document.querySelector('input[type="text"]').value;
  let bnt = document.getElementsByTagName("button")[0];

  bnt.addEventListener("click", deleteItem);
  let isTrue = false
  function deleteItem(e) {
    let cldOnen = Array.from(document.getElementsByTagName("tbody")[0].children)
   for (const child of cldOnen) {
     for (const ch of Array.from(child.children)) {
      if (ch.innerText === entr) {
        let row = ch.parentNode;
        row.parentNode.removeChild(row);
        isTrue = true;
        debugger
     }
   }
  }
      if (isTrue === true) {
        document.getElementById('result').textContent = 'Deleted'
      } else {
        document.getElementById('result').textContent = 'Not found'
      }
  }
}
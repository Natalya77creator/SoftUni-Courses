function lockedProfile() {
    let container = document.getElementById('main')
    container.innerHTML = ''
    fetch('http://localhost:3030/jsonstore/advanced/profiles')
      .then(res => res.json())
      .then(data => {
        let counter = 1
        for (let i in data) {
          container.innerHTML += `
          <div class="profile">
                    <img src="./iconProfile2.png" class="userIcon" />
                    <label>Lock</label>
                    <input type="radio" name="user${counter}Locked" value="lock" checked>
                    <label>Unlock</label>
                    <input type="radio" name="user${counter}Locked" value="unlock"><br>
                    <hr>
                    <label>Username</label>
                    <input type="text" name="user${counter}Username" value="${data[i].username}" disabled readonly />
                    <div class="hiddenInfo" disabled readonly>
                          <hr>
                          <label>Email:</label>
                          <input type="email" name="user${counter}Email" value="${data[i].email}" disabled readonly/>
                          <label>Age:</label>
                          <input type="email" name="user${counter}Age" value="${data[i].age}" disabled readonly/>
                    </div>
   
                  <button>Show more</button>
              </div>`
          counter++
        }
        const buttons = Array.from(document.getElementsByTagName('button'));
        buttons.forEach(x => x.addEventListener('click', showHideFields));
        debugger
        function showHideFields(ev) {
   
          if (ev.target.parentNode.children[2].checked) {
            return;
          }
   
          if (ev.target.textContent === 'Show more') {
            ev.target.parentNode.children[9].classList.remove('hiddenInfo');
            ev.target.textContent = 'Hide it';
          }
   
          else {
            ev.target.parentNode.children[9].style.display = 'none';
            ev.target.parentNode.children[9].classList.add('hiddenInfo');
            ev.target.textContent = 'Show more'
          }
        }
      })
      .catch(err => console.log(err))
  }
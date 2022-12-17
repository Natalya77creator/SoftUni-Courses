function solution() {
    let main = document.getElementById('main')
    fetch('http://localhost:3030/jsonstore/advanced/articles/list')
        .then(res => res.json())
        .then(data => {
            data.forEach(el => {
                main.innerHTML += `
                <div class="accordion">
                    <div class="head">
                        <span>${el.title}</span>
                        <button class="button" id="${el._id}">More</button>
                    </div>
                    <div class="extra"></div>
                </div>`
            })
 
            Array.from(document.getElementsByTagName('button'))
                        .forEach(el => {
                    el.addEventListener('click', (e) => {
                        let parent = e.target.parentNode.parentNode
                        let extraDiv = parent.querySelector('.extra')
                        fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${e.target.id}`)
                            .then(res => res.json())
                            .then(data => {
                                debugger
                                if (e.target.textContent == 'More') {
                                    e.target.textContent = 'Less'
                                    extraDiv.innerHTML = `
                                        <p>${data.content}</p>`
                                   extraDiv.style.display = 'block'
                                }
                                else if (e.target.textContent == 'Less') {
                                    e.target.textContent = 'More';
                                    parent.querySelector('.extra').style.display = 'none'
                                }
                            })         
                    })
                })
        })
}
document.addEventListener('DOMContentLoaded', solution)
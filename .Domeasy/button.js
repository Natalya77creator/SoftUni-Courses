
    document.getElementById('clickme').addEventListener('click', function(even) {
        let btn = even.target;
        btn.textContent = Number(btn.textContent) + 1;
    })


    function attachGradientEvents() {
        let gradient = document.getElementById('gradient');
        gradient.addEventListener('mousemove', function (event) {
       
            let position = event.offsetX;
            let gradientWidth = event.target.offsetWidth
            power = Math.trunc(position / gradientWidth * 100);
            document.getElementById('result').textContent = power + "%";
        
            document.getElementById('result').textContent = "";
        })
        }
    

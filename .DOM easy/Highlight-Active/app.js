function focused() {

        let inputs = document.getElementsByTagName('input');
        for (const input of inputs) {
            input.addEventListener('focus', focusInput);
            input.addEventListener('blur', blurInput)
           debugger
        }
        function focusInput(event) {
           event.target.parentElement.classList.add('focused')
        }
 
    
        function blurInput(event) {
            event.target.parentElement.classList.remove('focused')
         
        }
     }

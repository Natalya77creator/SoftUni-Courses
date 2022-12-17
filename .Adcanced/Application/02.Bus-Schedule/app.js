function solve() {
 
    let infoElement = document.querySelector('.info');
    let departmentBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
 
    let busStop = {
        next: 'depot'
    }
 
    function depart() {
       departmentBtn.disabled = true;
       arriveBtn.disabled = false;
 
       let url = `http://localhost:3030/jsonstore/bus/schedule/${busStop.next}`;
       fetch(url)
       .then(res => res.json())
       .then(data => {
        busStop = JSON.parse(JSON.stringify(data));
        infoElement.textContent = `Next stop ${busStop.name}`;
        debugger
         
       })
       .catch(error => {
        infoElement.textContent = `Not Connected`; 
       });
    }
 
    function arrive() {
       departmentBtn.disabled = false;
       arriveBtn.disabled = true;
 
       infoElement.textContent = `Arriving at ${busStop.name}`;
    }
 
    return {
        depart,
        arrive
    };
}
 
let result = solve();
 
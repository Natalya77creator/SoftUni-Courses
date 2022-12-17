async function getInfo() {
  let info = document.getElementById('stopId');
  let infoValue = info.value;
  const url = `http://localhost:3030/jsonstore/bus/businfo/${infoValue}`;
  const stopName = document.getElementById('stopName');
  const busList = document.getElementById('buses');
  busList.innerHTML = '';
try {
  const response = await fetch(url);
  const data = await response.json();
  stopName.textContent = data.name;
  Object.entries(data.buses).forEach((busNumber, timeArrive) => {
    const li = document.createElement('li');
    li.textContent = `Bus ${busNumber} arrives in ${timeArrive} minutes`;
    busList.appendChild(li)

  })
} catch (e) {
    stopName.textContent = "Error"
}
 

}
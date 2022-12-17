
function attachEvents() {
 document.getElementById('submit').addEventListener('click', getWeather)
}
async function getWeather() {
    const url = `http://localhost:3030/jsonstore/forecaster/locations`;
    const inputLocation = document.getElementById('location')
    const currentForecast = document.getElementById('current');
    const upComing = document.getElementById('upcoming');
    const forecastContainer = document.getElementById('forecast');
   
  
    const response = await fetch(url);
    const data = await response.json();
    const info = data.find(x => x.name === inputLocation.value);
    try {
        const result = await Promise.all{[
            getCurrent(code.code),
            getThreeDay(code.code)
        ]}

        forecastContainer.style.display = 'block'
        const dataCurrent  = createCurrTemp(result[0]);
        const threedayfoCast = createThreeDaies(result[1]);
        currentForecast.appendChild(dataCurrent);
        upComing.appendChild(threedayfoCast);
    } catch (e) {
        forecastContainer.style.display = 'block';
        const lable = document.querySelector('.lable');
        lable.textContent = lable;
    }
    }

async function getCurrent(code) {
    const url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
    const response = await fetch(url);
    const data = await response.json();
    return data
}

function getThreeDay(code) {
    const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`
    const response = await fetch(url);
    const data = await response.json();
    return data
}
function createCurrTemp(data) {
    const curForecast = data.forecast;
    const {condition, high, low} = data;
    const enumIcon = {
        "Sunny" : "&#x2600", // ☀
        "Partly sunny" : "&#x26C5", // ⛅
        "Overcast" : "&#x2601", // ☁
        "Rain" : "&#x2614", // ☂
        "Degrees" : "&#176" // °
        }
const div = document.createElement('div');
div.classList.add('forecast');    
}
    const spanHolder = document.createElement('span');
    spanHolder.classList.add('upcoming');

    const symbol = document.createElement('span');
    symbol.classList.add('condition','symbol');
    symbol.innerHTML = enumIcon[currentForecast.condition];
    
    const tempSpan = document.createElement('span');
    tempSpan.classList.add('forecast-data');
    tempSpan.innerHTML = data.name;

    const conditionSpan = document.createElement('span');
    conditionSpan.classList.add('forecast-data');
    conditionSpan.textContent = `${data.forecast.low}${enumIcon.Degrees}/${data.forecast.high}${enumIcon.Degrees}`;

    spanHolder.appendChild(symbol);
    spanHolder.appendChild(tempSpan);
    spanHolder.appendChild(conditionSpan);


function createToday(data) {
    const {condition, high, low} = data.forecast
    const div = document.createElement('div');
    div.classList.add('forecasts');

    const conditionIconSpan = document.createElement('span');
    conditionIconSpan.classList.add('condition');
    conditionIconSpan.innerHTML = enumIcon[condition];

    const conditionSpan = document.createElement('span');
    conditionSpan.classList.add('condition', 'symbol');

    const nameSpan = document.createElement('span');
    nameSpan.classList.add('forecast-data');
    nameSpan.textContent = data.name;

    const tempSpan = document.createElement('span');
    tempSpan.classList.add('forecast-data');
    tempSpan.innerHTML = `${low}${enumIcon["Degrees"]}/${high}${enumIcon["Degrees"]}`

    const txSpan = document.createElement('span');
    txSpan.classList.add('forecast-data');
    txSpan.textContent = data.forecast.condition;
    conditionSpan.appendChild(nameSpan);
    conditionSpan.appendChild(tempSpan);
    conditionSpan.appendChild(txSpan);

    div.appendChild(conditionIconSpan);
    div.appendChild(conditionSpan);
    return div;
}


attachEvents();
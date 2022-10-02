function attachEventsListeners() {
  let buttons = Array.from(document.querySelectorAll('input[type="button"]'));

  for (const button of buttons) {
    button.addEventListener("click", convert);
  }
  function convert(e) {
    let value = Number(
      e.target.parentElement.querySelector("input[type=text]").value
    );
    let unit = e.target.id;
    debugger

    switch (unit) {
      case "daysBtn":
        populate(value);
        break;
      case "hoursBtn":
        populate(value / 24);
        break;
      case "minutesBtn":
        populate(value / 24 / 60);
        break;
      case "secondsBtn":
        populate(value / 24 / 60 / 60);
        break;
    }
  }
  function populate(value) {
    let inputs = Array.from(document.querySelectorAll('input[type=text]'));
    inputs.shift().value = value;
    let curvalue = value * 24;
    for (const input of inputs) {
      input.value = curvalue;
      curvalue *= 60;
    }
  }
}

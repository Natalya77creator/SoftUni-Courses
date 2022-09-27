function solve() {
  let input = document.getElementById("input").value;
  let put = document.getElementById("output");
  let arrayInput = input.split(".");
  put.innerHTML = "";
  
  for (let i = 0; i < arrayInput.length; i += 3) {
    let res = [];
    for (let x = 0; x < 3; x++) {

      if (arrayInput[i+x]) {
        res.push(arrayInput[i+x])
      }
    }
    let resTex = res.join(".").trim() + ".".trim()
    put.innerHTML += `<p>${resTex}</p>`
  }
}

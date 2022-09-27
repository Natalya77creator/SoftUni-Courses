function solve() {
  let input = document.getElementById("input").value;
  let arrayInput = input.split(".").filter(x => x.lenght > 0);
  let put = document.getElementById("output");
  put.innerHTML = "";
  
  for (let i = 0; i < arrayInput.length; i += 3) {
    let res = [];
    for (let x = 0; x < 3; x++) {

      if (arrayInput[i+x]) {
        res.push(arrayInput[i+x])
      }
    }
    let resTex = res.join(". ") + "."
    put.innerHTML += `<p>${resTex}</p>`
  }
}

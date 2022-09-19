function solve(array) {
    let obj = {}
    let foodName 
    let calories 

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      foodName = array[i];
      obj[foodName] = {};
    } else {
      calories = Number(array[i]);
      obj[foodName] = calories;
    }
  }
  console.log(obj);
}
solve(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);

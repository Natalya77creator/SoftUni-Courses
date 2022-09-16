function solve(array) {
  let newArray = array.sort((a, b) => a.localeCompare(b));

  
    for (let i = 0; i < newArray.length; i++) {
      console.log(`${i+1}.${newArray[i]}`);
    }
}

solve(["John", "Bob", "Christina", "Ema"]);

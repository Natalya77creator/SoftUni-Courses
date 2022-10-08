function pow(x, n) {
    let result = 1;
  
    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  alert( pow(2, 3))
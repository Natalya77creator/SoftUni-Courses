function solve(params) {
    let newArray = []
    for (const index in params) {
           if (index %2 == 0) {
            newArray.push(params[index])
           }
        }
        console.log(newArray.join(' '));
    }

solve(['20', '30', '40', '50', '60'])
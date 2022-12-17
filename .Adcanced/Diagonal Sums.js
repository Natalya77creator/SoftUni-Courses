function solve(array) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = array[0].length - 1;
    array.forEach(element => {
        firstDiagonal += element[firstIndex++];
        secondDiagonal += element[secondIndex--];
    });
    console.log(firstDiagonal + ' ' + secondDiagonal);
}
solve([[3, 5, 17], 
      [-1, 7, 14], 
      [1, -8, 89]])
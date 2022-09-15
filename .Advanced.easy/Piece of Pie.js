
function solve(arr, startText, endText) {
    let start = arr.indexOf(startText);
    let end = arr.indexOf(endText)+1;
    let sliced = arr.slice(start, end);
    console.log(sliced);
}
solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie')
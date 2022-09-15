function solve(params, delimiter) {
    let newArray = [];
    for (const el of params) {
        newArray.push(el);
    }
    console.log(newArray.join(delimiter));
}
solve(['How about no?', 'I', 'will', 'not', 'do', 'it!'],'_')
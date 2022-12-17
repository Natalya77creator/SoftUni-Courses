function solve(params) {
    let res = [];
    let theBibbest = params[0];
    res = arr.reduce((accum, currentEl) => {
        if (theBibbest < currentEl) {
            accum.push(currentEl)
            theBibbest = currentEl
        }
        return accum
    }, [])
    return res
}
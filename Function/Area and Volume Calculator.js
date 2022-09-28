function solve(area, vol, input) {
    let obj = JSON.parse(input);
    function cal(ojec) {
        let areaObj = Math.abs(area.call(ojec));
        let volObj = Math.abs(vol.call(ojec));
        return {arae : areaObj, volume : volObj}
    }
    return obj.map(cal)
}
solve(area, vol,`[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`)
function solve(params) {
    let nums = String(params).split('');
    for (let i = 0; i < nums.length-2; i++) {
        if (nums[i] !== nums[i+1] && nums[i+1] !== nums[i+2]) {
            console.log(`false`);
            break;
        } else {
            
        }
    }
}
solve(22542)
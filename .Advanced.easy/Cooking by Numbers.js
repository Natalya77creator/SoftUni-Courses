function solve(firrstNum,...commands) {
    for (let i = 0; i < commands.length; i++) {
       firrstNum = manipulator(firrstNum, commands[i])
    }
    function manipulator(num, commands) {
        switch (commands) {
            case 'chop':
                num /= 2
                console.log(num);
                break;
            case 'dice':
                num = Math.sqrt(num);
                console.log(num);
                break;
            case 'spice':
                num += 1;
                console.log(num);
                break;
            case 'bake':
                num *= 3;
                console.log(num);
                break;
            case 'fillet':
                num -= num * 0.2;
                console.log(num);
                break;
        
            default:
                break;
        }
        return num
    }
    
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
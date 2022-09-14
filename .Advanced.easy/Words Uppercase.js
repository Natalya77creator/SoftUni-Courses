function solve(text) {
    return text.match(/\w+/g).join(', ').toUpperCase()
 }
solve("Hi, how are you?");

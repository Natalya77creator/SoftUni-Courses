function extract(elementId) {
    let para = document.getElementById(elementId).textContent;
    let pattern = /\(([^)]+)\)/g;
  
   let result = para.matchAll(pattern);
   let matched = [];

   for (const text of result) {
    matched.push(text[1]);
   }
   return matched.join('; ');
  }
  extract('content')
  
function getArticleGenerator(articles) {
  let myArticle = Array.from(articles); // Gives a new copy collection of articles.
  let content = document.getElementById("content")
  return () => {
    if (!myArticle.length) {
      return
    }
    let currArticle = myArticle.shift();
    content.innerHTML += `<articles>${currArticle}</articles>`;
  }
}

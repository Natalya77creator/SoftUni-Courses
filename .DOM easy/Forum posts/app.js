window.addEventListener("load", solve);

function solve() {
  const postTitle = document.querySelector('#post-title');
  const postCategory = document.querySelector('#post-category');
  const postContent = document.querySelector('#post-content');
 
  const btnPublish = document.querySelector('#publish-btn');
  const btnClear = document.querySelector('#clear-btn');
 
  const ulReviewList = document.querySelector('#review-list');
 
  const ulPublishList = document.querySelector('#published-list');
 
  btnPublish.addEventListener('click', function (e) {
    e.preventDefault();
    const postTitleText = postTitle.value;
    postTitle.value = '';
    const postCategoryText = postCategory.value;
    postCategory.value = '';
    const postContentText = postContent.value;
    postContent.value = '';
 
    if (postTitleText !== "" && postCategoryText !== "" && postContentText !== "") {
 
      const h4 = document.createElement('h4');
      h4.textContent = postTitleText;
 
      const pCategory = document.createElement('p');
      pCategory.textContent = `Category: ${postCategoryText}`;
 
      const pContent = document.createElement('p');
      pContent.textContent = `Content: ${postContentText}`;
 
      const articleText = document.createElement('article');
 
      articleText.appendChild(h4);
      articleText.appendChild(pCategory);
      articleText.appendChild(pContent);
 
      const btnEdit = document.createElement('button');
      btnEdit.classList.add('action-btn');
      btnEdit.classList.add('edit');
      btnEdit.textContent = 'Edit';
      btnEdit.addEventListener('click', function (e) {
        e.preventDefault();
        postTitle.value = postTitleText;
        postCategory.value = postCategoryText;
        postContent.value = postContentText;
        e.target.parentElement.remove();
      
      });
 
      const btnApprove = document.createElement('button');
      btnApprove.classList.add('action-btn');
      btnApprove.classList.add('approve');
      btnApprove.textContent = 'Approve';
      btnApprove.addEventListener('click', function (e) {
        e.preventDefault();
 
        const h4Approve = document.createElement('h4');
        h4Approve.textContent = postTitleText;
        const pCategoryApprove = document.createElement('p');
        pCategoryApprove.textContent = `Category: ${postCategoryText}`;
        const pContentApprove = document.createElement('p');
        pContentApprove.textContent = `Content: ${postContentText}`
 
        const articleApprove = document.createElement('article');
        articleApprove.appendChild(h4Approve);
        articleApprove.appendChild(pCategoryApprove);
        articleApprove.appendChild(pContentApprove);
 
        const liApprove = document.createElement('li');
        liApprove.classList.add('rpost');
        liApprove.appendChild(articleApprove);
 
        ulPublishList.appendChild(liApprove);
 
        btnEdit.target.parentElement.remove();
      })
 
      const li = document.createElement('li');
      li.classList.add('rpost');
 
      li.appendChild(articleText);
      li.appendChild(btnEdit);
      li.appendChild(btnApprove);
 
      ulReviewList.appendChild(li);
    }
  })
 
  btnClear.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.parentElement.children[1].children) {
      Array.from(e.target.parentElement.children[1].children).forEach(li => li.remove());
    }
  })
}
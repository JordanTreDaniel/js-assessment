'use strict';
class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment');
    this.$wrapper = $('#wrapper');
  }

  init() {
    // kick off controller from here
    this.addCommentFormListener();
  }

  addCommentFormListener() {
    // create comment form listener code here
    this.$addCommentForm.bind('submit', (e) => {
      e.preventDefault();
      var formEl = e.target,
          id = formEl.getAttribute('data-id'),
          commentContent = formEl.commentDescription.value,
          comment = new Comment(commentContent, id);
      //just to reset the input
      e.target.commentDescription.value = '';
      this.render(comment);
    });
  }

  render(commentObj) {
    let commentsList = document.getElementById(`comments-${commentObj.img.id}`);
    let comment = document.createElement('li');
    comment.innerHTML = commentObj.commentContent;
    commentsList.appendChild(comment);

    //The .append() & .commentEl()  approach always seems to leave the li tags showing  
    // commentsList.append(commentObj.commentEl());
    
  }
  
}

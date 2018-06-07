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
    /** The solution i naturally came to */
    // let comment = document.createElement('li');
    // comment.innerHTML = commentObj.commentContent;
    // commentsList.appendChild(comment);


    /** ok, the "All of the above will be tested thoroughly, 
     * so make sure your associations are working properly!" line
     * really bothered me, so i found another solution to make it work as intended.*/
    let comment = commentObj.commentEl();
    commentsList.insertAdjacentHTML( 'beforeend', comment );


    //The .append() & .commentEl()  approach always seems to leave the li tags showing,
    //while the code above truly appends the comment to the <ul> meant for comments
    // commentsList.append(commentObj.commentEl());
    
  }
  
}

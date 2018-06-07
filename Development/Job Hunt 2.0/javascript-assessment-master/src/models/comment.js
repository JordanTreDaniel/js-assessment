'use strict'
// create Comment class here
class Comment {
    constructor(comment, imgId) {
        Comment.all = [].push(this);
        this.id = Comment.all.length;
        this.commentContent = comment;
        this.img = this.findImage(imgId);
    }
    findImage(id) {
        var img = Image.all.filter(function(el) {
            return el.id == id;
        })[0];
        img.comments.push(this);
        return img;
    }
    commentEl() {
        return `
            <li id="comment-id-number-${this.id}">${this.commentContent}</li>
        `
    }
}
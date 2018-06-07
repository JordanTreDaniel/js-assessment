// create Comment class here
class Comment {
    constructor(comment, imgId) {
        this.id = Comment.all.length;
        this.commentContent = comment;
        this.img = this.findImage(imgId);
        Comment.all.push(this);
    }
    
}

Comment.all = [];

Comment.prototype.findImage = function(id) {
    var img = Image.all.filter(function(el) {
        return el.id == id;
    })[0];
    img.comments.push(this);
    return img;
}

Comment.prototype.commentEl = function() {
    return `
        <li id="comment-id-number-${this.id}">${this.commentContent}</li>
    `
}
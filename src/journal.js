export function Entry(title, body){
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function () {
  var titleBody =  this.title + " " + this.body;
  var wordArray = titleBody.split(" ");
  for (var i = 0; i < wordArray.length; i++){
    var count = i;
  }
  return count;
};

Entry.prototype.letterCount = function () {
  var titleBody =  this.title + this.body;
  var letterArray = titleBody.split("");
  return letterArray;
};

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
  var vowelCount = 0;
  var consonantCount = 0;
  for (var i = 0; i < letterArray.length; i++) {
    var letter = letterArray[i];
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      vowelCount += 1;
    } else if (letter === " ") {
      consonantCount += 0;
    } else {
      consonantCount += 1;
    }
  }
  return "Number of Vowels: " + vowelCount + " " + "Number of Consonants: " + consonantCount + ".";
};

Entry.prototype.getTeaser = function () {
  var teaserArray = [];
  var body = this.body;
  var bodyArray = body.split(" ");
  for (var i = 0; i < bodyArray.length; i++) {
    var word = bodyArray[i];
    if (word.indexOf(".") !== -1){
      teaserArray.push(word);
      var teaserString = teaserArray.toString();
      return teaserString.replace(/,/g, " ");
    } else if (i === 7) {
      teaserArray.push(word);
      var teaserString2 = teaserArray.toString();
      return teaserString2.replace(/,/g, " ");
    } else {
      teaserArray.push(word);
    }
  }
  return teaserArray.toString().replace(/,/g, " ");
};

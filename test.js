var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');

var test1 = BasicCard("FrontSide", "BackSide");
console.log(test1.front);
console.log(test1.back);

var test2 = ClozeCard("I am the greatest", "I");
console.log(test2.cloze);
console.log(test2.text);
console.log(test2.partial);
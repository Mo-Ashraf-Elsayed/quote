var data = [
  `“Be yourself; everyone else is already taken.” <br>― Oscar Wilde`,
  `“So many books, so little time.”
<br> ― Frank Zappa`,
  `“A room without books is like a body without a soul.”
<br> ― Marcus Tullius Cicero`,
  `“You only live once, but if you do it right, once is enough.”
<br> ― Mae West`,
  `“Be the change that you wish to see in the world.”
<br> ― Mahatma Gandhi`,
  `“If you tell the truth, you don't have to remember anything.”
<br> ― Mark Twain`,
];
var ele = document.getElementById("quote");
var lastNum;
function showData() {
  var num = Math.floor(Math.random() * data.length);
  // To change num if repeated
  while (lastNum === num) {
    num = Math.floor(Math.random() * data.length);
  }
  ele.innerHTML = data[num];
  lastNum = num;
  //   console.log(lastNum);
}

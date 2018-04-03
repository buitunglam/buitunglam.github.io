
var images = ["images/s1.jpg","images/s2.jpg","images/s3.jpg","images/s4.jpg","images/s5.jpg","images/s6.jpg","images/s7.jpg","images/s8.jpg"];


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
shuffle(images);
console.log(images);
for(var i=0; i<images.length; i++){
    $('.content').append('<div class="card"><img class="front alibaba" src="'+images[i]+'"><img class="back" src="images/back.png"></div>');
}

$(".card").one("click",function (){
	$(this).children().toggleClass("alibaba");
});
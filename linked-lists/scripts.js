(function() {

var enterButton = $('#enterButton');
var bookMarks = $('#bookmarks');
var readButton= $('.card--read');

//add the cards to the right side of the screen on enter button click
enterButton.on('click', function() {
  var titleInput = $('#titleInput');
  var urlInput = $('#urlInput');
  $(bookMarks).prepend(
    '<div class="card">'+
    '<h2 class="card--title">' + titleInput.val() + '</h2>'+
    '<a href="' + urlInput.val() + '" class="card--link">' + urlInput.val() + '</a>'+
    '<div class="card--footer">'+
      '<button class="card--footer--button card--read">Read</button>'+
      '<button class="card--footer--button card--delete">Delete</button>'+
    '</div>'+
  '</div>');
console.log(titleInput.val());
console.log(urlInput.val());
});

  //change the color of the read button to red

$("button").on("click", function(){
  console.log("this worked");
  changeRead();
});


function changeRead() {
  console.log("this worked too");
  var x = document.querySelector('.card--read');
  console.log(x);
  x.classList.toggle(".card--footer--button");
}







}());

// (function() {

var enterButton = $('#enterButton');
var bookMarks = $('#bookmarks');
var readButton= $('.card--read');
var deleteButton = $('.card--delete');

//add the cards to the right side of the screen on enter button click
enterButton.on('click', function() {
  if ($('.form--input--title').val() === "" || $('.form--input--title--url').val() === "") {
    alert("please complete both fields before submitting");
} else {
  var titleInput = $('#titleInput');
  var urlInput = $('#urlInput');
  console.log("one");
  $(bookMarks).prepend(
  '<div class="card" id="wholeCard">'+
    '<h2 class="card--title">' + titleInput.val() + '</h2>'+
    '<a href="' + urlInput.val() + '" class="card--link">' + urlInput.val() + '</a>'+
    '<div class="card--footer">'+
      '<button class="card--footer--button card--read" id="readButton">Read</button>'+
      '<button class="card--footer--button card--delete" id="deleteButton">Delete</button>'+
    '</div>'+
  '</div>'
);}});

// marks bookmark as read and toggles read class
$(bookMarks).on('click', '#readButton', function(){
  $(this).parent().closest('#wholeCard', '#readButton').toggleClass('button--read');
  $(this).parent('#wholeCard', '#readButton').toggleClass('button--read');
$(this).css('color', 'red');
});

// deletes bookmark.  sets display to none.
$(bookMarks).on('click', '#deleteButton', function(){
  $(this).parent().parent().addClass('delete--box');
});

function enterButtonToggle(){
  if ($('.form--input--title').val() !== "" || $('.form--input--title--url').val() !== "") {
    console.log('did this work');
    enableButton();
    alert("please complete both fields before submitting");
}
}

function enableButton() {
  $('#enterButton').removeAttribute("disabled");
}






// }());

// (function() {

var enterButton = $('#enterButton');
var clearReadButton = ('#clearReadButton');
var readButton= $('#card--read');
var deleteButton = $('#card--delete');
var bookMarks = $('#bookMarks');
var titleInput = $('#titleInput');
var urlInput = $('#urlInput');
var totalCards = $('#totalCards');
var readCards = $('#readCards');
var unreadCards = $('#unreadCards');
var cardCounter = 0;
var readCardCounter = 0;
var unreadCardCounter = 0;

$( "#titleInput" ).keyup(function() {
  $("#enterButton").prop("disabled", !this.value);
});

$( "#urlInput" ).keyup(function() {
  $("#enterButton").prop("disabled", !this.value);
});

enterButton.on('click', function() {
  if ($('.form--input--title').val() === "" || $('.form--input--title--url').val() === "") {
    alert("please complete both fields before submitting");
} else {
  var titleInput = $('#titleInput');
  var urlInput = $('#urlInput');
  cardCounter++;
  unreadCardCounter++;
  $('#totalCards').html('Card Count: ' + cardCounter);
  $('#unreadCards').html('Unread Card Count: ' + unreadCardCounter);
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

// removes read bookmarks
$('#clearReadButton').click(function(){
    $('.button--read').remove();
});


// marks bookmark as read
$(bookMarks).on('click', '#readButton', function(){
  readCardCounter++;
  unreadCardCounter--;
  $('#readCards').html('Read Cards: ' + readCardCounter);
  $('#unreadCards').html('Unread Card Count: ' + unreadCardCounter);
  $(this).parent().closest('#wholeCard', '#readButton').toggleClass('button--read');
    $(this).parent('#wholeCard', '#readButton').toggleClass('button--read');
      $(this).css('color', 'red');
});

// deletes bookmark.  sets display to none.
$(bookMarks).on('click', '#deleteButton', function(){
  readCardCounter--;
  cardCounter--;
  $('#totalCards').html('Card Count: ' + cardCounter);
  $('#readCards').html('Read Cards: ' + readCardCounter);
  $(this).parent().parent().addClass('delete--box');
});

// function deleteCard() {}











// }());

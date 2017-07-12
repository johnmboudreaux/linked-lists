

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

} else if (!isUrlValid()) {
    alert('Please enter a vaild URL')
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

  // if (!$(this).hasClass('button--read')){
  unreadCardCounter--;
  readCardCounter++;
  $(this).addClass('button--read');
  $(this).closest('.card').addClass('card--background--toggle');

  $('#readCards').html('Read Cards: ' + readCardCounter);
  $('#unreadCards').html('Unread Card Count: ' + unreadCardCounter);
  $(this).parent().closest('#wholeCard', '#readButton').addClass('button--read');
    $(this).parent('#wholeCard', '#readButton').addClass('button--read');
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


// URL Verifier
function isUrlValid() {
    var urlInput = $('#urlInput').val()
    var regexQuery = "^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$";
    var url = new RegExp(regexQuery,"i");
    if (url.test(urlInput)) {
      return true;
      console.log('that worked');
    }  else {
      return false;
    };

  }

  // function countLinks(){
  //   return $('.bookmarks').length
  // }
  //
  // function totalReadLinks() {
  //   return $('.button--read').length
  // }
  //
  // function unreadLinks() {
  //   return $('#unreadCards').length
  // }
  //
  // function countAll () {
  //   $('#totalCards').text('Number of Links: ' + countLinks());
  //   $('#readCards').text('Number of Read Links: ' + totalReadLinks());
  //   $('#unreadCards').text('Number of Unread Links: ' + unreadLinks());
  // }

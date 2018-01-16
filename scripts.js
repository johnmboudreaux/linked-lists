var readCardCounter = 0;
var cardCounter = 0;
var unreadCardCounter = 0;

function checkForTitle() {
  $("#enterButton").prop("disabled", !this.value);
}

$( "#titleInput" ).on('keyup', checkForTitle);

function checkForUrl() {
  $("#enterButton").prop("disabled", !this.value);
}

$( "#urlInput" ).on('keyup', checkForUrl);

function isUrlValid() {
    var urlInput = $('#urlInput').val();
    var regexQuery = "^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$";
    var url = new RegExp(regexQuery,"i");
    if (url.test(urlInput)) {
      return true;
    }  else {
      return false;
  }
}

function build() {
  var titleInput = $('#titleInput');
  var urlInput = $('#urlInput');
  cardCounter++;
  unreadCardCounter++;
  $('#totalCards').html(`Card Count: ${cardCounter}`);
  $('#unreadCards').html(`Unread Card Count: ${unreadCardCounter}`);
  $('#bookMarks').prepend('<div class="card" id="wholeCard">'+
    '<h2 class="card--title">' + titleInput.val() + '</h2>'+
    '<a href="' + urlInput.val() + '" class="card--link" target="_blank">' + urlInput.val() + '</a>'+
    '<div class="card--footer">'+
      '<button class="card--footer--button card--read" id="readButton">Mark As Read</button>'+
      '<button class="card--footer--button card--delete" id="deleteButton">Delete</button>'+
    '</div>'+
  '</div>');
}

$('#enterButton').on('click', function() {
if ($('.form--input--title').val() === "" || $('.form--input--title--url').val() === "") {
  alert("please complete both fields before submitting");
} else if (!isUrlValid()) {
  alert('Please enter a vaild URL');
} else {
  build();
    }
  }
);

function removeReadBookmarks(){
  var cardsRemoved = $('.card--background--toggle').length;
  $('.card--background--toggle').remove();
    readCardCounter = 0;
    cardCounter = cardCounter - cardsRemoved;
    $('#readCards').html(`Read Cards: ${readCardCounter}`);
    $('#totalCards').html(`Card Count: ${cardCounter}`);
}

$('#clearReadButton').on('click', removeReadBookmarks);

// marks bookmark as read
$('#bookMarks').on('click', '#readButton', function(){
  if (!$(this).hasClass('button--read')) {
    unreadCardCounter--;
    readCardCounter++;
    $(this).addClass('button--read');
    $(this).closest('.card').addClass('card--background--toggle');
  }else {
    $(this).removeClass('button--read');
    $(this).closest('.card').removeClass('card--background--toggle');
    unreadCardCounter++;
    readCardCounter--;
  }
    $('#readCards').html(`Read Cards: ${readCardCounter}`);
    $('#unreadCards').html(`Unread Card Count: ${unreadCardCounter}`);
  }
);

function deleteBookmark() {
  var readBtn = $(this).parent().children('.card--read');
  if (readBtn.hasClass('button--read')) {
    readCardCounter--;
  }else {
      unreadCardCounter--;
  }

  cardCounter--;
  $('#totalCards').html(`Card Count: ${cardCounter}`);
  $('#readCards').html(`Read Cards: ${readCardCounter}`);
  $('#unreadCards').html(`Unread Card Count: ${unreadCardCounter}`);
  $(this).parent().parent().remove();
}

$('#bookMarks').on('click', '#deleteButton', deleteBookmark);

var firstPartOfLyrics = function (number, plural){
  var lyrics = "<p><font color='orange'>" + number + "</font> bottle"+ plural + " of beer on the wall, <font color='orange'>" + number + "</font> bottle"+ plural + " of beer.<br>";
  return lyrics;
};

var secondPartOfLyrics = function (number, plural){
  var lyrics = "Take one down and pass it around, <font color='orange'>" + number + "</font> bottle"+ plural + " of beer on the wall.</p>";
  return lyrics;
};

var noMoreBottleLyrics = function (number){
  var lyrics = "<font color='green'>Go to the store and buy some more, <font color='orange'>" + number + "</font> bottles of beer on the wall.</font></p>";
  return lyrics;
};

var getLyrics = function (number){
  var lyrics = "";
  for (var i = number; i >= 0; i --){
    if(i == 0){
      lyrics += firstPartOfLyrics("no more", "s");
      lyrics += noMoreBottleLyrics(number);
    }else if(i == 1){
      lyrics += firstPartOfLyrics(1, "");
      lyrics += secondPartOfLyrics("no more", "s");
    }else if(i == 2){
      lyrics += firstPartOfLyrics(i, "s");
      lyrics += secondPartOfLyrics(1, "");
    }else if(i > 2){
      lyrics += firstPartOfLyrics(i, "s")
      lyrics += secondPartOfLyrics(i-1, "s");
    } // end of if_else
  } // end of for loop
  return lyrics;
};

$(document).ready(function() {
  $("form#numberOfBottles").submit(function(event) {
    $(".lyrics").empty();
    var number = $("input#number").val();
    $(".lyrics").append(getLyrics(number));
    event.preventDefault();
  });
}); // end of document

$(document).ready(function() {
  var myFavoriteThings = [];
  $(".button-thing").click(function(event) {
    event.preventDefault();
    var text = document.getElementById("thingsNameId").value;
    myFavoriteThings.push(text);
    $("ul#favoritesList").append(text+" ");
    console.log(myFavoriteThings);
  });
});
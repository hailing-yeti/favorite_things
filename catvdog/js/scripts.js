$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#catSays").prepend("<li>meow</li>");
    $("ul#catSays").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#dog").click(function() {
    $("ul#dogSays").append("<li>BARK!</li>");
    $('li').css('background-color', 'green');   
  });
});
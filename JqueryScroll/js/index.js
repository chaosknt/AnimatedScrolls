$(function () {
  $('#demo5').scrollbox({
    direction: 'h',
    distance: 134
  });
  $('#demo5-backward').click(function () {
    $('#demo5').trigger('backward');
  });
  $('#demo5-forward').click(function () {
    $('#demo5').trigger('forward');
  });
  
  var queueNext = 1;
  (function () {
    $('#demo6-queue ul').append('<li><p>'+ queueNext +'</p></li>');
    queueNext++;
    setTimeout(arguments.callee, 2000 + parseInt(Math.random() * 2000, 10));
  }());  
});
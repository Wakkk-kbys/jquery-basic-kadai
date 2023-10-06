$(function () {
  // ボタンを押すと、文字色が変わる
  $('#change-color').on('click', function () {
    $('#target').css('color', 'red');
  });
  // ボタンを押すと、文字内容が変わる
  $('#change-text').on('click', function () {
    $('#target').text('Hello!');
  });
  // 
  $('#fade-out').on('click', function () {
    $('#target').fadeOut();
  });
  // 
  $('#fade-in').on('click', function () {
    $('#target').fadeIn();
  });
});
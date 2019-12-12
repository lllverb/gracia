$(function () {
  $('.tab').on('click', function () {
    $(".is-active").removeClass('is-active');
    $(this).addClass('is-active')
    $('.is-show').removeClass('is-show');
    $('.new-article').removeClass('new-article');
    let index = $(this).index();
    $('.panel').eq(index).addClass('is-show');
    $('.panel').eq(index).children().addClass('new-article')
  })
})
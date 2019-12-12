function addDisableForwardClass() {
  $('.disabled-forward').removeClass('disabled-forward')
  $(".article-area").find(".forward:first").addClass('disabled-forward')
}
function addDisableBackwardClass() {
  $('.disabled-backward').removeClass('disabled-backward')
  $(".article-area").find(".backward:last").addClass('disabled-backward')
}
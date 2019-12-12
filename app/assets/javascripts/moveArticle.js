$(function () {
  //forward////////////////////////////////////////////////
  $(".article-area").find(".forward:first").addClass('disabled-forward')
  $(document).on('click', '.forward', function () {
    let url = location.href.replace('edit', 'forward')
    let number = $(this).parent().parent().attr('id')
    $.ajax({
      url: url,
      type: 'PATCH',
      data: {
        number: number
      }
    })
      .done(function () {
        let clicked = $(`#${number}`)
        forwardChangeClass(number, clicked)
        addDisableForwardClass()
        addDisableBackwardClass()
      })
      .fail(function () {
        alert('通信に失敗しました')
      })
  })
  function forwardChangeClass(number, clicked) {
    clickedID = Number($(`#${number}`).attr('id'))
    clicked.prev().attr('id', clickedID)
    clicked.prev().before(clicked)
    clickedID -= 1
    clicked.attr('id', clickedID)
  }
  function addDisableForwardClass() {
    $('.disabled-forward').removeClass('disabled-forward')
    $(".article-area").find(".forward:first").addClass('disabled-forward')
  }
  //forward////////////////////////////////////////////////

  //backward////////////////////////////////////////////////
  $(".article-area").find(".backward:last").addClass('disabled-backward')
  $(document).on('click', '.backward', function () {
    let url = location.href.replace('edit', 'backward')
    let number = $(this).parent().parent().attr('id')
    $.ajax({
      url: url,
      type: 'PATCH',
      data: {
        number: number
      }
    })
      .done(function () {
        let clicked = $(`#${number}`)
        backwardChangeClass(number, clicked)
        addDisableForwardClass()
        addDisableBackwardClass()
      })
      .fail(function () {
        alert('通信に失敗しました')
      })
  })
  function backwardChangeClass(number, clicked) {
    clickedID = Number($(`#${number}`).attr('id'))
    clicked.next().attr('id', clickedID)
    clicked.next().after(clicked)
    clickedID += 1
    clicked.attr('id', clickedID)
  }
  function addDisableBackwardClass() {
    $('.disabled-backward').removeClass('disabled-backward')
    $(".article-area").find(".backward:last").addClass('disabled-backward')
  }
  //backward////////////////////////////////////////////////
})

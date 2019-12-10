$(function () {
  $(document).on('click', '.remove', function () {
    let url = location.href.replace('edit', '')
    let number = $(this).parent().parent().attr('id')
    $.ajax({
      url: url + 'remove_article',
      type: 'DELETE',
      dataType: 'json',
      data: {
        number: number
      }
    })
      .done(function () {
        changeClass(number)
        $(`#${number}`).remove()
      })
      .fail(function () {
        alert('通信に失敗しました')
      })
  })
  function changeClass(number) {
    $('.article-area').children().each(function (i, e) {
      let id = e.id
      if (id > number) {
        id -= 1
        e.id = id
      }
    })
  }
})

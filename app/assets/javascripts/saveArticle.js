$(function () {
  $('#save-button').on('click', function () {
    let url = location.href.replace('edit', '')
    let text = $('#new-article').val()
    let number = Number($('.article-area').children().last().attr('id')) + 1
    if (!text == '') {
      $.ajax({
        url: url + 'add_article',
        type: 'POST',
        dataType: 'json',
        data: {
          text: text,
          number: number
        }
      })
        .done(function () {
          buildTextarea(number, text)
          $('#new-article').val('')
        })
        .fail(function () {
          alert('通信に失敗しました')
        })
    }
  })
  function buildTextarea(number, text) {
    html = `<div class='article-box' id=${number}>
              <textarea>${text}</textarea>
              <div class='button-area'>
                <div class='forward'>
                  上へ
                </div>
                <div class='backward'>
                  下へ
                </div>
                <div class='remove'>
                  削除
                </div>
              </div>
            </div>`
    $('.article-area').append(html)
  }
  $('#cancel-button').on('click', function () {
    $('#new-article').val('')
  })
})

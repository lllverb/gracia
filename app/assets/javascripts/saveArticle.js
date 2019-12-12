$(function () {
  $('.title').on('keyup', function () {
    let title = $('.title').val()
    let url = location.href.replace('edit', 'edit_title')
    if (title.length !== 0) {
      $.ajax({
        url: url,
        type: 'PATCH',
        data: {
          title: title,
        }
      })
        .done(function (data) {
        })
        .fail(function () {
          alert('通信に失敗しました')
        })
    }
  })
  $('.detail').on('keyup', function () {
    let detail = $('.detail').val()
    let url = location.href.replace('edit', 'edit_detail')
    if (detail.length !== 0) {
      $.ajax({
        url: url,
        type: 'PATCH',
        data: {
          detail: detail,
        }
      })
        .done(function () {
        })
        .fail(function () {
          alert('通信に失敗しました')
        })
    }
  })
  $('#save-button').on('click', function () {
    let url = location.href.replace('edit', 'save_article')
    let text = $('.new-article').val()
    let number = Number($('.article-area').children().last().attr('id')) + 1
    if (isNaN(number)) {
      number = 1
    }
    let articleType = $('.is-active').text().replace(/\r?\n/g, '')
    if (!text == '') {
      $.ajax({
        url: url,
        type: 'POST',
        data: {
          text: text,
          number: number,
          article_type: articleType
        }
      })
        .done(function (data) {
          if (articleType == "見出し") {
            articleType = "heading"
          buildTextarea(number, text, articleType)
          } else if (articleType == "本文") {
            articleType = "text"
          buildTextarea(number, text, articleType)
          } else {
            buildRelated(data)
          }
          addDisableForwardClass()
          addDisableBackwardClass()
          $('.new-article').val('')
        })
        .fail(function () {
          alert('通信に失敗しました')
        })
    }
  })
  function buildTextarea(number, text, articleType) {
    html = `<div class='article-box' id=${number}>
              <div class='textarea ${articleType}'>
                ${text}
              </div>
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
  function buildRelated(data) {
    html = `<div class='article-box' id=${data.number}>
              <div class='textarea related'>
                <h3>
                  ${data.title}
                </h3>
                <p>
                  ${data.detail}
                </p>
              </div>
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
    $('.new-article').val('')
  })
})

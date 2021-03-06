class Reactions {

  getCookie(name) {

    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));

    return matches ? decodeURIComponent(matches[1]) : undefined;

  }

  updateSelected() {

    let posts = document.querySelectorAll('.workspace__part__info');

    for (var post = 0; post < posts.length; post++) {

      let id = posts[post].getAttribute('id');

      this.updateInfo(posts[post].getAttribute('id'));

      let infobar = document.querySelector('.workspace__part__info[id="' + id + '"]>.workspace__part__info__get');

      let likes = infobar.querySelector('.info__get__reaction#likes>button');

      let dislikes = infobar.querySelector('.info__get__reaction#dislikes>button');

      if(this.getCookie(id) == 'like') {

        likes.setAttribute('selected', true);
        dislikes.setAttribute('selected', false);

      } else if(this.getCookie(id) == 'dislike') {

        likes.setAttribute('selected', false);
        dislikes.setAttribute('selected', true);

      }

    }

  }

  updateInfo(token) {

    let infobar = document.querySelector('.workspace__part__info[id="' + token + '"]>.workspace__part__info__get');

    let likes = infobar.querySelector('.info__get__reaction#likes>button>i>span');

    let dislikes = infobar.querySelector('.info__get__reaction#dislikes>button>i>span');

    let views = infobar.querySelector('.info__get__reaction#views>a>i>span');

    $.get('get_reaction', {'token': token}, function(data) {

      likes.innerText = JSON.parse(data)['likes'];

      dislikes.innerText = JSON.parse(data)['dislikes'];

      views.innerText = JSON.parse(data)['views'];

    });

  }

  setLike(token) {

    $.ajax({

      type: "GET",
      url: 'set_reaction',
      data: {'token': token, 'type': 'like'},
      dataType: 'text',
      cache: false,
      success: function(data) {

        this.updateInfo(token);

        let infobar = document.querySelector('.workspace__part__info[id="' + token + '"]>.workspace__part__info__get');

        let likes = infobar.querySelector('.info__get__reaction#likes>button');

        let dislikes = infobar.querySelector('.info__get__reaction#dislikes>button');

        if(JSON.parse(data)['result']['plus'] == 'like') {

          likes.setAttribute('selected', true);
          dislikes.setAttribute('selected', false);

        } else {

          likes.setAttribute('selected', false);
          dislikes.setAttribute('selected', true);

        }

      }.bind(this)

    });

  }

  addView(token) {

    $.get('add_view', {token: token}, function() {

      this.updateInfo(token);

      let infobar = document.querySelector('.workspace__part__info[id="' + token + '"]>.workspace__part__info__get');

      let views = infobar.querySelector('.info__get__reaction#likes>button');

      likes.setAttribute('selected', false);
      dislikes.setAttribute('selected', false);
      views.setAttribute('selected', true);

    }.bind(this));

  }

  setDislike(token) {

    $.ajax({

      type: "GET",
      url: 'set_reaction',
      data: {'token': token, 'type': 'dislike'},
      dataType: 'text',
      cache: false,
      success: function(data) {

        this.updateInfo(token);

        let infobar = document.querySelector('.workspace__part__info[id="' + token + '"]>.workspace__part__info__get');

        let likes = infobar.querySelector('.info__get__reaction#likes>button');

        let dislikes = infobar.querySelector('.info__get__reaction#dislikes>button');

        if(JSON.parse(data)['result']['plus'] == 'like') {

          likes.setAttribute('selected', true);
          dislikes.setAttribute('selected', false);

        } else {

          likes.setAttribute('selected', false);
          dislikes.setAttribute('selected', true);

        }

      }.bind(this)

    });

  }

}

executor = new Reactions()

document.addEventListener("DOMContentLoaded", executor.updateSelected());

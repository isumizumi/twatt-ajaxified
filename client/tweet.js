function getTweet(){
  $.ajax({
    url: 'http://localhost:3000/timeline',
    method: 'GET',
    success: function(data) {
      data = JSON.parse(data)
      // console.log(data);
      // $('#dataTweet').prepend('')
      var listTweet = ''
      for (var i = 0; i < data.length; i++) {
        listTweet += `<tr><td>${data[i].user.screen_name}</td><td>${data[i].text}</td><td><img src='${data[i].user.profile_image_url}'></td><td>${data[i].created_at}</td></tr>`
      }
      $('#dataTweet tbody').html('')
      $('#dataTweet tbody').append(listTweet)
    },
    fail: function(err) {
      console.log(err);
    }
  })
}

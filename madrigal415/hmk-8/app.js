$(function() {
  // DOM is now ready
  _500px.init({
    sdk_key: 'c095a1ed8923d151066ec81a6569a9dd1195e5c5'
  });

  $('#login').click(function() {
    _500px.login();
  });

  _500px.on('authorization_obtained', function() {
    $('.sign-in-view').hide();
    $('.image-results-view').show();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        console.log('lat: ' + lat);
        console.log('long: ' + long);

        var radius = '10mi';

        var searchOptions = {
          feature: 'popular',
          geo: lat + ',' + long + ',' + radius,
          only: 'Landscapes',  
          rpp: 28,
          sort: 'rating',
          sort_direction: 'desc',
          image_size: 3
        };

        _500px.api('/photos/search', searchOptions, function(response) {
          if (response.data.photos.length === 0) {
            console.log('No photos found');
          } else {
            console.log('Request succeeded!');
            $.each(response.data.photos, function(key, value ) {
                $('.images').append('<figure><img src="' + value.image_url + '"/><figcaption>Rating: '+ value.rating +' <figcaption></figure>');

            });

            $('img').each(function() {
                 $( this ).addClass('image');
            });
            

          }
        })

      })

    } else {
      $('.images').append("Sorry, your browser does not support geolocation.");
    }

    _500px.ensureAuthorization(function () {
          _500px.api('/users', function (response) {
              console.log("Hi "+response.data.user.fullname);
              $("H3").prepend("Hi " + response.data.user.fullname + "! ");
          });
      });

    });
  
});

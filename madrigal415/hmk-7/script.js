/*
    Use the zippopotam.us service to look up and display the city and state for a zip code that users enter in the Postal Code box on the form.
    zippopotam.us does not require an API key. See the website zippopotam.us for API documentation for the U.S.
    Start by logging the city and state to the console. If you wish, you can enhance your code using DOM manipulation to populate the City and State input boxes with the data.
    Convert your event handler code to an IIFE and verify that your app still works the same way.
    Convert all of your JS code to a single IIFE and verify that the app still works the same way. 
    Bonus: 
      Instead of responding to a button click, add code to listen for the keyup event in the Postal Code box after a keyboard key is pressed and released, and check if the Postal Code box contains sufficient characters for a zip code before performing a search automatically.
  
});
*/
"use strict";

$(document).ready(function() {
      var $button = $("#lookup");
      $button.on("click", function() {
        var $enteredZip = $("#zip").val();
        console.log($enteredZip);
        $('body').append($enteredZip);
      });
}); 


$(function() {
			
			$(document).ready( function() 
			{
				$('#csset').hide();
				
			});
			
			// OnKeyDown Function
			$("#zip").keyup(function() {
				var zip_in = $(this);
				var zip_box = $('#ziplabel');
				
				if (zip_in.val().length<5)
				{
					zip_box.removeClass('error success');
				}
				else if ( zip_in.val().length>5)
				{
					zip_box.addClass('error').removeClass('success');
				}
				else if ((zip_in.val().length == 5) ) 
				{
					
					// Make HTTP Request
					$.ajax({
						url: "http://api.zippopotam.us/us/" + zip_in.val(),
						cache: false,
						dataType: "json",
						type: "GET",
					  success: function(result, success) {
							// Make the city and state boxes visible
							$('#csset').slideDown();
              console.log(result);
				
							// US Zip Code Records Officially Map to only 1 Primary Location
							var places = result['places'][0];
							$("#city").val(places['place name']);
							$("#state").val(places['state abbreviation']);
							zip_box.addClass('success').removeClass('error');
						},
						error: function(result, success) {
							zip_box.removeClass('success').addClass('error');
						}
					});
				}
	});

		});


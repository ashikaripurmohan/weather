$(function() {
  var handleWeatherResponse = function(data) 
  {
    console.log(data);
    console.log(JSON.stringify(data));
    //var latitude = '42.046';
    //var longitude = '82.69';
    //var condition = forecast.io.getCurrentConditions(latitude, longitude);
    // Put your code here. Don't change any other code in this file. You will be sad.
    var markup = "The temperature is currently " + data.currently.temperature + "F" + " The forecast for the current week : " + data.daily.summary;
    // End of your code

    $('.weather-report').html(markup);
  }

  $('a.get-the-weather').on
    (
      'click', function(event) 
        {  
          event.preventDefault();
              $.ajax
                  (
                    {
                    type: 'GET',
                    url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
                    dataType: 'jsonp',
                    contentType: "application/json",
                    success: handleWeatherResponse
                    }
                  );
        }
    );
});
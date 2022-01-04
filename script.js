$(document).ready(function () {
  var apikey = "0fe6ea2cfc8563f959db2a144871c89d";
  var units = "imperial";

  $("#searchBtn").on("click", function () {
    var valueOfCity = $("#search").val();
    console.log(valueOfCity);

    $("#search").val("");

    weatherForcast(valueOfCity);
  });

  $("older-search").on("click", "li", function () {
    var olderSearch = $(this).text();
    console.log(olderSearch);
    weatherForcast(older - search);
  });

  function createRow(cities) {
    var olderSearch = $("#older-search");
    console.log(olderSearch);
    var li = $("<li>").addClass("group-list").text(city);
    olderSearchItem.prepend(li);
  }

  function weatherForcast(valueOfCity) {
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      valueOfCity +
      "&units=" +
      units +
      "&appid=" +
      apikey;
   
    fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        $("weatherForcast");
        var title = $("<h3></h3>")
        .addClass("container-title")
        .text(data.name + "(" + new Date().toLocaleDateString() + ")");
        console.log (title)
        var container = $("<div>").addClass("container");
        var wind = $("<p>")
          .addClass("container-text")
          .text("Wind Speed: " + data.wind.speed + " MPH");
        var humid = $("<p>")
          .addClass("container-text")
          .text("Humidity: " + data.main.humidity + "%");
        var tempature = $("<p>")
          .addClass("container-text")
          .text("Temperature: " + data.main.temp + " °F");
        var containerBody = $("<div></div>").addClass("container-body");
        var img = $("<img>").attr(
          "src",
          "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
        );
        $("body").append(containerBody)
        title.append(img);
        containerBody.append(title, tempature, humid, wind);
        container.appendTo(containerBody);
        $("#today").append(container);

        getWeather(valueOfCity);
      });
  }

  function getWeather(valueOfCity) {
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      valueOfCity+
      "&units=" +
      units +
      "&appid=" +
      apikey;
     
    fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        $("#weather")
          .html('<h4 class="mt-3">5-Day Weather:</h4>')
          .append('<div class="row">');
      });
  }
  function getUVIndex(latitude, longitude) {
    var queryURL =
      "https://api.openweathermap.org/data/2.5/uvi?appid=" +
      apikey +
      "&lat=" +
      latitude +
      "&lon=" +
      longitude;
    
      fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log (data)
        
      })
   }
})

  


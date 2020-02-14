"use strict";

const zomatoAPI =
  "https://developers.zomato.com/api/v2.1/geocode?lat=40.7580&lon=73.9855";
const client = "MISSING API KEY";

getZomatoAPI(zomatoAPI).then(response => {
  console.log("my response here is: ", response);
});

function getZomatoAPI(url) {
  return fetch(url, {
    headers: {
      "user-key": client
    }
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(e => {
      console.log(e);
    });

  function filterRestaurants(data) {
    console.log(data.nearby_restaurants);
    const arrayOfPlaces = data.nearby_restaurants;

    arrayOfPlaces.map(function(thing) {
      console.log(thing.restaurant.name);
    });
  }
}

cerealcontroller = {}

cerealcontroller.getData = (req, res, next) => {

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.kroger.com/v1/products?filter.brand={{BRAND}}&filter.term={{TERM}}&filter.locationId={{LOCATION_ID}}",
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Authorization": "Bearer {{TOKEN}}"
    }
  }
}
  
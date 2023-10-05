// Store our API endpoint as queryUrl.
let queryUrl = "https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2023?key=597ccc6f594b4a1288e90a523f61d1c0";


// Perform a GET request to the query URL.
d3.json(queryUrl).then(function (data) {
  
  console.log(data);
//});

  // Using the features array sent back in the API data, create a GeoJSON layer, and add it to the map.

 function useFeature(feature, layer) {
 layer.bindPopup("<h3>" + StadiumDetails.City + "</h3><hr><p>" + StadiumDetails.Name + "</p>");
 }

 let stadiums = L.geoJSON(data, {

 onEachFeature: useFeature
  })

createMap(stadiums);
});


function createMap(stadiums) {
//  Create the base layers.
 let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Create a baseMaps object.
let baseMaps = {
"Street Map": street,
"Topographic Map": topo
};

// Create an overlays object.
let overlayMaps = {
Stadiums: stadiums,
};
  
// Create a new map.
// Edit the code to add the earthquake data to the layers.
let myMap = L.map("map", {
center: [37.09, -95.71],
zoom: 5,
layers: [street, stadiums]
});

// Create a layer control that contains our baseMaps.
// Be sure to add an overlay Layer that contains the earthquake GeoJSON.
L.control.layers(baseMaps, overlayMaps, {
collapsed: false
}).addTo(myMap);

}
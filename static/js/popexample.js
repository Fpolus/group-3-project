// A function to determine the marker size based on the population
function markerSize(capacity) {
  return Math.sqrt(capacity) * 50;
}

// An array that contains all the information needed to create city and state markers
// Population Data Source: U.S. 2020 Decennial Census
let locations = [
  {
    coordinates: [39.048889, -94.483889],
    stadium: {
      name: "Arrowhead Stadium",
      capacity: 76416
    }
  },
  {
    coordinates: [33.755556, -84.401],
    stadium: {
      name: "Mercedes-Benz Stadium",
      capacity: 71000
    }
  }
];

// Define arrays to hold the created city and state markers.
//let cityMarkers = [];
let stadiumMarkers = [];

// Loop through locations, and create the city and state markers.
for (let i = 0; i < locations.length; i++) {
  // Set the marker radius for the state by passing the population to the markerSize() function.
  stadiumMarkers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "balck",
      fillColor: "black",
      radius: markerSize(locations[i].stadium.capacity)
    })
  );

  // Set the marker radius for the city by passing the population to the markerSize() function.
  //cityMarkers.push(
    //L.circle(locations[i].coordinates, {
      //stroke: false,
      //fillOpacity: 0.75,
      //color: "purple",
      //fillColor: "purple",
      //radius: markerSize(locations[i].city.population)
    //})
  //);
}

// Create the base layers.
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});


// Create two separate layer groups: one for the city markers and another for the state markers.
//let cityLayer = L.layerGroup(cityMarkers);
let stadiumLayer = L.layerGroup(stadiumMarkers);

// Create a baseMaps object to contain the streetmap and the darkmap.
let baseMaps = {
  Street: street,
  Topograph: topo
};

// Create an overlayMaps object to contain the "State Population" and "City Population" layers
let overlayMaps = {
//Cities: cityLayer,
Stadiums: stadiumLayer,
}


// Modify the map so that it has the streetmap, states, and cities layers
let myMap = L.map("map", {
  center: [
    37.09, -95.71
  ],
  zoom: 5,
  layers: [street, stadiumLayer]
});

// Create a layer control that contains our baseMaps and overlayMaps, and add them to the map.
L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(myMap);

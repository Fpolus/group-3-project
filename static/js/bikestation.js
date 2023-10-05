function createMap(bikeStations) {

    // Create the tile layer that will be the background of our map.
    let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
  
  
    // Create a baseMaps object to hold the streetmap layer.
    let baseMaps = {
      "Street Map": streetmap
    };
  
    // Create an overlayMaps object to hold the bikeStations layer.
    let overlayMaps = {
      "Home Games": homeGames
    };
  
    // Create the map object with options.
    let map = L.map("map-id", {
      center: [37.09, -95.71],
      zoom: 5,
      layers: [streetmap, bikeStations]
    });
  
    // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(map);
  }
  
  function createMarkers(response) {
  
    // Pull the "stations" property from response.data.
    let StadiumDetails = response.data;
  
    // Initialize an array to hold Home Games.
    let homeGames = [];
  
    // Loop through the Stadium array.
    for (let index = 0; index < city.length; index++) {
      let city = cities[index];
  
      // For each homegame, create a marker, and bind a popup with the Stadium's name.
      let homeGames = L.marker([GeoLat, GeoLong])
        .bindPopup("<h3>" + name + "<h3><h3>Capacity: " + city + "</h3>");
  
      // Add the marker to the bikeMarkers array.
      homeGames.push(homeGame);
    }
  
    // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
    createMap(L.layerGroup(homeGames));
  }
  
  
  // Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
  d3.json("https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2023?key=597ccc6f594b4a1288e90a523f61d1c0").then(createMarkers);
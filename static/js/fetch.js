const apiUrl = 'https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2023?key=6e68e709c9bc4bb89f2bae90d8709b3c';

fetch(apiUrl)
   .then((response) => {
       if (!response.ok) {
           throw new Error(`HTTP error! Status: ${response.status}`);
       }
       return response.json();
   })
   .then((data) => {
       // Loop through the data and add a marker for each stadium
       data.forEach((game) => {
           const lat = game.StadiumDetails.GeoLat;
           const long = game.StadiumDetails.GeoLong;
           const stadiumName = game.StadiumDetails.Name;
           if (lat && long) { // Check if GeoLat and GeoLong are available
               L.marker([lat, long]).addTo(myMap)
                   .bindPopup(stadiumName);
           }
       });
   })
   .catch((error) => {
       console.error('Error fetching data:', error);
   });
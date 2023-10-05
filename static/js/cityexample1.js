// Create a map object.
let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });
  
  // Add a tile layer.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  // An array containing each stadium's name, location, capacity, and home games
  let stadiums = [{
    location: [39.048889, -94.483889],
    name: "Arrowhead Stadium",
    team: "Kansas City Chiefs",
    stadiumCapacity: 76416,
    homeGames: ["9/7","9/24","10/12","10/22","11/5","11/20","12/10","12/25","12/31","1/6"]
  },
  {
    location: [33.755556, -84.401],
    name: "Mercedes-Benz Stadium",
    team: "Atlanta Falcons",
    stadiumCapacity: 71000,
    homeGames: ["9/10","9/17","10/8","10/15","11/05","11/26","12/10","12/24"]
  },
  {
    location: [39.278056, -76.622778],
    name: "M&T Bank Stadium",
    team: "Baltimore Ravens",
    stadiumCapacity: 71008,
    homeGames: ["9/10","9/24","10/22","11/05","11/12","11/16","12/10","12/31"]
  },
  {
    location: [41.506111, -81.699444],
    name: "Cleveland Browns Stadium",
    team: "Cleveland Browns",
    stadiumCapacity: 67431,
    homeGames: ["9/10","9/24","10/1","10/15","11/05","11/19","12/10","12/28"]
  },
  {
    location: [33.528, -112.263036],
    name: "State Farm Stadium",
    team: "Arizona Cardinals",
    stadiumCapacity: 63400,
    homeGames: ["9/17","9/24","10/8","10/29","11/12","11/26","12/17","1/7"]
  },
  {
    location: [35.225833, -80.852778],
    name: "Bank Of America Stadium",
    team: "Carolina Panthers",
    stadiumCapacity: 74867,
    homeGames: ["9/18","10/1","10/29","11/05","11/19","12/24"]
  },
  {
    location: [41.86232, -87.616699],
    name: "Solider Field",
    team: "Chicago Bears",
    stadiumCapacity: 61500,
    homeGames: ["9/10","10/1","10/15","10/22","11/09","12/10","12/24","12/31"]
  },
  {
    location: [32.747778, -97.092778],
    name: "AT&T Stadium",
    team: "Dallas Cowboys",
    stadiumCapacity: 80000,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"]
  },
  {
    location: [42.340021, -83.045556],
    name: "Ford Field",
    team: "Detroit Lions",
    stadiumCapacity: 65000,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"]
  },
  {
    location: [44.501389, -88.062222],
    name: "Lambeau Field",
    team: "Green Bay Packers",
    stadiumCapacity: 65000,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"]
  },
  {
    location: [33.95345, -118.3392],
    name: "SoFi Stadium",
    team: "Los Angeles Rams",
    stadiumCapacity: 70240,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"]
  },
  {
    location: [44.974288, -93.258],
    name: "U.S. Bank Stadium",
    team: "Minnesota Vikings",
    stadiumCapacity: 66655,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"]
  },
  {
    location: [29.950833, -90.081111],
    name: "Caesars Superdome",
    team: "New Orleans Saints",
    stadiumCapacity: 73208,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"]
  },
  {
    location: [40.813528, -74.074361],
    name: "MetLife Stadium",
    team: "New York Giants",
    stadiumCapacity: 82500,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"]
  },
  {
    location: [39.900833, -75.167469],
    name: "Lincoln Financial Field",
    team: "Philadelphia Eagles",
    stadiumCapacity: 69796,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"]
  },
  {
    location: [37.403, -121.970274],
    name: "Levi's Stadium",
    team: "San Francisco 49ers",
    stadiumCapacity: 68500,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"]
  },
  {
    location: [47.5952, -122.331625],
    name: "Lumen Field",
    team: "Seattle Seahawks",
    stadiumCapacity: 68740,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"]
  },
  {
    location: [27.975833, -82.503333],
    name: "Raymond James Stadium",
    team: "Tampa Bay Buccaneers",
    stadiumCapacity: 65618,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"]
  },
  {
    location: [38.907778, -76.864444],
    name: "FedEx Field",
    team: "Washington Commanders",
    stadiumCapacity: 82000,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"]
  },
  {
    location: [42.773758, -78.786837],
    name: "Highmark Stadium",
    team: "Buffalo Bills",
    stadiumCapacity: 71608,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"]
  },
  {
    location: [39.095309, -84.516003],
    name: "Paycor Stadium",
    team: "Cincinnati Bengals",
    stadiumCapacity: 65515,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"]
  },
  {
    location: [39.743889, -105.020097],
    name: "Empower Field at Mile High",
    team: "Denver Broncos",
    stadiumCapacity: 76125,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"]
  },
  {
    location: [29.684722, -95.410833],
    name: "NRG Stadium",
    team: "Houston Texans",
    stadiumCapacity: 72220,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"]
  },
  {
    location: [30.323889, -81.6375],
    name: "EverBank Stadium",
    team: "Jacksonville Jaguars",
    stadiumCapacity: 69132,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"]
  },
  {
    location: [36.090833, -115.183611],
    name: "Allegiant Stadium- Home of Super Bowl LVIII",
    team: "Las Vegas Raiders",
    stadiumCapacity: 65000,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"]
  },
  {
    location: [33.95345, -118.3391],
    name: "SoFi Stadium",
    team: "Los Angeles Chargers",
    stadiumCapacity: 70240,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"]
  },
  {
    location: [25.958056, -80.238889],
    name: "Hard Rock Stadium",
    team: "Miami Dolphins",
    stadiumCapacity: 64767,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"]
  },
  {
    location: [42.090866, -71.264244],
    name: "Gillette Stadium",
    team: "New England Patriots",
    stadiumCapacity: 65878,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"]
  },
  {
    location: [40.813528, -74.074361],
    name: "MetLife Stadium",
    team: "New York Jets",
    stadiumCapacity: 82500,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"]
  },
  {
    location: [40.446667, -80.015833],
    name: "Acrisure Stadium",
    team: "Pittsburgh Steelers",
    stadiumCapacity: 68400,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"]
  },
  {
    location: [36.166389, -86.771389],
    name: "Nissan Stadium",
    team: "Tennessee Titans",
    stadiumCapacity: 69143,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"]
  },
  {
    location: [51.555833, -0.279722],
    name: "Wembley Stadium",
    team: "Jacksonville Jaguars",
    stadiumCapacity: 86000,
    homeGames: ["10/1"]
  },
  {
    location: [51.604444, -0.066389],
    name: "Tottenham Hotspur Stadium",
    team: "Tennessee Titans",
    stadiumCapacity: 62062,
    homeGames: ["10/8","10/15"]
  },
  {
    location: [50.068056, 8.645806],
    name: "Deutsche Bank Park",
    team: "Kansas City Chiefs",
    stadiumCapacity: 48000,
    homeGames: ["11/05","11/12"]
  },
  {
    location: [39.760056, -86.163806],
    name: "Lucas Oil Stadium",
    team: "Indianapolis Colts",
    stadiumCapacity: 67000,
    homeGames: ["9/10","10/1","10/8","10/22","10/29","11/26","12/31"]
  }
  ];
  
  // Looping through the cities array, create one marker for each city, bind a popup containing its name and population, and add it to the map.
  for (let i = 0; i < stadiums.length; i++) {
    let stadium = stadiums[i];
    L.marker(stadium.location)
      .bindPopup(`<h5>${stadium.team}</h5> <hr> <h6>Stadium Name: ${stadium.name.toLocaleString()}</h6>
      <hr> <h7>Capacity ${stadium.stadiumCapacity.toLocaleString()}</h7>
      <hr> <h8>Home Games: ${stadium.homeGames.toLocaleString()}</h8>`)
      .addTo(myMap);
  }
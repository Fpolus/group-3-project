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
    homeGames: ["9/7","9/24","10/12","10/22","11/20","12/10","12/25","12/31"],
    tickets: "<a href='https://www.ticketmaster.com/kansas-city-chiefs-vs-los-angeles-kansas-city-missouri/event/06005E8EB1FC34BA?brand=chiefs&artistid=805955&landing=s&wt.mc_id=NFL_TEAM_KC_SCHED_PG_LINK_CHIEFS_CHARGERS&utm_source=NFL.com&utm_medium=client&utm_campaign=NFL_TEAM_KC&utm_content=SCHED_PG_LINK_CHIEFS_CHARGERS' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [33.755556, -84.401],
    name: "Mercedes-Benz Stadium",
    team: "Atlanta Falcons",
    stadiumCapacity: 71000,
    homeGames: ["9/10","9/17","10/8","10/15","11/05","11/26","12/10","12/24"],
    tickets: "<a href='https://www.ticketmaster.com/atlanta-falcons-vs-washington-commanders-atlanta-georgia/event/0E005E9478D51AAE?brand=atlfalcons&artistid=805897&wt.mc_id=NFL_TEAM_ATL_SCHED_PG_LINK_FALCONS_COMMANDERS&utm_source=NFL.com&utm_medium=client&utm_campaign=NFL_TEAM_ATL&utm_content=SCHED_PG_LINK_FALCONS_COMMANDERS&webSyncID=ec619683-13a8-e3d2-04c5-1c586a5deacd&sessionGUID=e18343c2-05b2-dbdc-38eb-1ae076bba6de' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [39.278056, -76.622778],
    name: "M&T Bank Stadium",
    team: "Baltimore Ravens",
    stadiumCapacity: 71008,
    homeGames: ["9/10","9/24","10/22","11/05","11/12","11/16","12/10","12/31","1/06"],
    tickets: "<a href='https://www.ticketmaster.com/baltimore-ravens-v-detroit-lions-baltimore-maryland-10-22-2023/event/15005E9CE181635C' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [41.506111, -81.699444],
    name: "Cleveland Browns Stadium",
    team: "Cleveland Browns",
    stadiumCapacity: 67431,
    homeGames: ["9/10","9/24","10/1","10/15","11/05","11/19","12/10","12/28"],
    tickets: "<a href='https://www.ticketmaster.com/cleveland-browns-vs-san-francisco-49ers-cleveland-ohio-10-15-2023/event/05005E9AA41D2A83' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [33.528, -112.263036],
    name: "State Farm Stadium",
    team: "Arizona Cardinals",
    stadiumCapacity: 63400,
    homeGames: ["9/17","9/24","10/8","10/29","11/12","11/26","12/17","1/7"],
    tickets: "<a href='https://www.ticketmaster.com/arizona-cardinals-vs-cincinnati-bengals-glendale-arizona-10-08-2023/event/19005E9ABF1F4233' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [35.225833, -80.852778],
    name: "Bank Of America Stadium",
    team: "Carolina Panthers",
    stadiumCapacity: 74867,
    homeGames: ["9/18","10/1","10/29","11/05","11/19","12/24"],
    tickets: "<a href='https://www.ticketmaster.com/carolina-panthers-vs-houston-texans-charlotte-north-carolina-10-29-2023/event/2D005E9489222174' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [41.86232, -87.616699],
    name: "Solider Field",
    team: "Chicago Bears",
    stadiumCapacity: 61500,
    homeGames: ["9/10","10/1","10/15","10/22","11/09","12/10","12/24","12/31"],
    tickets: "<a href='https://www.ticketmaster.com/chicago-bears-vs-minnesota-vikings-chicago-illinois-10-15-2023/event/04005E6DB8C9127A' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [32.747778, -97.092778],
    name: "AT&T Stadium",
    team: "Dallas Cowboys",
    stadiumCapacity: 80000,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"],
    tickets: "<a href='https://www.ticketmaster.com/dallas-cowboys-vs-los-angeles-rams-arlington-texas-10-29-2023/event/0C005E9AC447371B' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [42.340021, -83.045556],
    name: "Ford Field",
    team: "Detroit Lions",
    stadiumCapacity: 65000,
    homeGames: ["9/17","9/24","10/08","10/30","11/19","11/23","12/15","1/06"],
    tickets: "<a href='https://www.ticketmaster.com/detroit-lions-vs-carolina-panthers-detroit-michigan-10-08-2023/event/08005E98BCB2220E' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [44.501389, -88.062222],
    name: "Lambeau Field",
    team: "Green Bay Packers",
    stadiumCapacity: 65000,
    homeGames: ["9/24","9/28","10/29","11/05","11/19","12/03","12/17","1/06"],
    tickets: "<a href='https://www.ticketmaster.com/green-bay-packers-vs-minnesota-vikings-green-bay-wisconsin-10-29-2023/event/07005E94A17D1931' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [33.95345, -118.3392],
    name: "SoFi Stadium",
    team: "Los Angeles Rams",
    stadiumCapacity: 70240,
    homeGames: ["9/17","10/8","10/15","10/22","11/19","12/03","12/17","12/21"],
    tickets: "<a href='https://www.ticketmaster.com/los-angeles-rams-vs-philadelphia-eagles-inglewood-california-10-08-2023/event/0A005E95A2F1291A' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [44.974288, -93.258],
    name: "U.S. Bank Stadium",
    team: "Minnesota Vikings",
    stadiumCapacity: 66655,
    homeGames: ["9/10","9/24","10/08","10/23","11/12","11/27","12/24","12/31"],
    tickets: "<a href='https://www.ticketmaster.com/minnesota-vikings-vs-green-bay-packers/event/06005E47A58B3BB1?refArtist=K8vZ9171oM7' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [29.950833, -90.081111],
    name: "Caesars Superdome",
    team: "New Orleans Saints",
    stadiumCapacity: 73208,
    homeGames: ["9/10","10/01","10/19","11/05","12/03","12/10","12/17","1/07"],
    tickets: "<a href='https://www.ticketmaster.com/new-orleans-saints-vs-jacksonville-jaguars-new-orleans-louisiana-10-19-2023/event/1B005E99782916B3' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [40.813528, -74.074361],
    name: "MetLife Stadium",
    team: "New York Giants",
    stadiumCapacity: 82500,
    homeGames: ["9/10","10/2","10/22","10/29","11/26","12/11","12/31","1/06"],
    tickets: "<a href='https://www.ticketmaster.com/new-york-giants-vs-washington-commanders-east-rutherford-new-jersey-10-22-2023/event/00005E96EA419189' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [39.900833, -75.167469],
    name: "Lincoln Financial Field",
    team: "Philadelphia Eagles",
    stadiumCapacity: 69796,
    homeGames: ["9/14","10/1","10/22","11/05","11/26","12/03","12/25","12/31"],
    tickets: "<a href='https://www.ticketmaster.com/philadelphia-eagles-vs-arizona-cardinals/event/02005E98CF108FA4?refArtist=K8vZ9171oU0' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [37.403, -121.970274],
    name: "Levi's Stadium",
    team: "San Francisco 49ers",
    stadiumCapacity: 68500,
    homeGames: ["9/21","10/1","10/08","10/29","11/19","12/10","12/25","1/06"],
    tickets: "<a href='https://www.ticketmaster.com/san-francisco-49ers-vs-baltimore-ravens/event/1C005E8DA6F33BFD?refArtist=K8vZ9171oMV&f_simplified_filter=true' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [47.5952, -122.331625],
    name: "Lumen Field",
    team: "Seattle Seahawks",
    stadiumCapacity: 68740,
    homeGames: ["9/10","9/24","10/22","11/12","11/23","12/17","12/31","1/06"],
    tickets: "<a href='https://www.ticketmaster.com/seattle-seahawks-vs-arizona-cardinals-seattle-washington-10-22-2023/event/0F005E98A2D163F2' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [27.975833, -82.503333],
    name: "Raymond James Stadium",
    team: "Tampa Bay Buccaneers",
    stadiumCapacity: 65618,
    homeGames: ["9/17","9/25","10/15","10/22","11/12","12/03","12/24","12/31"],
    tickets: "<a href='https://www.ticketmaster.com/tampa-bay-buccaneers-vs-new-orleans-saints/event/0D005E8EBA9EFAB9?refArtist=K8vZ9171oCV&f_simplified_filter=true' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [38.907778, -76.864444],
    name: "FedEx Field",
    team: "Washington Commanders",
    stadiumCapacity: 82000,
    homeGames: ["9/10","9/24","10/05","10/29","11/19","12/03","12/31","1/06"],
    tickets: "<a href='https://www.ticketmaster.com/washington-commanders-v-san-francisco-49ers/event/15005E9CD1365E1C?refArtist=K8vZ9171oM0' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [42.773758, -78.786837],
    name: "Highmark Stadium",
    team: "Buffalo Bills",
    stadiumCapacity: 71608,
    homeGames: ["9/17","10/1","10/15","10/26","11/13","11/19","12/17","12/31"],
    tickets: "<a href='https://www.ticketmaster.com/buffalo-bills-vs-new-england-patriots/event/00005E9495C71AEA?refArtist=K8vZ9171oGf&f_simplified_filter=true' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [39.095309, -84.516003],
    name: "Paycor Stadium",
    team: "Cincinnati Bengals",
    stadiumCapacity: 65515,
    homeGames: ["9/17","10/1","10/15","11/05","11/12","11/26","12/10","12/24","1/06"],
    tickets: "<a href='https://www.ticketmaster.com/cincinnati-bengals-vs-indianapolis-colts/event/16005E9BE18A708C?refArtist=K8vZ9171ovV' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [39.743889, -105.020097],
    name: "Empower Field at Mile High",
    team: "Denver Broncos",
    stadiumCapacity: 76125,
    homeGames: ["9/17","10/08","10/22","10/29","11/19","11/26","12/24","12/31"],
    tickets: "<a href='https://www.ticketmaster.com/denver-broncos-vs-los-angeles-chargers/event/1E005E94CFB04691?refArtist=K8vZ9171og7' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [29.684722, -95.410833],
    name: "NRG Stadium",
    team: "Houston Texans",
    stadiumCapacity: 72220,
    homeGames: ["9/17","10/15","11/05","11/19","11/26","12/03","12/24","12/31"],
    tickets: "<a href='https://www.ticketmaster.com/houston-texans-vs-tennessee-titans/event/3A005E9CBA9247BE?refArtist=K8vZ91756Kf&f_simplified_filter=true' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [30.323889, -81.6375],
    name: "EverBank Stadium",
    team: "Jacksonville Jaguars",
    stadiumCapacity: 69132,
    homeGames: ["9/17","10/15","11/12","11/19","12/04","12/17","12/31"],
    tickets: "<a href='https://www.ticketmaster.com/jacksonville-jaguars-vs-carolina-panthers/event/22005E92C593C507?refArtist=K8vZ9171poV' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [36.090833, -115.183611],
    name: "Allegiant Stadium- Home of Super Bowl LVIII",
    team: "Las Vegas Raiders",
    stadiumCapacity: 65000,
    homeGames: ["9/17","10/9","10/15","11/05","11/12","11/26","12/10","12/14","1/07"],
    tickets: "<a href='https://www.ticketmaster.com/las-vegas-raiders-vs-los-angeles-chargers/event/17005E93B3C13090?refArtist=K8vZ9171oVV' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [33.95345, -118.3391],
    name: "SoFi Stadium",
    team: "Los Angeles Chargers",
    stadiumCapacity: 70240,
    homeGames: ["9/17","10/16","10/29","11/12","11/26","12/10","12/23","1/07"],
    tickets: "<a href='https://www.ticketmaster.com/los-angeles-chargers-vs-dallas-cowboys-inglewood-california-10-16-2023/event/0A005E94DE3B4A84' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [25.958056, -80.238889],
    name: "Hard Rock Stadium",
    team: "Miami Dolphins",
    stadiumCapacity: 64767,
    homeGames: ["9/17","10/08","10/15","10/29","11/19","12/11","12/17","12/24","1/06"],
    tickets: "<a href='https://www.ticketmaster.com/miami-dolphins-vs-buffalo-bills/event/0D005E959733D40E?refArtist=K8vZ9171ogf&f_simplified_filter=true' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [42.090866, -71.264244],
    name: "Gillette Stadium",
    team: "New England Patriots",
    stadiumCapacity: 65878,
    homeGames: ["9/17","10/1","10/08","10/22","11/05","12/03","12/18","1/07"],
    tickets: "<a href='https://www.ticketmaster.com/new-england-patriots-vs-new-york-jets/event/01005E99D4B04F5C?refArtist=K8vZ9171ouf' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [40.813528, -74.074361],
    name: "MetLife Stadium",
    team: "New York Jets",
    stadiumCapacity: 82500,
    homeGames: ["9/17","10/1","10/15","11/06","11/24","12/03","12/10","12/24"],
    tickets: "<a href='https://www.ticketmaster.com/new-york-jets-vs-washington-commanders/event/00005E8C78710F0E?refArtist=K8vZ9171oGV' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [40.446667, -80.015833],
    name: "Acrisure Stadium",
    team: "Pittsburgh Steelers",
    stadiumCapacity: 68400,
    homeGames: ["9/17","10/1","10/08","10/29","11/02","11/12","12/03","12/07","12/23"],
    tickets: "<a href='https://www.ticketmaster.com/pittsburgh-steelers-vs-cincinnati-bengals/event/16005E84DFF435EA?refArtist=K8vZ9171ogV' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [36.166389, -86.771389],
    name: "Nissan Stadium",
    team: "Tennessee Titans",
    stadiumCapacity: 69143,
    homeGames: ["9/17","10/1","10/29","11/12","11/23","11/30","12/10","12/30"],
    tickets: "<a href='https://www.ticketmaster.com/tennessee-titans-vs-seattle-seahawks/event/1B005E9AE59C8A62?refArtist=K8vZ91719u7' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [51.555833, -0.279722],
    name: "Wembley Stadium",
    team: "Jacksonville Jaguars",
    stadiumCapacity: 86000,
    homeGames: ["10/1"],
    tickets: "<a href='https://www.eticketing.co.uk/jaguars' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [51.604444, -0.066389],
    name: "Tottenham Hotspur Stadium",
    team: "Tennessee Titans",
    stadiumCapacity: 62062,
    homeGames: ["10/8","10/15"],
    tickets: "<a href='https://www.nfl.com/uk/ticket-prices' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [50.068056, 8.645806],
    name: "Deutsche Bank Park",
    team: "Kansas City Chiefs",
    stadiumCapacity: 48000,
    homeGames: ["11/05","11/12"],
    tickets: "<a href='https://shp.csharmony.epsilon.com/pages/NFL_US/2023_Germany_ROI/?ck=' target='_blank'>Click here to buy tickets!</a>"
  },
  {
    location: [39.760056, -86.163806],
    name: "Lucas Oil Stadium",
    team: "Indianapolis Colts",
    stadiumCapacity: 67000,
    homeGames: ["9/10","10/1","10/8","10/22","10/29","11/26","12/31"],
    tickets: "<a href='https://www.ticketmaster.com/indianapolis-colts-vs-tampa-bay-buccaneers/event/05005E95A7F3371D?refArtist=K8vZ9171oV0' target='_blank'>Click here to buy tickets!</a>"
  }
  ];
  
  // Looping through the cities array, create one marker for each city, bind a popup containing its name and population, and add it to the map.
  for (let i = 0; i < stadiums.length; i++) {
    let stadium = stadiums[i];
    L.marker(stadium.location)
      .bindPopup(`<h5>${stadium.team}</h5> 
      <hr> <h6>Stadium Name: ${stadium.name.toLocaleString()}</h6>
      <hr> <h7>Capacity ${stadium.stadiumCapacity.toLocaleString()}</h7>
      <hr> <h8>Home Games: ${stadium.homeGames.toLocaleString()}</h8>
      <hr> <h8>Tickets: ${stadium.tickets.toLocaleString()}</h8>`)
      .addTo(myMap);
  }
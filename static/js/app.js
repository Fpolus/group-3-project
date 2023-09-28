// JavaScript code to fetch and display team standings using D3.js
function fetchAndDisplayStandings(season) {
    // Define the API URL with the season and format parameters
    let apiUrl = `https://api.sportsdata.io/v3/nfl/scores/json/Standings/${season}?key=3617c5c1630a498994b18ec5edf7fcba&format=json`;

    // Make an HTTP GET request using the fetch API
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Parse the JSON response
            return response.json(); 
        })
        .then((data) => {
            // 'data' contains the team standings in JSON format
            
            // Process and display the data on your web page
            // Example: Create a table and populate it with team standings
            let table = d3.select("#team-standings-table");

            // Clear any existing table content
            table.html("");

            // Add table headers
            let headers = ["Team", "Wins", "Losses", "Ties"];
            let thead = table.append("thead");
            let tbody = table.append("tbody");

            thead.append("tr")
                .selectAll("th")
                .data(headers)
                .enter()
                .append("th")
                .text(function (d) {
                    return d;
                });

            // Add table rows with team standings data
            let rows = tbody.selectAll("tr")
                .data(data)
                .enter()
                .append("tr");

            // Populate table cells with data
            rows.selectAll("td")
                .data(function (d) {
                    return [d.Team, d.Wins, d.Losses, d.Ties];
                })
                .enter()
                .append("td")
                .text(function (d) {
                    return d;
                });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

// Call the function with a specific season (e.g., "2023")
fetchAndDisplayStandings("2023");











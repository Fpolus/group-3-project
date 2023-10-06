// Function to fetch and display standings for the selected season
function fetchAndDisplayStandings(season) {
    // Define the API URL with the season and format parameters
    let apiUrl = `https://api.sportsdata.io/v3/nfl/scores/json/Standings/${season}?key=5396748b7d504c98af02ed4eb0e4641a&format=json`;

    // Clear the table's HTML content
    let table = d3.select("#team-standings-table");
    table.selectAll("*").remove(); // Remove all table content

    // Clear the bar chart SVG
    let barChartSvg = d3.select("#bar-chart");
    barChartSvg.selectAll("*").remove(); // Remove all SVG content

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
            data.sort((a, b) => b.Wins - a.Wins);
            // Process and display the data on your web page
            // Example: Create a table and populate it with team standings
            let table = d3.select("#team-standings-table");

            // Clear any existing table content
            table.html("");

            // Add table headers
            let headers = ["Team", "Wins", "Losses", "Ties", "Points For", "Touchdowns"];
            let thead = table.append("thead");
            let tbody = table.append("tbody");

            // Add table header cells
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
                    return [d.Name, d.Wins, d.Losses, d.Ties, d.PointsFor, d.Touchdowns];
                })
                .enter()
                .append("td")
                .text(function (d) {
                    return d;
                });

            // Process the data and create the bar chart
            updateBarChart(data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

// Event listener for the fetch button
document.getElementById("fetch-button").addEventListener("click", function () {
    // Get the selected season from the dropdown
    let selectedSeason = document.getElementById("season-select").value;

    // Call the fetchAndDisplayStandings function with the selected season
    fetchAndDisplayStandings(selectedSeason);
});

// Function to fetch and display standings and update the pie chart
function fetchAndDisplayData(season) {
    // Define the API URLs with the season and format parameters
    let standingsUrl = `https://api.sportsdata.io/v3/nfl/scores/json/Standings/${season}?key=5396748b7d504c98af02ed4eb0e4641a&format=json`;

    // Fetch team standings data
    fetch(standingsUrl)
        .then((response) => response.json())
        .then((standingsData) => {

            standingsData.sort((a, b) => b.Wins - a.Wins);
            // Process and display team standings table (same as before)

            // Create an array of team data for the pie chart
            let barData = standingsData.map((team) => ({
                team: team.Team,
                wins: team.Wins,
            }));

            // Update the pie chart
            updateBarChart(barData);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

// Function to update the bar chart
function updateBarChart(data) {
    // Define chart dimensions
    let width = 800; // Adjust the width as needed
    let height = 400; // Adjust the height as needed

    // Select the SVG container for the bar chart
    let svg = d3.select("#bar-chart")
        .attr("width", width)
        .attr("height", height);

    // Define margins
    let margin = { top: 30, right: 30, bottom: 50, left: 50 };

    // Calculate inner dimensions
    let innerWidth = width - margin.left - margin.right;
    let innerHeight = height - margin.top - margin.bottom;

    // Create a group (g) element for the bar chart
    let g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Define scales
    let x = d3.scaleBand()
        .rangeRound([0, innerWidth])
        .padding(0.1)
        .domain(data.map(d => d.team));

    let y = d3.scaleLinear()
        .rangeRound([innerHeight, 0])
        .domain([0, d3.max(data, d => d.wins)]);

    // Create bars
    g.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.team))
        .attr("y", d => y(d.wins))
        .attr("width", x.bandwidth())
        .attr("height", d => innerHeight - y(d.wins));

    // Create x-axis
    g.append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .style("text-anchor", "middle")
        .attr("transform", "rotate(-90) translate(-20, -10)");

    // Create y-axis
    g.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(y));

    // Add chart title
    svg.append("text")
        .attr("class", "chart-title")
        .attr("x", width / 2)
        .attr("y", margin.top)
        .style("text-anchor", "middle")
        .text("Team Wins");

    // Add x-axis label
    svg.append("text")
        .attr("class", "x-label")
        .attr("x", width / 2)
        .attr("y", height - margin.bottom)
        .style("text-anchor", "middle");

    // Add y-axis label
    svg.append("text")
        .attr("class", "y-label")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", margin.left)
        .attr("dy", "1em")
        .style("text-anchor", "middle");
}

// Event listener for the fetch button
document.getElementById("fetch-button").addEventListener("click", function () {
    // Get the selected season from the dropdown
    let selectedSeason = document.getElementById("season-select").value;

    // Call the fetchAndDisplayData function with the selected season
    fetchAndDisplayData(selectedSeason);
});

// Initial data fetch and display (you can set a default season)
fetchAndDisplayData("2023");




























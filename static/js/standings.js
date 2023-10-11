document.addEventListener("DOMContentLoaded", function () {

    console.log("JavaScript code is executing");

    let positionSelect = document.getElementById("position-select");

    let statsContainer = document.getElementById("stats-container");

    positionSelect.addEventListener("change", () => {

      let selectedPosition = positionSelect.value;

      fetchPlayerStats(selectedPosition);
    });
    function fetchPlayerStats(position) {

    console.log("Fetching player stats for", position);

      fetch(`/player_stats_data?position=${position}`)

        .then((response) => response.json())

        .then((data) => {

            console.log("Data received:", data);

          // Clear previous stats
          statsContainer.innerHTML = "";

          if (data.length > 0) {

            // Create a table to display the data
            let table = document.createElement("table");

            table.className = "player-stats";

            // Create a table header row for column names
            let headerRow = document.createElement("tr");

            for (let key in data[0]) {

              if (data[0].hasOwnProperty(key)) {

                let th = document.createElement("th");

                th.textContent = key;

                headerRow.appendChild(th);
              }
            }
            table.appendChild(headerRow);

            // Create table rows for each player's data
            data.forEach((player) => {

              let row = document.createElement("tr");

              for (let key in player) {

                if (player.hasOwnProperty(key)) {

                  let cell = document.createElement("td");

                  cell.textContent = player[key];
                  
                  row.appendChild(cell);
                }
              }
              table.appendChild(row);
            });
            statsContainer.appendChild(table);
          } else {
            // If no data is returned, display a message
            statsContainer.textContent = "No data available for the selected position.";
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  });


document.addEventListener("DOMContentLoaded", function () {
    const positionSelect = document.getElementById("position-select");
    const statsContainer = document.getElementById("stats-container");
  
    positionSelect.addEventListener("change", () => {
      const selectedPosition = positionSelect.value;
      fetchPlayerStats(selectedPosition);
    });
  
    function fetchPlayerStats(position) {
      fetch(`/player_stats_data?position=${position}`)
        .then((response) => response.json())
        .then((data) => {
          // Clear previous stats
          statsContainer.innerHTML = "";
  
          if (data.length > 0) {
            // Create a table to display the data
            const table = document.createElement("table");
            table.className = "player-stats";
  
            // Create a table header row for column names
            const headerRow = document.createElement("tr");
            for (const key in data[0]) {
              if (data[0].hasOwnProperty(key)) {
                const th = document.createElement("th");
                th.textContent = key;
                headerRow.appendChild(th);
              }
            }
            table.appendChild(headerRow);
  
            // Create table rows for each player's data
            data.forEach((player) => {
              const row = document.createElement("tr");
              for (const key in player) {
                if (player.hasOwnProperty(key)) {
                  const cell = document.createElement("td");
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
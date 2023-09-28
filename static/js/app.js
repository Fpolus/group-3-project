
// team_standings.js
document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.querySelector('#standings-table tbody');

    // Make an AJAX request to fetch team standings
    fetch('/team_standings')
        .then(response => response.json())
        .then(data => {
            tableBody.innerHTML = '';

            // Iterate through the team standings data and add rows to the table
            data.team_standings.forEach(team => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${team.Team}</td>
                    <td>${team.Wins}</td>
                    <td>${team.Losses}</td>
                    <td>${team.Ties}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error(error);
        });
});






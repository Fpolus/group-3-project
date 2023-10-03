function scheduleChange() {
    var team = document.getElementById("team-selector");
    team = team.options[team.selectedIndex].text;
    var week = document.getElementById("week-selector");
    week = week.options[week.selectedIndex].text;
    d3.json(`https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2023?key=12592b33cc6c450bb245e1917ffc3b44`).then((data) => {
    console.log(data);
    var weekData = data.filter(d => d.Week === parseInt(week));
    console.log(weekData);
    console.log(week);
    })
}






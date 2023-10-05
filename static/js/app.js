function scheduleChange(week) {
    console.log(week);
    d3.json("https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2023?key=12592b33cc6c450bb245e1917ffc3b44").then((data) => {

    console.log(data);
    let resultArray = data.filter(sampleObj => "week" + sampleObj.Week == week);
    console.log(resultArray);

    //reference table
    let schedule = d3.select("tbody");

    resultArray.forEach((schedulerow) => {
    
        let row = schedule.append("tr");
        row.append("td").append("td").text(schedulerow.HomeTeam);
        row.append("td").append("td").text(schedulerow.AwayTeam);
        row.append("td").append("td").text(schedulerow.DateTime.split("T")[0]);
        row.append("td").append("td").text(schedulerow.DateTime.split("T")[1]);


    
    });
})
    }

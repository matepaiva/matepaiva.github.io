var options = { animateScale: true, responsive: true };
var jsData = [
    {
        value: 60,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "clientSide » VanillaJS"
    },{
        value: 25,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "clientSide » AngularJS"
    },{
        value: 15,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "clientSide » jQuery"
    },{
        value: 35,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "serverSide (nodeJS) » Built-in APIs"
    },{
        value: 20,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "serverSide (nodeJS) » Socket.io"
    },{
        value: 25,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "serverSide (nodeJS) » Express"
    },{
        value: 10,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "serverSide (nodeJS) » Hapi"
    },{
        value: 10,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "serverSide (nodeJS) » Mongoose"
    },{
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "database » MongoDB"
    },{
        value: 50,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "dataMining (webScraping) » Cheerio [nodeJS]"
    },{
        value: 50,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "dataMining (webScraping) » casperJS"
    },{
        value: 100,
        color: "#4D5360",
        highlight: "#616774",
        label: "Desktop » Electron.io"
    },{
        value: 50,
        color: "#b600bf",
        highlight: "#da00b2",
        label: "fullStack » MeteorJS"
    },{
        value: 50,
        color: "#b600bf",
        highlight: "#da00b2",
        label: "fullStack » MeanJS"
    },{
        value: 100,
        color: "#99FF99",
        highlight: "#C2FFC2",
        label: "mobile » PhoneGap"
    }
];

var jsChart = document.getElementById("chart-js").getContext("2d");
var newJsChart = new Chart(jsChart).Doughnut(jsData, options);
document.getElementById("legend-chart-js").innerHTML = newJsChart.generateLegend();

//-------------

var otherData = [
    {
        value: 30,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Css3"
    },
    {
        value: 30,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "HTML5"
    },
    {
        value: 10,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "npm"
    },
    {
        value: 10,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "git"
    },{
        value: 10,
        color: "#4D5360",
        highlight: "#616774",
        label: "webServices: REST API"
    },
    {
        value: 10,
        color: "#6ff75b",
        highlight: "#9fe759",
        label: "Jekyll"
    }
];

var otherChart = document.getElementById("chart-other").getContext("2d");
var newOtherChart = new Chart(otherChart).Pie(otherData, options);
document.getElementById("legend-chart-other").innerHTML = newOtherChart.generateLegend();

//-------------
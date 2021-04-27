var continentAfrica: string = "Africa";
var continentSouthAmerica: string = "South America";
var continentEurope: string = "Europe";
var continentNorthAmerica: string = "North America";
var continentAsia: string = "Asia";
var continentAustralia: string = "Australia";
var africa2008: number = 1028;
var africa2018: number = 1235.5;
var southAmerica2008: number = 1132.6;
var southAmerica2018: number = 1261.5;
var europe2008: number = 4965.7;
var europe2018: number = 4209.3;
var northAmerica2008: number = 6600.4;
var northAmerica2018: number = 6035.6;
var asia2008: number = 12954.7;
var asia2018: number = 16274.2;
var australia2008: number = 1993;
var australia2018: number = 2100.5;
var entire2018: number = africa2018 + southAmerica2018 + europe2018 + northAmerica2018 + asia2018 + australia2018;

function emissions(continent: string, continent2008: number, continent2018: number) {
    console.log("hallo welt")
};

/*
document.querySelector("span").innerHTML = "continent";
*/

emissions(continentAfrica, africa2008, africa2018);

window.addEventListener('load', function () {
    document.querySelector('.australia').addEventListener('click', function () {
        document.querySelector("#titleRegion").innerHTML = continentAustralia;
        document.querySelector("#subtitleRegion").innerHTML = continentAustralia;
        document.querySelector("#continent2018").innerHTML = australia2018.toString();
        document.querySelector("#continentRelative").innerHTML = Math.round(australia2018/entire2018*100 * 100) / 100 + "%";
        document.querySelector("#continentGrowthRateRel").innerHTML = Math.round((australia2018-australia2008)/australia2008*100 * 100) / 100 + "%";
        document.querySelector("#continentGrowthRateAbs").innerHTML = (australia2018-australia2008).toString();
    });
});

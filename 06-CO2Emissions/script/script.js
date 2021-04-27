var continentAfrica = "Africa";
var continentSouthAmerica = "South America";
var continentEurope = "Europe";
var continentNorthAmerica = "North America";
var continentAsia = "Asia";
var continentAustralia = "Australia";
var africa2008 = 1028;
var africa2018 = 1235.5;
var southAmerica2008 = 1132.6;
var southAmerica2018 = 1261.5;
var europe2008 = 4965.7;
var europe2018 = 4209.3;
var northAmerica2008 = 6600.4;
var northAmerica2018 = 6035.6;
var asia2008 = 12954.7;
var asia2018 = 16274.2;
var australia2008 = 1993;
var australia2018 = 2100.5;
var entire2018 = africa2018 + southAmerica2018 + europe2018 + northAmerica2018 + asia2018 + australia2018;
function emissions(continent, continent2008, continent2018) {
    console.log("hallo welt");
}
;
/*
document.querySelector("span").innerHTML = "continent";
*/
emissions(continentAfrica, africa2008, africa2018);
window.addEventListener('load', function () {
    document.querySelector('.australia').addEventListener('click', function () {
        document.querySelector("#titleRegion").innerHTML = continentAustralia;
        document.querySelector("#subtitleRegion").innerHTML = continentAustralia;
        document.querySelector("#continent2018").innerHTML = australia2018.toString();
        document.querySelector("#continentRelative").innerHTML = Math.round(australia2018 / entire2018 * 100 * 100) / 100 + "%";
        document.querySelector("#continentGrowthRateRel").innerHTML = Math.round((australia2018 - australia2008) / australia2008 * 100 * 100) / 100 + "%";
        document.querySelector("#continentGrowthRateAbs").innerHTML = (australia2018 - australia2008).toString();
    });
});
//# sourceMappingURL=script.js.map
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
var asia2018 = 16274.1;
var australia2008 = 1993;
var australia2018 = 2100.5;
var entire2018 = africa2018 + southAmerica2018 + europe2018 + northAmerica2018 + asia2018 + australia2018;
window.addEventListener('load', function () {
    document.querySelector('.europe').addEventListener('click', function () { emissions(continentEurope, europe2018, europe2008); });
    document.querySelector('.northamerica').addEventListener('click', function () { emissions(continentNorthAmerica, northAmerica2018, northAmerica2008); });
    document.querySelector('.southamerica').addEventListener('click', function () { emissions(continentSouthAmerica, southAmerica2018, southAmerica2008); });
    document.querySelector('.africa').addEventListener('click', function () { emissions(continentAfrica, africa2018, africa2008); });
    document.querySelector('.asia').addEventListener('click', function () { emissions(continentAsia, asia2018, asia2008); });
    document.querySelector('.australia').addEventListener('click', function () { emissions(continentAustralia, australia2018, australia2008); });
    function emissions(continent, continent2018, continent2008) {
        document.querySelector("#titleRegion").innerHTML = continent;
        document.querySelector("#subtitleRegion").innerHTML = continent;
        document.querySelector("#continent2018").innerHTML = continent2018.toString();
        document.querySelector("#continentRelative").innerHTML = Math.round(continent2018 / entire2018 * 100 * 100) / 100 + "%";
        document.querySelector("#continentGrowthRateRel").innerHTML = Math.round((continent2018 - continent2008) / continent2008 * 100 * 100) / 100 + "%";
        document.querySelector("#continentGrowthRateAbs").innerHTML = (Math.round((continent2018 - continent2008) * 100) / 100).toString();
        document.querySelector(".chartWrapper .chart").setAttribute('style', 'height:' + continent2018 / entire2018 * 100 + '%');
        document.querySelector('#title').innerHTML = "Carbon Dioxide Emissions in ";
    }
    ;
});
//# sourceMappingURL=script.js.map
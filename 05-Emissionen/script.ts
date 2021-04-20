var countryAfrica: string = "Afrika";
var countrySouthAmerica: string ="Südamerika";
var countryEurope: string = "Europa";
var countryNorthAmerica: string = "Nordamerika";
var countryAsia: string = "Asien";
var countryAustralia: string = "Australien";
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

console.log("Die Emission von " + countryAfrica + " ist: " + africa2018 + "kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + countryAfrica + " damit " + africa2018/entire2018*100 + "%");
console.log("Für " + countryAfrica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + (africa2018-africa2008)/africa2008*100 + "% verändert")
console.log("2018 im Vergleich zu 2008 sind das " + (africa2018-africa2008) + "kg CO2")

console.log("Die Emission von " + countrySouthAmerica + " ist: " + southAmerica2018 + "kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + countrySouthAmerica + " damit " + southAmerica2018/entire2018*100 + "%");
console.log("Für " + countrySouthAmerica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + (southAmerica2018-southAmerica2008)/southAmerica2008*100 + "% verändert")
console.log("2018 im Vergleich zu 2008 sind das " + (southAmerica2018-southAmerica2008) + "kg CO2")

console.log("Die Emission von " + countryEurope + " ist: " + europe2018 + "kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + countryEurope + " damit " + europe2018/entire2018*100 + "%");
console.log("Für " + countryEurope + " hat sich 2018 im Vergleich zu 2008 die Emission um "+ (europe2018-europe2008)/europe2008*100 + "% verändert")
console.log("2018 im Vergleich zu 2008 sind das " + (europe2018-europe2008) + "kg CO2")

console.log("Die Emission von " + countryNorthAmerica + " ist: " + northAmerica2018 + "kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + countryNorthAmerica + " damit " + northAmerica2018/entire2018*100 + "%");
console.log("Für " + countryNorthAmerica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + (northAmerica2018-northAmerica2008)/northAmerica2008*100 + "% verändert")
console.log("2018 im Vergleich zu 2008 sind das " + (northAmerica2018-northAmerica2008) + "kg CO2")

console.log("Die Emission von " + countryAsia + " ist: " + asia2018 + "kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + countryAsia + " damit " + asia2018/entire2018*100 + "%");
console.log("Für " + countryAsia + " hat sich 2018 im Vergleich zu 2008 die Emission um " + (asia2018-asia2008)/asia2008*100 + "% verändert")
console.log("2018 im Vergleich zu 2008 sind das " + (asia2018-asia2008) + "kg CO2")

console.log("Die Emission von " + countryAustralia + " ist: " + australia2018 + "kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + countryAustralia + " damit " + australia2018/entire2018*100 + "%");
console.log("Für " + countryAustralia + " hat sich 2018 im Vergleich zu 2008 die Emission um " + (australia2018-australia2008)/australia2008*100 + "% verändert")
console.log("2018 im Vergleich zu 2008 sind das " + (australia2018-australia2008) + "kg CO2")
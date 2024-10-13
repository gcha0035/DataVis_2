var vg_1 = "australia_wineregions_map.vg.json";
vegaEmbed("#map", vg_1, { actions: false }).then(function(result) {
}).catch(console.error);
var vg_2 = "production.vg.json";
vegaEmbed("#area", vg_2, { actions: false }).then(function(result) {
}).catch(console.error);
var vg_3 = "RegionProduction_bar.vg.json";
vegaEmbed("#bar", vg_3, { actions: false }).then(function(result) {
}).catch(console.error);
var vg_4 = "GrapeVariety_bar.vg.json";
vegaEmbed("#bar2", vg_4, { actions: false }).then(function(result) {
}).catch(console.error);

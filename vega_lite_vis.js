var vg_1 = "australia_wineregions_map.vg.json";
vegaEmbed("#map_chart", vg_1).then(function(result) {
}).catch(console.error);
var vg_2 = "production.vg.json";
vegaEmbed("#area_chart", vg_2).then(function(result) {
}).catch(console.error);
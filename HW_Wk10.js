var dotMap = "HW_Wk9.json";
vegaEmbed("#dot_map",dotMap).then(function(result){
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var barChart = "HW_Wk10.json";
vegaEmbed("#bar_chart",barChart).then(function(result){
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
//Step 1: Use D3 Library to Read JSON data file
d3.json("samples.json").then((bellydata) => {
//Create Horizontal Bar Chart With  drop Down Menu to display top 10 OTUS fuond in that indv.
console.log(bellydata)
function buildChart(BellySamples) {
    //Sample_Values for values 
        var Sample_Values = bellydata.Sample_Values;
    //Use `otu_ids` as the labels for the bar chart.
        var otu_ids = bellydata.otu_ids;
    //Use `otu_labels` as the hovertext for the chart.
        var otu_labels = bellydata.otu_labels

    }

}
//Display Sample Meta Data 
function getInfo(id) {
    d3.json("samples.json").then((bellydata) => {
        var metadata = bellydata.metadata;
        console.log(metadata)
    //filter by id
    var result = metadata.filter(meta => meta.id.toString() === id) [0];

    var demographicInfo = d3.select("#sample-metadata"); 
    demographicInfo.html("");
    // append demographic info to the panel 
    Object.defineProperties(result).orEach((key) => {
        demographicInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");
    });

    });
}

//Step 1: Use D3 Library to Read JSON data file
function buildChart(BellySamples) {
    d3.json("samples.json").then((bellydata) => {
        //Create Horizontal Bar Chart With  drop Down Menu to display top 10 OTUS fuond in that indv.
        //console.log(bellydata)
    //Sample_Values for values 
        var Sample_Values = bellydata.Sample_Values;
        //console.log(Sample_Values)
    //Use `otu_ids` as the labels for the bar chart.
        var otu_ids = bellydata.otu_ids;
        //console.log(otu_ids)
    //Use `otu_labels` as the hovertext for the chart.
        var otu_labels = bellydata.otu_labels
        //console.log(otu_labels)
    //Slice the first 10 object for plotting and Reverse Array
        var yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
        var trace1 = {
          type: "bar",
          name: "Bar Chart",
          y: yticks,
          orientation: "h" 
        };
        var barData = [trace1];
          Plotly.newPlot("bar", barData);
        
//Create a Bubble Chart
// Use `otu_ids` for the x values.
var trace2 = {
    x: otuID,
// Use `sample_values` for  the y values.
    y: sample_values, 
    test: out_labels,
    mode: "markers", 
    marker: {
// Use `sample_values` for the marker size.
        size: sample_values, 
// Use `otu_ids` for the marker colors.
        color: otu_ids
    },
// Use `otu_labels` for the text values.
    text: otu_labels
};

var bubble_data = [trace2];
Plotly.newPlot("bubble", bubble_data);

//Update all of the plots any time that a new sample is selected.
function optionChanged(id) {
    getPlot(id);
    getInfo(id);
}

// create the function for the initial data rendering
function init() {
    // select dropdown menu 
    var dropdown = d3.select("#selDataset");

    // grab data
    d3.json("samples.json").then((bellydata)=> {
        console.log(bellydata)

        // get the id data to the dropdwown menu
        bellydata.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });

        // call the functions to display the data and the plots to the page
        getPlot(data.names[0]);
        getInfo(data.names[0]);
    });
}

init();

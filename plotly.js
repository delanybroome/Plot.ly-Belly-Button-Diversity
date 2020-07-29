//Step 1: Use D3 Library to Read JSON data file
d3.json("samples.json").then((bellydata) => {
//Create Horizontal Bar Chart With  drop Down Menu to display top 10 OTUS fuond in that indv.
console.log(bellydata)
function buildChart(BellySamples) {
    //Sample_Values for values 
        var Sample_Values = bellydata.Sample_Values;
        console.log(Sample_Values)
    //Use `otu_ids` as the labels for the bar chart.
        var otu_ids = bellydata.otu_ids;
        console.log(otu_ids)
    //Use `otu_labels` as the hovertext for the chart.
        var otu_labels = bellydata.otu_labels
        console.log(otu_labels)
    //Slice the first 10 object for plotting and Reverse Array
        var yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
        var trace1 = {
          type: "bar",
          name: "Bar Chart"
          y: yticks,
          orientation: "h" 
        };
        var barData = [trace1];
          Plotly.newPlot("bar", barData);
        });
//Create a Bubble Chart
// Use `otu_ids` for the x values.

// Use `sample_values` for the y values.

// Use `sample_values` for the marker size.

// Use `otu_ids` for the marker colors.

// Use `otu_labels` for the text values.

//Display Sample Meta Data 

//Display each key-value pair from the
// metadata JSON object somewhere on the page.

//Update all of the plots any time that a new sample is selected.
    }

}

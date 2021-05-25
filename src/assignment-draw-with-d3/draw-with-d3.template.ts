import * as d3 from "d3";

const svg = d3.select("body").append("svg")
    .attr('id', 'graphSvg')
    .attr("width", '100%')
    .attr("height", '100%');

import * as d3 from "d3";

const svg = d3.select("body").append("svg")
    .attr('id', 'graphSvg')
    .attr("width", '100%')
    .attr("height", '100%');


const gContainer = svg.append('g').attr('transform', 'translate(10, 10)');
gContainer.append('line').attr('x1','10').attr('x2','50').attr('y1','10').attr('y2','10').attr('stroke','orange');
gContainer.append('circle').attr('r','10').attr('cx','10').attr('cy','10').attr('fill','red')
gContainer.append('circle').attr('r','10').attr('cx','50').attr('cy','10').attr('fill','red')


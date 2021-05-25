import * as d3 from "d3";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const svg = d3.select("body").append("svg")
    .attr('id', 'graphSvg')
    .attr("width", '100%')
    .attr("height", '100%');



// 1. Create 5 circles in the dom (no attributes).
svg.append('circle');
svg.append('circle');
svg.append('circle');
svg.append('circle');
svg.append('circle');

// 2. Select all circles and bind them array of 5 random values (from 0 to 50).
svg.selectAll('circle')
    .data([getRandomInt(1,50),getRandomInt(1,50),getRandomInt(1,50),getRandomInt(1,50),getRandomInt(1,50)]);


// 3. Draw the circles -
// - position them one after the other.
// - give them their binded radius
// - if the radius is bigger than 30, color them in
// orange - otherwise color them in gray.

svg.selectAll('circle')
    .attr('r', (radius: number) => radius)
    .attr('fill', (radius: number)=> radius > 30 ? 'orange' : 'gray')
    .attr('cx', (_, index) => 100 + index * 100)
    .attr('cy', '100')





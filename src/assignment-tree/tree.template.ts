import * as d3 from "d3";
import {Policy} from "../model/policy.interface";

const margin = {top: 20, right: 90, bottom: 30, left: 90},
    width = 1400 - margin.left - margin.right,
    height = 50000 - margin.top - margin.bottom;

const svg = d3.select("body").append("svg")
    .attr('id', 'graphSvg')
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);
const g = svg.append("g")
    .attr("transform",
        `translate(${margin.left}, ${margin.top}`);

g.append('g').attr('class','links');
g.append('g').attr('class','nodes');

(async () =>{
    const rawData = await d3.csv("data/data.csv");
    const data: Policy[] = rawData.map((row)=>
        ({...row, is_inherited: row.is_inherited?.toLowerCase() === 'true'} as Policy)
    );

    //continue here
})()



import * as d3 from "d3";
import {HierarchyPolicyNode, Policy} from "../../model/policy.interface";

const margin = {top: 20, right: 90, bottom: 30, left: 90},
    width = 1500 - margin.left - margin.right,
    height = 50000 - margin.top - margin.bottom;

const svg = d3.select("body").append("svg")
    .attr('id', 'graphSvg')
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);
const gContainer: any = svg.append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

gContainer.append('g').attr('class','links');
gContainer.append('g').attr('class','nodes');

(async () =>{
    const rawData = await d3.csv("data/data.csv");

    const data: Policy[] = rawData.map((row)=>
        ({...row, is_inherited: row.is_inherited?.toLowerCase() === 'true'} as Policy)
    );

    const stratifyFunc = d3.stratify<Policy>().id((d:Policy)=> d.id).parentId((d:Policy) => d.parent_id)
    const policyHierarchy: HierarchyPolicyNode = stratifyFunc(data);
    const linkGenerator = d3.linkHorizontal().x(d => d['y']).y((d) => d['x']);
    const treeLayoutGenerator = d3.tree().size([height,width]);
    treeLayoutGenerator(policyHierarchy);

    gContainer.select('.nodes')
        .selectAll('.node')
        .data(policyHierarchy.descendants())
        .join((enter) => {
            const nodeGroup = enter.append('g')
                .attr('class', 'node')
                .style('transform',(d)=> `translate(${d['y']}px, ${d['x']}px)`)
                .style('color', (d)=> d.data.is_inherited ? 'red': 'black')
                .style('fill', (d)=> d.data.is_inherited ? 'red': 'black')
            nodeGroup.append('circle').attr('r', '3');
            nodeGroup.append('text')
                .text((d)=>d.data.name)
                .style('font-size', '13px')
                .style('transform', function (d) {
                    if(d.children?.length > 0){

                        return 'translate(' + (-this.getBoundingClientRect().width - 9) + 'px, 3px)';
                    }
                    else{
                        return 'translate(9px, 4px)'
                    }
                });
        },update => {}, exit=>{})

    gContainer.select('.links')
        .selectAll('.link')
        .data(policyHierarchy.links())
        .join((enter)=>{
            enter
                .append('path')
                .attr('d',(d) => linkGenerator(d as any))
                .attr('stroke','#bbb')
                .attr('fill', 'none');
            return;
        }, (update)=>{}, (exit)=>{})

})()





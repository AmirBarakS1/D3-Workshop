import * as d3 from "d3";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomValue(values: any[]) {
    const random = getRandomInt(0, values.length - 1);
    return values[random];
}

const GFX_TEAM_MEMBERS = [
    'Oz',
    'Irena',
    'Liron',
    'Amir',
    'Vova',
    'Yam',
    'Pinto',
    'Noam'
];

const svg = d3.select("body").append('svg')

d3.select("body").insert('button', ':first-child').text('Generate Data').on('click',()=>{
    const randomData = generateRandomData();
    draw(svg, randomData);
})
function generateRandomData(): {title:string, value: number}[]{
    return GFX_TEAM_MEMBERS.reduce((acc,title)=>{
        if(getRandomValue([true, false])){
            acc.push({
                title,
                value: getRandomInt(10,500)
            })
        }
        return acc;
    },[]).sort((a,b)=> a.title.localeCompare(b.title));
}

function draw(selection, data:{title: string, value: number}[]){
    selection.selectAll('.bar')
        .data(data, (d) => d.title)
        .join(enter => {
            const barGroup = enter.append('g')
                .attr('class', 'bar')
                .style('transform',(_, i) => `translate(20px, ${i * 25}px)`)
                .style('opacity', 0)
                .call((e)=>{
                    e.transition()
                        .duration(500)
                        .style('opacity', 1);
                })


            barGroup.append('rect')
                .attr('width', d =>  d.value)
                .attr('height', 20)
                .attr('fill', '#85C1E9');

            barGroup.append('text')
                .text((d)=> d.title)
                .attr('fill', '#34495E')
                .attr('font-weight', 'normal')
                .style('transform', `translateY(15px)`)

        }, update => {
            update
                .style('opacity', 1).transition()
                .duration(500).style('transform',(_, i) => `translate(20px, ${i * 25}px)`);
            update.select('rect').transition()
                .duration(500).attr('width', d =>  d.value)
        }, exit => {
            exit.remove();
        })
}











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
const FE_FRAMEWORKS = [
    'Angular',
    'React',
    'Veu',
    'JQuery',
    'Ember',
    'Semantic-UI'
];

const svg = d3.select("body").select("svg");

d3.select("body").insert('button', ':first-child').text('Generate Data').on('click',()=>{
    const randomData = generateRandomData();
    draw(svg, randomData);
})
function generateRandomData(): {title:string, value: number}[]{
    return FE_FRAMEWORKS.reduce((acc,title)=>{
        if(getRandomValue([true, false])){
            acc.push({
                title,
                value: getRandomInt(10,500)
            })
        }
        return acc;
    },[]).sort((a,b)=> a.title.localeCompare(b.title));
}

// Fill this method
function draw(selection, data:{title: string, value: number}[]){
    selection.selectAll('.bar')
        .data(data, (d) => d.title)
        .join(enter => {

        }, update => {

        }, exit => {

        })
}











import React from 'react';
import './Circle.css';
import * as d3 from "d3";

export default class Circle extends React.Component {
  //ref: SVGSVGElement | undefined;
  componentDidMount(){
    let chart = d3.select("#chart").append("svg");

    let width = 1000,
    height = 1000;

    // let radius = Math.min(width, height) / 2 - margin;

     chart.attr("width", width)
           .attr("height", height);
    
    // var nodes = [{x: 30, y: 50},
    //             {x: 50, y: 80},
    //             {x: 90, y: 120}]

    // chart.selectAll("circle .nodes")
    // .data(nodes)
    // .enter()
    // .append("circle")
    // .attr("class", "nodes")
    // .attr("cx", d => { return d.x; })
    // .attr("cy", d => { return d.y; })
    // .attr("r", "10px")
    // .attr("fill", "black") 

    // var links = [
    //           {source: nodes[0], target: nodes[1]},
    //           {source: nodes[2], target: nodes[1]}
    //   ]

    // chart.selectAll(".line")
    // .data(links)
    // .enter()
    // .append("line")
    // .attr("stroke-width", 3)
    // .attr("x1", d => { return d.source.x })
    // .attr("y1", d => { return d.source.y })
    // .attr("x2", d => { return d.target.x })
    // .attr("y2", d => { return d.target.y })
    // .style("stroke", "rgb(6,120,155)");

    let data = [2, 4, 8, 10];
    let pie = d3.pie();
    let g = chart.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    let color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c']);

    let arc: any = d3.arc()
                .innerRadius(90)
                .outerRadius(100);
                
    let arcs = g.selectAll("arc")
                .data(pie(data))
                .enter()
                .append("g")
                .attr("class", "arc");

    arcs.append("path")
                .attr("fill", (d, i) => {
                    return color(i+"");
                })
                .attr("d", arc);
  }

  render() {
      return (
        <div id="chart"></div>
      );
  }
}
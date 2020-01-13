import React from 'react';
import './Circle.css';
import * as d3 from "d3";

export default class Circle extends React.Component {

  drawChart(){
    let chart = d3.select("#chart").append("svg");

    let height = 200;
    let width = 200;

    chart.attr("width", width)
          .attr("height", height);
    
    let data = [2, 8,
                6, 10,
                4, 2, 
                4, 6, 
                10, 4, 
                4, 6,
                8, 6, 
                10, 4];
    let pie = d3.pie().sort(null);
    let g = chart.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    let color = d3.scaleOrdinal(['#4cffb5', 'rgba(0,0,0,0)',
                                '#b7cfff','rgba(0,0,0,0)',
                                '#9665f1','rgba(0,0,0,0)',
                                '#f18aca','rgba(0,0,0,0)', 
                                '#4b5e9d','rgba(0,0,0,0)']);


    let arc: any = d3.arc()
                .innerRadius(90)
                .outerRadius(95);
    

    let arcs = g.selectAll("arc")
                .data(pie(data))
                .enter()
                .append("g")
                .attr("class", "arc");
                
    var defs = chart.append("defs");

    var filter = defs.append("filter")
                .attr("id", "drop-shadow")
            
    filter.append("feGaussianBlur")
                .attr("in", "SourceAlpha")
                .attr("stdDeviation", 4)
                .attr("result", "blur");
    filter.append("feOffset")
                .attr("in", "blur")
                .attr("dx", 3)
                .attr("dy", 3)
                .attr("result", "offsetBlur");
            
    var feMerge = filter.append("feMerge");
            
    feMerge.append("feMergeNode")
                .attr("in", "offsetBlur")
    feMerge.append("feMergeNode")
                .attr("in", "SourceGraphic");
                
    arcs.append("path")
                .attr("fill", (d, i) => {
                    return color(i+"");
                })
                .attr("d", arc)
                .attr("filter", "url(#drop-shadow)")
                .on("click",function(d) { 

                  let rotate = (d.startAngle + d.endAngle) / Math.PI * 180;

                  g.transition()
                    .attr("transform",  "translate(" + width / 2 + "," + height / 2 + ") rotate(" + rotate + ")")
                    .duration(10000);
                  
                });
    
  }

  render() {
      return (
        <div id="chart"></div>
      );
  }

  componentDidMount(){
    this.drawChart();
  }
}
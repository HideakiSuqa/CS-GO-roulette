import React from 'react';
import './Circle.css';
import * as d3 from "d3";

export default class Circle extends React.Component {
  ref: SVGSVGElement | undefined;
  componentDidMount(){
    d3.select("svg")
      .append("circle")
      .attr("r", 50)
      .attr("cx", 1000 / 2)
      .attr("cy", 1000 / 2)
      .attr("fill", "red");
  }

  render() {
      
      return (
          <svg className="container" width={1000} height={1000}>
          </svg>
      );
  }
}
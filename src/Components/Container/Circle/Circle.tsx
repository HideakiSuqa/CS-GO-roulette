import React from 'react';
import './Circle.css';

export default class Circle extends React.Component {
  componentDidMount() {
    this.updateCanvas();
}
  updateCanvas() {
      const c : any = this.refs.canvas;
      const ctx = c.getContext('2d');
      ctx.setLineDash([5,7]);
      ctx.arc(100,75,50,0, 2*Math.PI);
      ctx.stroke();

  }
  render() {
      return (
          <canvas className="circle col-md-4" ref="canvas" width={300} height={300}/>
      );
  }
}
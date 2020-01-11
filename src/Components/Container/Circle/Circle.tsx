import React from 'react';
import './Circle.css';

export default class Circle extends React.Component {
  componentDidMount() {
    this.updateCanvas();
}
  updateCanvas() {
      const c : any = this.refs.canvas;
      let width = c.offsetWidth;
      let height = c.offsetHeight;
      const ctx = c.getContext('2d');
      ctx.setLineDash([25,5,30,10,25,15,20,10,30,5]);
      ctx.arc(100,75,50,0, 2*Math.PI);
      ctx.stroke();
      ctx.rotate(102*Math.PI/180);
  }
  render() {
      return (
        <div className="circle col-md-4">
          <canvas ref="canvas" width={150} height={150}/>
        </div>
      );
  }
}
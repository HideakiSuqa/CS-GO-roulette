import React from 'react';
import './Circle.css';

export default class Circle extends React.Component {
  componentDidMount() {
    this.updateCanvas();
}

  radian (degree: number) {
    let rad = degree * (Math.PI / 180);
    return rad;
  }
  updateCanvas() {
      const c : any = this.refs.canvas;
      const context = c.getContext('2d');
      let dotsPerCircle = 8;

      let interval = (Math.PI * 2) / dotsPerCircle;   

      let centerX = 75;
      let centerY = 75;
      let radius = 50;

      for(let i = 1; i < dotsPerCircle; i++){

          let currentPoint = interval * i;
          let pastPoint = interval * (i-1);
          
          
          let x1 = centerX + radius * Math.cos(currentPoint);
          let y1 = centerY + radius * Math.sin(currentPoint);
          let x2 = centerX + radius * Math.cos(pastPoint);
          let y2 = centerY + radius * Math.sin(pastPoint);

          context.moveTo(x1,y1);
          context.lineTo(x2,y2);
          context.stroke();
      }
  }
  render() {
      return (
        <div className="circle col-md-4">
          <canvas ref="canvas" width={150} height={150}/>
        </div>
      );
  }
}
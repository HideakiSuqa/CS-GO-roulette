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
      let dotsPerCircle = 20;

      let interval = (Math.PI * 2) / dotsPerCircle;   

      let centerX = 75;
      let centerY = 75;
      let radius = 50;

      for(let i = 0; i < dotsPerCircle; i++){

          let desiredRadianAngleOnCircle = interval*i;
          
          let x = centerX + radius * Math.cos(desiredRadianAngleOnCircle);
          let y = centerY + radius * Math.sin(desiredRadianAngleOnCircle);

          context.beginPath();
          context.arc(x, y, 3, 0, Math.PI * 2);
          context.closePath();  
          context.fill();
    
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
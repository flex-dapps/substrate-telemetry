import * as React from 'react';

const RADIUS = 16;

export class PieChart extends React.Component<{}, {}> {
  public render() {
    const [x, y] = this.getPoint(0.33);
    const path = `M 0 0 L 16 0 A 16 16 0 0 1 ${x} ${y} L0 0`;

    console.log(x, y);

    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-16 -16 32 32" width="32" height="32">
        <path d={path} />
      </svg>
    )
  }

  private getPoint(percent: number): [number, number] {
    return [
      RADIUS * Math.cos(Math.PI * 2 * percent),
      RADIUS * Math.sin(Math.PI * 2 * percent),
    ];
  }
}

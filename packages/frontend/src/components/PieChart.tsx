import * as React from 'react';

const RADIUS = 16;

export class PieChart extends React.Component<{}, {}> {
  public render() {
    const split = [1/3, 1/3, 1/3];

    let end = -0.25;
    let ex = 0;
    let ey = -RADIUS;

    const paths = split.map((percent, index) =>  {
      const sx = ex;
      const sy = ey;
      const large = percent > 0.5 ? 1 : 0;

      end += percent;
      [ex, ey] = this.getPoint(end);

      const path = `M 0 0 L ${sx} ${sy} A ${RADIUS} ${RADIUS} 0 ${large} 1 ${ex} ${ey} L0 0`;

      return (
        <path key={index} d={path} stroke="currentColor" fill="currentColor" stroke-width="1" fill-opacity="0.25" />
      );
    });

    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-17 -17 34 34" width="34" height="34">
        {paths}
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

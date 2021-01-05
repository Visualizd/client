<script lang="ts">
  import * as d3 from 'd3';
  import { onMount } from 'svelte';
  import { nodes } from './store';

  class Point {
    public x: number;
    public y: number;

    constructor(X: number, Y: number) {
      this.x = X;
      this.y = Y;
    }

    unravel(): Array<number> {
      return [this.x, this.y];
    }

    changeX(x: number): void {
      this.x = x;
    }

    changeY(y: number): void {
      this.y = y;
    }
  }

  

  let n = $nodes;
  let lineGenerator = d3.line().curve(d3.curveCardinal);

  function getNode(id: number) {
    for(let i = 0; i < n.length; i++) {
      if(n[i].id === id) {
        return n[i];
      }
    }

    return null;
  }

  function genLines() {
    d3.select("svg").select('path').remove();

    for(let i = 0; i < n.length; i++) {
      let curr = n[i];

      let pt1 : Point = new Point(curr.x + 100, curr.y);
      
      curr = getNode(curr.connection);

      if(curr !== null) {
        let pt2: Point = new Point(curr.x, curr.y);
        let dy: number = (1/10) * (pt1.y - pt2.y);
        let dx: Point = new Point((pt1.x + pt2.x) / 2, pt1.y - dy);

        let points: Array<Array<number>> = [pt1.unravel(), dx.unravel(),  pt2.unravel()];
        
        d3.select('svg').append('path')
          .attr('d', lineGenerator(points))
          .attr('stroke', 'black')
          .attr('fill', 'none');
      }
    }
  }
  onMount(() => genLines());
  nodes.subscribe(() => genLines());

</script>

<style>

</style>
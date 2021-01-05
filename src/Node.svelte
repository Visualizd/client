<script>
  import { nodes } from './store';
  export let obj;

  function formNodes() {
    let n = [];
    
    for(var el in nodes) {
      if(el === obj) {
        n.push(obj);
      }

      else {
        n.push(el);
      }
    }

    return n;
  }

	function mouseDown() {
		window.addEventListener('mousemove', mouseMove);
	}

	function mouseMove(e) {
    obj.x = e.x;
    obj.y = e.y;
    
    nodes.update(n => n);

    window.addEventListener('mouseup', mouseUp);
    window.removeEventListener('mouseDown', mouseDown);
	}

	function mouseUp() {
		window.removeEventListener('mousemove', mouseMove);
  }

</script>


<style>
rect {
  stroke-width:3;
  stroke:rgb(0, 0, 0);
  opacity: 2.0;
}
</style>

<rect width="100" height="100" style="fill: {obj.color}" x={obj.x} y={obj.y} on:mousedown={mouseDown} />
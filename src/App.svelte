<script lang="ts">
	import * as d3 from 'd3';

	import { onMount } from 'svelte';
	import { nodes } from './store';

	import Node from './Node.svelte';
	import Curve from './Curve.svelte';
	
	export let name: string;
</script>


<style>

</style>

<title>{ name }</title>

<svg width="1000" height="1000" style="border:1px solid black">
	<Curve 	/>
	{ #each $nodes as node }
		<Node obj={node} />
	{ /each }
</svg>


{ #each $nodes as node }
	<p>{node.x}</p>
{ /each }
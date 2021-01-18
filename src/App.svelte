<script lang="ts">
	import * as d3 from 'd3';

	import { onMount } from 'svelte';
	import { nodes } from './store';

	import Node from './Node.svelte';
	import Curve from './Curve.svelte';
	
	export let name: string;

	import N from './nodes/Node.svelte';
</script>

<style>

	.node-container {
		float:right;
		padding-top:100px;
		width:800px;
		margin:20px;
		display:flex;flex-direction: column;gap:20px;
		align-items:center;
	}

</style>

<title>{ name }</title>

<svg width="1000" height="1000" style="border:1px solid black">
	<Curve 	/>
	{ #each $nodes as node }
		<Node obj={node} />
	{ /each }
</svg>


<div class="node-container">
	<N nodeType="textInput" title="Text 1"/>
	<N nodeType="constantInput" title="Constant"/>
	<N nodeType="dropdown" title="Dropdown 1"/>
	<N nodeType="fileInput" title="File 1"/>
	<N nodeType="fileInput" title="File 2"/>
	<N nodeType="dropdown" title="Dropdown 2"/>
</div>

{ #each $nodes as node }
	<p>{node.x}</p>
{ /each }
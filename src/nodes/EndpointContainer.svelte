<script lang="ts">

import Endpoint from './Endpoint.svelte';
import {EndpointType} from './IEndpoint';

import { fly } from 'svelte/transition';

export let endpoints = [];

export let type:EndpointType = EndpointType.I;

let typeClass = type === EndpointType.I ? "input" : "output";
let transition = type === EndpointType.I ? -50 : 50;

</script>

<style type="text/scss">

@keyframes endpoint-enter {
    0% {
        transform:translateY(-100%);
    }
    100% {
        transform:translateY(0);
    }
}

div.endpoint-container {
    position:absolute;
    width:15px;
    height:100%;
    top:0;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:40px;
    &.input {
        left:0;
        transform:translateX(-50%);
    }
    &.output {
        right:0;
        transform:translateX(50%);
    }
}

</style>

<div 
    class="endpoint-container {typeClass}"
    transition:fly="{{x:transition, duration: 200}}">
    {#each endpoints as endpoint}
        <Endpoint endpoint={endpoint} />
    {/each}
</div>


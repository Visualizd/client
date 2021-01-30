<script lang="ts">
    export let nodeType = 'default';
    export let title = 'Operation';

    import {EndpointType} from './IEndpoint';
    import EndpointContainer from './EndpointContainer.svelte'

    import NodeDropdown from './NodeDropdown.svelte';
    import NodeTextInput from './NodeTextInput.svelte';
    import NodeFileInput from './NodeFileInput.svelte';
    import NodeConstantInput from './NodeConstantInput.svelte';

    import {NodeEndpoints} from './NodeEndpoints';

    let focused = false;
    let showEndpoints = false;

    let showInputs = false;
    let showOutputs = false;

    function handleClick() {
        focused = !focused;
        if(!focused) showEndpoints = false;
    }

    function handleMouseLeave() {
        showEndpoints = false;
    }

    function handleHover(e) { 
        if(!focused) return;

        const rect = e.currentTarget.getBoundingClientRect();
        
        const width = rect.width;
        const x = e.clientX - rect.left;
        
        showEndpoints = true;
        showInputs = (x < 50);
        showOutputs = ((width - x) < 50);
    }

</script>

<style type="text/scss">

@keyframes changeOverflow {
    0% {
        overflow:hidden;
    }
    100% {
        overflow:visible;
    }
}

div.node {
    position:relative;
    border:1px solid rgb(112, 157, 255);
    border-radius: 10px;
    max-height:50px;
    max-width:200px;
    cursor:pointer;
    transition:max-height .2s ease-in-out, max-width .2s ease-in-out;
    padding:10px 20px;
    &.node-focused {
        cursor:default;
        max-height:800px;
        max-width:300px;
    }
    &.node-allow-drop {
        box-shadow: 0px 0px 11px -2px rgba(112,157,255,0.75);
    }
    &.node-error {
        border-color:rgb(255, 92, 92);
        &.node-allow-drop {
            box-shadow: 0px 0px 11px -2px rgba(255, 92, 92,0.75);
        }
    }
    &.node-success {
        border-color:rgb(34, 216, 110);
        &.node-allow-drop {
            box-shadow: 0px 0px 11px -2px rgba(34, 216, 110,0.75);
        }
    }
}

div.node-inner {
    position:relative;
    margin:0;
    padding:0;
    overflow:hidden;
    max-height:50px;
    transition:max-height .2s ease-in-out;
    .node-focused & {
        animation:changeOverflow .2s linear 1;
        overflow:visible;
        max-height:800px;
    }
}

div.node-title {
    position:relative;
    height:50px;
    width:200px;
    font-family:'Montserrat', sans-serif;
    transition:width .2s ease-in-out;
    z-index:100;
    div.node-title-contents {
        position:absolute;
        margin:0;
        height:50px;
        width:auto;
        white-space:nowrap;
        line-height:50px;
        font-size:20px;

        top:50%;
        right:50%;
        transform:translate(50%, -50%);

        transition: transform .1s ease-in-out, right .1s ease-in-out;

        .node-focused & {
            right:0;
            transform:translate(-15px, -50%);
        }
    }
    .node-focused & {
        width:300px;
    }
}

</style>

<div 
    class="node {focused ? 'node-focused':''}"
    on:click={handleClick}
    on:mousemove={handleHover}
    on:mouseleave={handleMouseLeave}>
    <div class="node-inner">
        <div class="node-title">
            <div class="node-title-contents">{title}</div>
        </div>

        {#if nodeType === 'dropdown'}
            <NodeDropdown />
        {:else if nodeType === 'fileInput'}
            <NodeFileInput />
        {:else if nodeType === 'textInput'}
            <NodeTextInput />
        {:else if nodeType === 'constantInput'}
            <NodeConstantInput />
        {/if}
        
    </div>

    {#if focused}
        <EndpointContainer 
            type={EndpointType.I}
            endpoints={NodeEndpoints[nodeType].input}/>
        <EndpointContainer 
            type={EndpointType.O}
            endpoints={NodeEndpoints[nodeType].output}/>
    {/if}

</div>
<script>
    export let nodeType = 'default';
    export let title = 'Operation';
    import NodeDropdown from './NodeDropdown.svelte';
    import NodeTextInput from './NodeTextInput.svelte';
    import NodeFileInput from './NodeFileInput.svelte';
    import NodeConstantInput from './NodeConstantInput.svelte';

    let focused = false;
    let showEndpoints = false;

    let endpointQuadrant = 'n';

    $: endpointClass = `${(showEndpoints ? "":"endpoint-hidden")} endpoint-${endpointQuadrant}`;

    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    function getDistance(p1, p2) {
        return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2));
    }

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

        const height = rect.height;
        const width = rect.width;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        let p = new Point(x, y);

        let nP = new Point(width / 2, 0);
        let sP = new Point(width / 2, height);
        let eP = new Point(width, height / 2);
        let wP = new Point(0, height / 2);

        let fromN = getDistance(p, nP);
        let fromS = getDistance(p, sP);
        let fromE = getDistance(p, eP);
        let fromW = getDistance(p, wP);

        let min = Math.min(fromN, fromS, fromW, fromE);
        if(min > 50) {
            showEndpoints = false;
        } else {
            showEndpoints = true;
        }

        switch(Math.min(fromN, fromS, fromW, fromE)) {
            case fromN:
                endpointQuadrant = 'n';
                break;
            case fromS:
                endpointQuadrant = 's';
                break;
            case fromW:
                endpointQuadrant = 'w';
                break;
            case fromE:
                endpointQuadrant = 'e';
                break;
        }
        e.stopPropagation();

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
    cursor:pointer;
    transition:max-height .2s ease-in-out;
    padding:10px;
    &.node-focused {
        cursor:default;
        max-height:500px;
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
        max-height:300px;
    }
    z-index:100;
}

div.node-title {
    position:relative;
    height:50px;
    width:200px;
    font-family:'Montserrat', sans-serif;
    transition:width .2s ease-in-out;
    div.node-title-contents {
        position:absolute;
        margin:0;
        height:50px;
        width:auto;
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

div.textbox {
    font-size:20px;
}

div.endpoint {
    position:absolute;
    height:15px;
    width:15px;
    border-radius: 50%;
    border:1px solid rgb(145, 145, 145);
    background:#fff;
    cursor:pointer;
    transition:border .1s ease-in-out;
    z-index:1;
    &.endpoint-hidden {
        display:none;
    }
}

div.endpoint:hover {
    border:1.5px solid rgb(40, 50, 201);
}

div.endpoint-n {
    top:0;
    left:50%;
    transform:translate(-50%, -50%)
}
div.endpoint-w {
    top:50%;
    left:0;
    transform:translate(-50%, -50%)
}
div.endpoint-s {
    bottom:0;
    left:50%;
    transform:translate(-50%, 50%)
}
div.endpoint-e {
    top:50%;
    right:0;
    transform:translate(50%, -50%)
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

    <div class="endpoint {endpointClass}"></div>

</div>
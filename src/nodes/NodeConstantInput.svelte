<script>
    import Constant from '../inputs/Constant.svelte';
    
    let fullscreen = false;
    let centered = true;

    let constant;

    function stopProp(e) {
        e.stopPropagation();
    }

    function toggleFullscreen(e) {
        fullscreen = !fullscreen;
        e.stopPropagation();
    }

    function toggleCentered(e) {
        centered = !centered;
        e.stopPropagation();
    }

    export let rows = 10;
    export let columns = 8;

    let data = [];
    for(let i = 0; i < rows; i++) {
        let r = [];
        for(let j = 0; j < columns; j++) {
            r.push('');
        }
        data = [...data, r];
    }

    function addColumn() {
        for(let i = 0; i < rows; i++) {
            data[i] = [...data[i], ''];
        }
        columns++;
    }

    function removeColumn() {
        if(columns === 1) return;
        for(let i = 0; i < rows; i++) {
            data[i] = [...data[i].slice(0, columns - 1)];
        }
        columns--;
    }

    function addRow() {
        let row = [];
        for(let i = 0; i < columns; i++) {
            row.push('');
        }
        data = [...data, row];
        rows++;
        constant.resize();
    }

    function removeRow() {
        if(rows === 1) return;
        data = [...data.slice(0, rows - 1)];
        rows--;
    }

</script>

<style type="text/scss">
div.constant-outer {
    position:relative;
    height:300px;
    margin:10px;
    border-radius:5px;
}
div.constant-inner {
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    height:300px;
    width:300px;
    border:1px solid rgba(255, 255, 255, 0.562);
    border-radius:5px;
    z-index:500;
    background:rgba(255, 255, 255, 0.801);
    &.fullscreen {
        position:fixed;
        top:0;
        left:0;
        height:100vh;
        width:100vw;
        transform:translate(0,0);
        &.centered {
            display:flex;
            flex-direction:column;
            justify-content: center;
            align-items:center;
        }
    }
    overflow:scroll;
    z-index:1000;
}
div.constant-container {
    width:fit-content;
    height:fit-content;
    position:relative;
    div.column-controls, div.row-controls {
        position:absolute;
        display:flex;
        align-items: center;
        justify-content: center;
        border-radius:5px;
        background:#fff;
        overflow:hidden;
        box-shadow: 0px 0px 15px -5px #000000;
    }
    div.column-controls {
        top:50%;right:0;
        transform:translate(calc(100% + 10px), -50%);
        flex-direction: column;
        .control:first-child {
            border-bottom:1px solid rgb(177, 177, 177);
        }
    }
    div.row-controls {
        bottom:0;left:50%;
        transform:translate(-50%, calc(100% + 10px));
        flex-direction:row;
        .control:first-child {
            border-right:1px solid rgb(177, 177, 177);
        }
    }
    div.control {
        height:30px;width:30px;
        background:#fff;
        cursor:pointer;
        display:flex;align-items:center;
        justify-content: center;
        transition:background .1s ease-in-out;
        &:hover {
            background:rgb(221, 221, 221);
        }
        img {
            width:15px;
        }
    }
}
div.expand {
    position:absolute;
    bottom:0;right:0;
    margin:10px;
    border-radius: 10px;
    background:#fff;
    display:flex;flex-direction: column;align-items: center;
    box-shadow: 0px 0px 15px -5px #000000;
    justify-content: center;
    z-index:1001;
    &.collapse {
        position:fixed;
    }

    .view-control {
        height:40px;width:40px;
        border-radius:5px;
        display:flex;flex-direction: column;align-items: center;
        justify-content: center;
        cursor:pointer;
        transition:opacity .1s ease-in-out;
        &:hover {opacity:0.5}
        img {
            width:30px;
        }
    }

}
</style>

<div class="constant-outer"
    on:click={stopProp}>
    <div 
        class="constant-inner {fullscreen ? "fullscreen" : ""} {centered ? "centered" : ""}">
        <div class="constant-container">
            <Constant 
                data={data}
                bind:this={constant}/>
            {#if fullscreen}
                <div class="column-controls">
                    <div class="control" on:click={addColumn}>
                        <img src="./plus.png" alt="add column">
                    </div>
                    <div class="control" on:click={removeColumn}>
                        <img src="./subtract.png" alt="remove column">
                    </div>
                </div>
                <div class="row-controls">
                    <div class="control" on:click={addRow}>
                        <img src="./plus.png" alt="add column">
                    </div>
                    <div class="control" on:click={removeRow}>
                        <img src="./subtract.png" alt="remove column">
                    </div>
                </div>
            {/if}
        </div>
    </div>
    <div class="view-controls expand {fullscreen ? 'collapse' : ''}">
        {#if fullscreen}
            <div
                on:click={toggleCentered} 
                class="view-control">
                <img src={centered ? "./upleft.png" : "./downright.png"} alt="center/static">
            </div>
        {/if}
        <div
            on:click={toggleFullscreen} 
            class="view-control">
            <img src={fullscreen ? "./collapse.png" : "./expand.png"} alt="toggle fullscreen">
        </div>
    </div>
</div>
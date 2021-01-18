<script>
import { afterUpdate } from "svelte";

export let data = [];

let shouldResize = false;

let canDrag = false;
let shouldDrag = false;
let activeCol;
let left;

function handleClick(e) {
    e.stopPropagation();
}

function handleHover(e, i) {
    if(shouldDrag) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const x = e.clientX - rect.left;
    if((width - x) <= 5) {
        canDrag = true;
        document.getElementsByTagName("th")[i].children[0].style.cursor = "col-resize";
        activeCol = i;
        left = rect.left;
    } else {
        canDrag = false;
        document.getElementsByTagName("th")[i].children[0].style.cursor = "text";
    }
}

function handleMouseDown(e) {
    shouldDrag = true;
}

function handleMouseUp(e) {
    shouldDrag = false;
}

function addNewRow() {
    let row = document.getElementsByTagName("tr")[0].children;
    for(let i = 0; i < row.length; i++) {
        setWidths(i, row[i].children[0].clientWidth);
    }
}

export function resize() {
    shouldResize = true;
}

afterUpdate(() => {
    if(!shouldResize) return;
    console.log(data);
    addNewRow();
    shouldResize = false;
});

function setWidths(col, width) {
    let rows = document.getElementsByTagName("tr");
    for(let i = 0; i < rows.length; i++) {
        let c = rows[i].children[col].children[0];
        c.style.width = width + "px";
    }
}

function handleMouseMove(e) {
    if(canDrag && shouldDrag) {
        let width = e.clientX - left;
        setWidths(activeCol, width);
    }
}

</script>

<style type="text/scss">
    table {
        border-collapse:collapse;
        table-layout: fixed;
        box-shadow: 0px 3px 15px -3px #898989;
    }
    th, td {
        border: 1px solid rgb(185, 185, 185);
        margin:0;
        padding:0;
        &:focus-within {
            border: 1px solid rgb(71, 104, 255);
            z-index:2000;
        }
    }
    th { 
        font-weight: bold;
        border-bottom:1px solid rgb(34, 34, 34);
    }
    input {
        min-height:30px;
        height:30px;
        width:100px;
        line-height:100%;
        margin:0;
        border:none;
        outline:none;
        font-size:14px;
    }
</style>

<table 
    on:click={handleClick}
    on:mousedown={handleMouseDown}
    on:mouseup={handleMouseUp}
    on:mousemove={handleMouseMove}>
    <tr>
        {#each data[0] as h, i}
            <th 
                on:mousemove={(e) => handleHover(e, i)}>
                <input type="text">
            </th>
        {/each}
    </tr>
    {#each data as row, i}
        <tr>
            {#each row as col, j}
                <td>
                    <input 
                        type="text" 
                        bind:value={data[i][j]}>
                </td>
            {/each}
        </tr>
    {/each}
</table>
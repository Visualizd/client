<script>
    export let items = [];
    export let selected = 0;

    let showItems = false;
    
    let maxHeight = (35 * items.length) + "px";

    function toggleShowItems(e) {
        showItems = !showItems;
        e.stopPropagation();
    }

    function dropdownSelect(item) {
        selected = item;
    }

</script>

<style type="text/scss">

@keyframes dropdown-expand {
    0% {
        max-height:0;
    }
    100% {
        max-height: var(--max-height);
    }
}

div.dropdown-outer {
    position:relative;
    height:35px;
    border:1px solid rgb(185, 185, 185);
    border-radius:5px;
    margin:15px;
    padding:10px;
    display:flex;
    flex-direction:row;
    align-items:center;
    font-family:'Montserrat', sans-serif;
    justify-content:space-between;
    cursor:pointer;
    z-index:200;
    img {
        width:20px;
    }
    div.dropdown-items {
        position:absolute;
        width:calc(100% - 2px);
        top:calc(100% + 5px);
        left:0;
        display:flex;
        flex-direction: column;
        align-items:stretch;
        border:1px solid rgb(185, 185, 185);
        border-radius:5px;
        background:#fff;
        animation:dropdown-expand .1s ease-in-out 1;
        overflow:hidden;
        z-index:auto;
        div.dropdown-item {
            height:35px;
            line-height:35px;
            text-align:left;
            padding:10px;
            font-size:18px;
            border-bottom:1px solid rgb(185, 185, 185);
            &:last-child {
                border-bottom:none;
            }
        }
    }
}

</style>

<div
    on:click={toggleShowItems}
    class="dropdown-outer">
    <div class="dropdown-value">
        <div class="selected-value">{items.length > 0 ? items[selected] : "No Items"}</div>
    </div>
    <img src="./down.png" alt="dropdown"/>
    {#if showItems && items.length > 0}
        <div class="dropdown-items" style="--max-height: {maxHeight}">
            {#each items as item, i}
            <div 
                class="dropdown-item"
                on:click={() => dropdownSelect(i)}>{item}</div>
            {/each}
        </div>
    {/if}
</div>

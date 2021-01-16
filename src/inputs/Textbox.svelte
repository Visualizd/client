<script>
    export let value = "";
    function handleInputClick(e) {
        e.stopPropagation();
    }
</script>

<style type="text/scss">
div.textinput-outer {
    position:relative;
    height:35px;
    margin:15px;
    display:flex;
    flex-direction:row;
    align-items:center;
    font-family:'Montserrat', sans-serif;
    justify-content:space-between;
    cursor:pointer;
    input {
        margin:0;
        width:100%;
        padding:10px;
        border:1px solid rgb(158, 158, 158);
        outline:none;
        border-radius:5px;
    }
}
</style>


<div class="textinput-outer">
    <input 
        on:click={handleInputClick}
        bind:value={value}
        placeholder="Text input..."
        type="text">
</div>

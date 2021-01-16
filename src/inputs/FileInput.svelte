<script>
    function handleFileClick(e) {
        e.stopPropagation();
    }
</script>

<style type="text/scss">
div.fileinput-outer {
    position:relative;
    height:35px;
    margin:15px;
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

<div class="fileinput-outer">
    <label for="fileinput">
    </label>
    <input on:click={handleFileClick} type="file">
</div>

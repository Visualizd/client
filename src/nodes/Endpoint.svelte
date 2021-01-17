<script lang="ts">

import {EndpointType} from './IEndpoint';

export let endpoint = {
    name: "",
    value: "",
    type: EndpointType.I,
    isConstant: false
}

let typeClass = endpoint.type === EndpointType.I ? "input" : "output";

function handleClick(e) {
    e.stopPropagation();
}

let focused = endpoint.value !== "";

function handleFocus() {
    focused = true;
}

function handleBlur() {
    if(endpoint.value !== "") return;
    focused = false;
}

$: labelClass = `endpoint-name ${focused ? "name-active" : ""}`;
$: inputClass = `endpoint-input ${focused ? "input-active" : ""}`;

</script>

<style type="text/scss">
div.endpoint-outer {
    position:relative;
    height:15px;
    width:15px;
    z-index:1;
}

div.endpoint-label {
    position:absolute;
    top:50%;
    white-space:nowrap;
    height:30px;
    line-height:30px;
    font-size:16px;
    padding:20px;
    font-family: 'Montserrat', sans-serif;
    .output & {
        right:0;
        text-align:left;
        transform:translate(100%, -50%);
    }
    .input & {
        left:0;
        text-align:right;
        transform:translate(-100%, -50%);
    }
}

div.endpoint-label-outer {
    position:absolute;
    height:40px;
    top:50%; left:0;
    transform:translate(calc(-100% - 10px), -50%);
    div.endpoint-label-inner {
        position:relative;
        margin:0;
        width:100px;
        height:40px;
        input.endpoint-input, div.endpoint-name {
            position:absolute;
            top:0;
            right:0;
            height:40px;
            line-height:40px;
            padding:0 10px;
            font-size:16px;
            font-family: 'Montserrat', sans-serif;
            width:100px;
        }
        input.endpoint-input {
            border:1px solid #fff;
            outline:none;
            transition:all .1s ease-in-out;
            background:none;
            border-radius:5px;
            z-index:100;
            &.input-active {
                border: 1px solid rgb(121, 121, 121);
            } 
        }
        input.endpoint-input:hover{
            outline:none;
            border:1px solid rgb(121, 121, 121);
        }
        div.endpoint-name {
            z-index:10;
            background-color:#fff;
            text-align:right;
            transition:all .2s ease-in-out;
            &.name-active {
                transform:translate(calc(-100% + 20px), 0);
                background:none;
            }
        }
    }
}

div.endpoint-bubble {
    position:absolute;
    top:50%;left:50%;
    transform:translate(-50%,-50%);
    height:15px;
    width:15px;
    border-radius: 50%;
    border:1px solid rgb(145, 145, 145);
    background:#fff;
    cursor:pointer;
    transition:border .1s ease-in-out;
}

div.endpoint-bubble:hover {
    border:1.5px solid rgb(40, 50, 201);
}

</style>

<div class="endpoint-outer {typeClass}" on:click={handleClick}>

    {#if endpoint.isConstant}

        <div class="endpoint-label-outer">
            <div class="endpoint-label-inner">
                <div class={labelClass}>{endpoint.name}</div>
                <input 
                    type="text" 
                    bind:value={endpoint.value}
                    on:focus={handleFocus} 
                    on:blur={handleBlur}
                    class={inputClass}>
            </div>
        </div>
    {:else}
        <div class="endpoint-label">
            {endpoint.name}
        </div>
    {/if}

    <div class="endpoint-bubble">
    </div>

</div>

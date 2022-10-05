<script>
export let showmodal;
import { fade } from 'svelte/transition'
</script>

{#if showmodal}
<div in:fade out:fade on:click|self class="back-drop">
    <div class="mainModal">
        <slot></slot>
    </div>
</div>
{/if}

<style>
    .back-drop{
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
    }

    .mainModal{
        padding: 10px;
        border-radius: 10px;
        max-width: 400px;
        margin: 10% auto;
        background: white;
    }
</style>
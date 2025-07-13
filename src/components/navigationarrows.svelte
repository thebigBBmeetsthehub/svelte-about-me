<script>
    export let direction; 
    export let text;
    export let onClick;

    let iconPath;
    let arrowClass;
    let textClass;

    $: if (direction === 'left') {
        iconPath = "M10 19l-7-7m0 0l7-7m-7 7h18";
        arrowClass = "transform -rotate-180";
        textClass = "order-2 ml-3"; 
    } else {
        iconPath = "M14 5l7 7m0 0l-7 7m7-7H3";
        arrowClass = "";
        textClass = "order-1 mr-3"; 
    }
</script>

<button class="flex items-center text-blue-600 hover:text-blue-800 transition-colors group" on:click={onClick}>
    {#if direction === 'left'}
        <svg class="w-8 h-8 md:w-10 md:h-10 transform {arrowClass} transition-transform duration-200 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="{iconPath}"></path></svg>
        <span class="text-xl md:text-2xl font-medium {textClass} transition-colors duration-200 group-hover:underline">{text}</span>
    {:else}
        <span class="text-xl md:text-2xl font-medium {textClass} transition-colors duration-200 group-hover:underline">{text}</span>
        <svg class="w-8 h-8 md:w-10 md:h-10 transform {arrowClass} transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="{iconPath}"></path></svg>
    {/if}
</button>

<script>
    import { fly } from 'svelte/transition';
    export let text;
</script>

<h1 class="text-6xl md:text-8xl font-extrabold text-center text-blue-700 absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
    in:fly={{ y: -200, duration: 1000, delay: 500 }}
    out:fly={{ y: -200, duration: 500 }}>
    {text}
</h1>
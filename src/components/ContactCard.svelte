<script>
    import { fly, fade } from 'svelte/transition';
    export let onClose;
</script>

<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
     role="dialog"        aria-modal="true"    tabindex="-1"        on:click|self={onClose}
     on:keydown={(e) => {
         if (e.key === 'Escape') {
             onClose();
         }
     }}
     in:fade={{ duration: 300 }}
     out:fade={{ duration: 300 }}>
    <div class="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full text-center"
         in:fly={{ y: -100, duration: 500 }}
         out:fly={{ y: -100, duration: 300 }}>
        <h2 class="text-2xl font-bold mb-4 text-blue-700">Contact Briar</h2>
        <p class="mb-2">Email: <a href="mailto:briarlynnbryant@gmail.com" class="text-blue-600 hover:underline">briarlynnbryant@gmail.com</a></p>
        <p class="mb-2">Roblox: WsgBriar</p>
        <p class="mb-4">LinkedIn: <a href="www.linkedin.com/in/briar-bryant" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">linkedin.com/in/briar</a></p>
        <button class="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" on:click={onClose}>
            Close
        </button>
    </div>
</div>
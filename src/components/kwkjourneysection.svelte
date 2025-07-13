<script>
    import { fly, fade } from 'svelte/transition';
    import TitleHeader from './TitleHeader.svelte';

    export let onNavigate;

    let showContent = false;

    function handleScroll(node) {
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    showContent = true;
                } else {
                    showContent = false;
                }
            });
        }, options);

        observer.observe(node);

        return {
            destroy() {
                observer.unobserve(node);
            }
        };
    }
</script>

<section class="min-h-screen flex flex-col items-center justify-start p-4 relative">
    <TitleHeader text="MY KWK JOURNEY" />

    <div use:handleScroll class="mt-32 w-full max-w-3xl px-4 text-center">
        {#if showContent}
            <p class="text-lg md:text-xl leading-relaxed text-gray-700"
               in:fade={{ duration: 800, delay: 200 }}>
               I did the Kode With Klossy mobile development camp in Los Angeles. In this camp, I was able to create the mobile app called ProTasker with two other wonderful scholars. I also participated in the Deloitte X Kode With Klossy sustainability challenge and was a finalist. Kode with Klossy has helped me so much by motivating me to learn more about code and meeting with some really good people. I hope to be able to participate in more Kode with Klossy events in the near future!
            </p>

            <button class="mt-20 px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition-colors transform hover:scale-105"
                    on:click={() => onNavigate('about')}
                    in:fly={{ y: 50, duration: 600, delay: 400 }}>
                Back to About Me
            </button>
        {/if}
    </div>
</section>

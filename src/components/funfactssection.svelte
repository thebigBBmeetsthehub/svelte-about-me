<script>
    import { fly, fade } from 'svelte/transition';
    import TitleHeader from './TitleHeader.svelte';
    import NavigationArrows from './NavigationArrows.svelte';

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

    const funFacts = [
        "I have 8 cats.",
        "I dont like airplanes.",
        "I can hold a handstand for 30 seconds.",
        "I know 7 coding languages.",
        "I am a d1 chatgpt user (but never for coding ;]).",
        "I have a full ride scholarhsip to go to college.",
        "I have a twin sister."
    ];
</script>

<section class="min-h-screen flex flex-col items-center justify-start p-4 relative">
    <TitleHeader text="FUN FACTS" />

    <div use:handleScroll class="mt-32 w-full max-w-3xl px-4">
        {#if showContent}
            <ul class="list-disc list-inside text-lg md:text-xl text-gray-700 space-y-4"
                in:fade={{ duration: 800, delay: 200 }}>
                {#each funFacts as fact (fact)}
                    <li class="pl-2 relative">
                        <span class="absolute left-0 top-0 text-blue-600"></span> 
                        {fact}
                    </li>
                {/each}
            </ul>
        {/if}
    </div>

    {#if showContent}
        <div class="mt-20 flex justify-between w-full max-w-3xl px-4" in:fade={{ duration: 500, delay: 200 }}>
            <NavigationArrows
                direction="left"
                text="Hobbies"
                onClick={() => onNavigate('hobbies')}
            />
            <NavigationArrows
                direction="right"
                text="My KWK Journey"
                onClick={() => onNavigate('kwk')}
            />
        </div>
    {/if}
</section>

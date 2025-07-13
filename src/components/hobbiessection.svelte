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

    // Placeholder hobby data
    const hobbies = [
        { name: "Coding (DUH!)", description: "I love, coding, mobile apps, learning, new coding, languages, and working on projects that can make a difference in the world."},
        { name: "Vlogging for my Youtube channel", description: "I love being able to document my life and seeing how much I have grown over the past two years.", image: "/src/assets/briarYTchannel.png" },
        { name: "Reading", description: "I have always loved reading ever since I was young! I especially love reading romance and fiction books.", image: "/src/assets/monsterbook.jpg" },
        { name: "Picking up my hobbies", description: "From starting my own Etsy shop to painting nails during quarantine to even designing my own Roblox clothes, if picking up hobbies was an Olympic sport I would be a full-time Olympic gold medalist.", image: "/src/assets/etsystuff.png" }
    ];
</script>

<section class="min-h-screen flex flex-col items-center justify-start p-4 relative">
    <TitleHeader text="MY HOBBIES" />

    <div use:handleScroll class="mt-32 w-full max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#if showContent}
            {#each hobbies as hobby (hobby.name)}
                <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                     in:fly={{ y: 50, duration: 600, delay: 100 * Math.random() * 5 }}>
                    <img src={hobby.image} alt={hobby.name} class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2 text-blue-700">{hobby.name}</h3>
                        <p class="text-gray-700">{hobby.description}</p>
                    </div>
                </div>
            {/each}
        {/if}
    </div>

    {#if showContent}
        <div class="mt-20 flex justify-between w-full max-w-3xl px-4" in:fade={{ duration: 500, delay: 200 }}>
            <NavigationArrows
                direction="left"
                text="My Bio"
                onClick={() => onNavigate('bio')}
            />
            <NavigationArrows
                direction="right"
                text="Fun Facts"
                onClick={() => onNavigate('funfacts')}
            />
        </div>
    {/if}
</section>

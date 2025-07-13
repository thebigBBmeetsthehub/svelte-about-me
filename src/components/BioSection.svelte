<script>
    import { fly, fade } from 'svelte/transition';
    import TitleHeader from './TitleHeader.svelte';
    import NavigationArrows from './NavigationArrows.svelte';

    export let onNavigate;
    export let onContactClick;

    let showDetailedBio = false;
    let showNavigationArrows = false;

    $: if (showDetailedBio) {
        setTimeout(() => showNavigationArrows = true, 500); 
    }

    function handleBioScroll(node) {
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    showDetailedBio = true;
                } else {
                    showDetailedBio = false;
                    showNavigationArrows = false;
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
    <TitleHeader text="BRIAR'S BIO" />

    <div use:handleBioScroll class="mt-32 w-full max-w-5xl flex flex-col md:flex-row items-start md:items-center px-4">
        {#if showDetailedBio}
            <div class="relative md:w-1/3 flex justify-center md:justify-start pr-0 md:pr-8">
                <div class="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg"
                     in:fade={{ duration: 800, delay: 200 }}>
                    <img src="/assets/seniorPhoto.JPG" alt="Briar's Profile" class="w-full h-full object-cover">
                </div>
            </div>
            <div class="md:w-2/3 text-center md:text-left mt-8 md:mt-0"
                 in:fade={{ duration: 800, delay: 400 }}>
                <p class="text-lg md:text-xl leading-relaxed text-gray-700">
                    I am an incoming computer science major at Bucknell University in Lewisburg, PA. My coding knowledge primarily revolves around mobile app, game, and web devlopment. I am proficient in Java, Swift, HTML, Python, and more.
                    <br><br>
                    This summer on top of being apart of the Data Storytelling cohort, I am a Bank of America Student Leader, Devlopment Intern at AbilityFirst, working @ McDonald's, completing my Girl Scout Gold Award, and starting my own Etsy shop.
                    <br><br>
                    I have created three IOS mobile applications (one is in the final publishing stages). I love volunteering and helping people. If you want to learn more about my projects or want to run a quick Dress to Impress round, please reach out!
                </p>
            </div>
            <div class="absolute right-4 top-4"> <button class="w-28 h-16 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full flex items-center justify-center shadow-lg transition-colors"
                on:click={onContactClick}
                in:fly={{ x: 200, duration: 600, delay: 600 }}>
                    Contact
                </button>
            </div>
        {/if}
    </div>

    {#if showNavigationArrows}
        <div class="mt-20 flex justify-between w-full max-w-3xl px-4" in:fade={{ duration: 500, delay: 200 }}>
            <NavigationArrows
                direction="left"
                text="About Me"
                onClick={() => onNavigate('about')}
            />
            <NavigationArrows
                direction="right"
                text="Hobbies"
                onClick={() => onNavigate('hobbies')}
            />
        </div>
    {/if}
</section>
<script>
    import { onMount } from 'svelte'; 
    import { fly } from 'svelte/transition';
    import BioSection from './components/BioSection.svelte';
    import HobbiesSection from './components/HobbiesSection.svelte';
    import FunFactsSection from './components/FunFactsSection.svelte';
    import KWKJourneySection from './components/KWKJourneySection.svelte';
    import TitleHeader from './components/TitleHeader.svelte';
    import ContactCard from './components/ContactCard.svelte';

    let currentSection = 'about'; 
    let showBioImage = false;
    let showContactCard = false;

    function handleScroll(node) {
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    showBioImage = true;
                } else {
                    showBioImage = false; 
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

    // Function to scroll to the top when navigating between sections
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Handlers for navigation
    function navigateTo(section) {
        currentSection = section;
        scrollToTop();
    }
</script>

<svelte:head>
    <title>Briar's Portfolio</title>
</svelte:head>

<main class="relative min-h-screen overflow-x-hidden">
    {#if currentSection === 'about'}
        <section class="min-h-screen flex flex-col justify-center items-center p-4 relative">
            <TitleHeader text="ABOUT ME" />

            <div class="mt-20 flex flex-col md:flex-row items-center justify-center w-full max-w-4xl px-4">
                <div use:handleScroll class="relative md:w-1/2 flex justify-center md:justify-end pr-0 md:pr-8">
                  {#if showBioImage}
                  <button type="button"
                          class="w-100 h-100 md:w-110 md:h-110 overflow-hidden shadow-xl cursor-pointer"
                          on:click={() => navigateTo('bio')}
                          in:fly={{ y: 200, duration: 800, delay: 300 }}
                          out:fly={{ y: 200, duration: 300 }}>
                      <img src="seniorPhoto.JPG" alt="Briar's Profile" class="w-full h-full object-cover">
                  </button>
                  {/if}
                </div>
                <div class="md:w-1/2 text-center md:text-left mt-8 md:mt-0 flex flex-col items-center md:items-start justify-center">
                    <p class="text-3xl md:text-4xl font-semibold mb-4">
                        Hi! I am Briar.
                    </p>
                    <button class="flex items-center text-xl text-blue-600 hover:text-blue-800 transition-colors"
                            on:click={() => navigateTo('bio')}>
                        Click here to learn more about me!
                        <svg class="w-6 h-6 ml-2 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                </div>
            </div>
        </section>
    {/if}

    {#if currentSection === 'bio'}
        <BioSection onNavigate={navigateTo} onContactClick={() => showContactCard = true} />
    {/if}

    {#if currentSection === 'hobbies'}
        <HobbiesSection onNavigate={navigateTo} />
    {/if}

    {#if currentSection === 'funfacts'}
        <FunFactsSection onNavigate={navigateTo} />
    {/if}

    {#if currentSection === 'kwk'}
        <KWKJourneySection onNavigate={navigateTo} />
    {/if}

    {#if showContactCard}
        <ContactCard onClose={() => showContactCard = false} />
    {/if}
</main>

<style lang="postcss">
    :global(body) {
        @apply font-sans bg-gray-50 text-gray-800;
    }
</style>

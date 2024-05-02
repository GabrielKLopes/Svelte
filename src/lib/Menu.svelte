<script>
	import { page } from "$app/stores";
import Logo from "./Logo.svelte";
    const items = [
        {
            href: '/', label: 'Inicio'
        },
        {
            href: '/sobre', label: 'sobre'
        },
        {
            href: '/portifolio', label: 'Portifólio'
        },
        {
            href: '/contato', label: 'Contato'
        },
        {
            href: '/faq', label: 'Perguntas Frequentes'
        }
    ]

   
</script>
<div class="container flex items-start justify-start">
    <a href="/"><Logo/></a>

</div>

{#each items as  {href, label} }
    {#if $page.url.pathname === href}
    <a {href }class="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">{label}</a>
    {:else}
<a {href} class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">{label}</a>
    {/if}
{/each}




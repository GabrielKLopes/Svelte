<script lang="ts">
	export let data;
	let currentCategory = 'Todos';
    let portfolioItems = data.items
    function chanceCategory(newCategory: string){
        currentCategory = newCategory;
        filterPortfolio();

    }
    function filterPortfolio(){
        portfolioItems = data.items.filter(item => {
            return  item.category === currentCategory || currentCategory === 'Todos';
        })
    }
</script>

<section class="bg-white dark:bg-gray-900">
	<div class="container mx-auto px-6">
		<div
			class="mt-4 flex overflow-x-auto overflow-y-hidden py-4 md:justify-center dark:border-gray-700"
		>
			{#each data.categorys as category}
				{#if currentCategory === category}
					<button
                    
						class="-mb-px h-12 whitespace-nowrap border-b-2 border-blue-500 bg-transparent px-8 py-2 text-center text-sm text-blue-600 focus:outline-none sm:text-base dark:border-blue-400 dark:text-blue-300"
					>
						{category}
					</button>
				{:else}
					<button
                        on:click={() =>(chanceCategory(category))}
						class="cursor-base -mb-px h-12 whitespace-nowrap border-b-2 border-gray-200 bg-transparent px-8 py-2 text-center text-sm text-gray-700 hover:border-gray-400 focus:outline-none sm:text-base dark:border-gray-700 dark:text-white dark:hover:border-gray-400"
					>
					    {category}
					</button>
				{/if}
			{/each}
		</div>

		<section class="mt-8 space-y-8 lg:mt-12">
			{#each portfolioItems as { title, category, image, slug }}
				<section class="lg:flex lg:items-center">
					<div class="lg:w-1/2">
						<p class="text-lg uppercase tracking-wider text-blue-500 dark:text-blue-400">
							{category}
						</p>
						<h2 class="mt-2 text-2xl font-semibold capitalize text-gray-800 dark:text-white">
							{title}
						</h2>
					</div>
                    <a href={`/portifolio/${slug}`}>
                        <div class="mt-4 lg:mt-0 lg:w-1/2">
                            <img class="h-64 w-full rounded-lg object-cover md:h-96" src={image} alt="" />
                        </div>
                    </a>
					
				</section>
			{/each}
		</section>
	</div>
</section>

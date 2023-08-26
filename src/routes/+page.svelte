<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Naubay</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{data.products.length} products are {data.state}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>

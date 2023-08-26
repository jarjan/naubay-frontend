<script lang="ts">
	import Counter from './Counter.svelte';
	export let data;
</script>

<svelte:head>
	<title>Naubay</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{data.content}
	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>

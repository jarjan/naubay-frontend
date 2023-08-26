<script>
	import Counter from './Counter.svelte';
</script>

<svelte:head>
	<title>Naubay</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		Naubay
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

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

<script lang="ts">
	import Counter from './Counter.svelte';

	fetch('https://naubay.onrender.com/')
		// .then((res) => res.json())
		.then((res) => res.text())
		.then(console.log);
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

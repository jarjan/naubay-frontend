<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>Entwickelt mit <span class="heart">❤️</span> in Berlin.</p>
	</footer>
</div>

<style>
	@keyframes pump {
		0% {
			transform: scale(0.9);
		}
		20% {
			transform: scale(1);
		}
		40% {
			transform: scale(0.9);
		}
		60% {
			transform: scale(1);
		}
		80% {
			transform: scale(0.9);
		}
		100% {
			transform: scale(0.9);
		}
	}

	.heart {
		display: inline-block;
		animation: pump 1s infinite;
	}

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: #fff;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
		overflow-x: hidden;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (max-width: 600px) {
		main {
			padding: 0.5rem;
		}
	}
</style>

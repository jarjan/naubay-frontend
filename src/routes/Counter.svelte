<script lang="ts">
  import { createEventDispatcher } from 'svelte';
	import { spring } from 'svelte/motion';

	const dispatch = createEventDispatcher();

	export let count = 0;

	const displayed_count = spring();
	$: displayed_count.set(count);
	$: offset = modulo($displayed_count, 1);

	function modulo(n: number, m: number) {
		// handle negative numbers
		return ((n % m) + m) % m;
	}

	function handleClick(name: 'increment' | 'decrement') {
		if(name === 'increment') {
			count += 1;
		} else {
			if(count > 0)
			count -= 1;
		}
		dispatch('update', String(count));
	}
</script>

<div class="counter">
	<button on:click={() => handleClick('decrement')} aria-label="Decrease the counter by one">
		-
	</button>

	<div class="counter-viewport">
		<div class="counter-digits" style="transform: translate(0, {100 * offset}%)">
			<strong class="hidden" aria-hidden="true">{Math.floor($displayed_count + 1)}</strong>
			<strong>{Math.floor($displayed_count)}</strong>
		</div>
	</div>

	<button on:click={() => handleClick('increment')} aria-label="Increase the counter by one">
		+
	</button>
</div>

<style>
	.counter {
		display: flex;
		justify-content: space-evenly;
	}

	.counter button {
		width: 1em;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		touch-action: manipulation;
		font-size: 1rem;
	}

	.counter-viewport {
		width: 2em;
		height: 2em;
		overflow: hidden;
		text-align: center;
		position: relative;
	}

	.counter-viewport strong {
		position: absolute;
		display: flex;
		width: 100%;
		height: 100%;
		font-weight: 400;
		color: var(--color-theme-1);
		font-size: 1rem;
		align-items: center;
		justify-content: center;
	}

	.counter-digits {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.hidden {
		top: -100%;
		user-select: none;
	}
</style>

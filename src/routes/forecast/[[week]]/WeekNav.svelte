<script lang="ts">
  import { page } from '$app/stores';
  const weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  $: currentWeek = $page.params.week || weekDays[(new Date().getDay()+6)%7];
</script>

<div>
  <h1>Week Details</h1>
  <div class="weeks">
    <ul>
      {#each weekDays as day}
        <li aria-current={currentWeek === day ? 'date' : undefined}>
          <a href={`/forecast/${day}`}>{day.toLocaleUpperCase()}</a>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .weeks {
		display: flex;
		justify-content: center;
		--background: #012533;
	}

  ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		width: initial;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='date']::before {
		--size: 6px;
		content: '';
		width: 100%;
		height: 4px;
		position: absolute;
		top: 0;
		left: 0;
		background-color: var(--color-theme-2);
	}

	.weeks a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: #ffffff;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-2);
	}
</style>
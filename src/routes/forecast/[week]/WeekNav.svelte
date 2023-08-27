<script lang="ts">
  import { page } from '$app/stores';
  import { currentWeekday, weekdays } from '$lib/store/weekdays';
  $: currentWeek = $page.params.week || currentWeekday();
</script>

<div>
  <h1>Wochendetails</h1>
  <div class="weeks">
    <ul>
      {#each Object.entries(weekdays) as [weekkey, weekday]}
        <li aria-current={currentWeek === weekkey ? 'date' : undefined}>
          <a href={`/forecast/${weekkey}`}>{weekday.de.toLocaleUpperCase()}</a>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .weeks {
		display: flex;
		justify-content: center;
	}

  .weeks ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: 20px;
    padding: 0;
    text-align: center;
  }

	.weeks li a {
		font-size: 1rem;
    background-color: #ffffff;
    border-color: #ffffff;
    padding: 0.5rem 1rem;
	}

  .weeks li a:hover {
    border: none;
    text-decoration: none;
		color: var(--color-theme-2);
  }

	.weeks li[aria-current='date'] a {
    border-bottom: 2px solid;
		border-bottom-color: var(--color-theme-2);
	}
</style>
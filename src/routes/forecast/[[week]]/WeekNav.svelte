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

	li, li a {
		font-size: 1rem;
    background-color: #ffffff;
    border-color: #ffffff;
    padding: 0.5rem 1rem;
	}

  li a:hover {
    border: none;
    text-decoration: none;
  }

	li[aria-current='date'] a {
    border-bottom: 2px solid;
		border-bottom-color: var(--color-theme-2);
	}

	a:hover {
		color: var(--color-theme-2);
	}
</style>
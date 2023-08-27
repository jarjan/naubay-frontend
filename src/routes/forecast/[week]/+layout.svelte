<script lang="ts">
  import { Line } from "svelte-chartjs";
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
  } from 'chart.js';
  import Select from 'svelte-select';
  import forecastData from "$lib/data/forecast.json";
  import categories from "$lib/data/categories.json";
  import WeekNav from "./WeekNav.svelte";

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
  );

  ChartJS.defaults.font.family = "'JetBrains Mono Variable', 'sans-serif'";

  // categories category selection with all options
  const selectOptions = categories.map((category) => {
    return {
      label: category.name,
      value: category.id,
    };
  });

  let justValue = "0";
  $: forecastByCategory = forecastData[justValue];
</script>

<div class="forecast">
  <div class="forecast__filter">
    <Select items={selectOptions} placeholderAlwaysShow value="0" placeholder="Kategorie wählen" bind:justValue />
  </div>
  <Line data={forecastByCategory} options={{ responsive: true }} />
  <br/>
  <WeekNav />
  <slot />
</div>


<style>
.forecast__filter {
  text-align: right;
  margin: 20px;
}
</style>
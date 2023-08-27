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
  import forecastData from "$lib/data/forecast.json";
  import products from "$lib/data/products.json";
  import { page } from '$app/stores';
  import WeekNav from "./WeekNav.svelte";
  console.log('asdasd', $page.params.week);

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
</script>

<div class="forecast">
  <div class="forecast__filter">
    <select>
      <option>all</option>
      {#each products as product}
      <option>{product.name}</option>
      {/each}
    </select>
  </div>
  <Line data={forecastData} options={{ responsive: true }} />
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
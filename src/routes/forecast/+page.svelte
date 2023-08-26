<script lang="ts">
  import { Line } from "svelte-chartjs";
  import { data } from "./data";
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

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
  );
</script>

<div class="forecast">
  <div class="forecast__filter">
    <select>
      <option>all</option>
      <option>power bread</option>
      <option>plain bread</option>
      <option>jam</option>
      <option>ice coffe</option>
      <option>croissant</option>
      <option>ice coffe latter</option>
      <option>tiramisu croissant</option>
      <option>cacao deep</option>
      <option>pain au chocolat</option>
      <option>almond croissant</option>
      <option>ice milk tea</option>
      <option>gateau chocolat</option>
      <option>baguette</option>
      <option>cheese cake</option>
      <option>lemon ade</option>
      <option>orange pound</option>
      <option>wiener</option>
      <option>valina latte</option>
      <option>berry ade</option>
      <option>tiramisu</option>
      <option>merinque cookies</option>
    </select>
  </div>


  <Line {data} options={{ responsive: true }} />
</div>


<style>
.forecast__filter {
  text-align: right;
  margin: 20px;
}
</style>
<script lang="ts">
  import { page } from '$app/stores';
	import products from '$lib/data/products.json';
  // export let data;
  $: currentWeek = $page.params.week;
</script>

<table class="product__table" data-week={currentWeek}>
  <tr>
    <th></th>
    <th>Name</th>
    <th>Anzahl</th>
  </tr>
  {#each products as product}
  <tr>
    <td><img class="product__img" src="{product.image}" alt="{product.name}" /></td>
    <td><span class="product__name">{product.name}</span></td>
    <td>{Math.floor(Math.random()*100)+5}</td>
  </tr>
  {/each}
</table>

<style>
  .product__table {
	margin: auto;
	text-align: center;
	border-collapse: collapse;
}

.product__img {
	vertical-align: middle;
	height: 60px;
	transition: transform 0.2s ease-in-out;
}

.product__name {
	max-width: 150px;
	display: inline-block;
}

.product__img:hover {
	transform: scale(2.5);
}

.product__table tr {
	transition: background-color 0.2s ease-in-out;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.product__table tr:has(> :not(th)):hover {
	background-color: var(--color-bg-2);
}

.product__table td {
	padding: 10px;
}

@media (max-width: 600px) {
	.product__table td {
		padding: 0;
	}

	.product__table tr th:nth-child(5) {
		display: none;
	}

	.product__table tr {
		position: relative;
	}

	.product__table tr td:nth-child(4) {
		vertical-align: top;
	}

	.product__table tr td:nth-child(5) {
		position: absolute;
		bottom: 4px;
		right: 0;
		padding: 0;
	}
}
</style>
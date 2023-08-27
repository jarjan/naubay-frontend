<script lang="ts">
	import Counter from '../Counter.svelte';
  import db from '$lib/store/inventory'

  function handleUpdate(name: string, count: string) {
    db.set({[name]: Number(count)})
  }

  export let data;
</script>

<div class="inventory">
  <h1>Manage your inventory here</h1>

  <table class="product__table">
    <tr>
      <th></th>
      <th>category</th>
      <th>name</th>
      <th>price</th>
      <th>quantity</th>
    </tr>
    {#each data.products as product}
    <tr>
      <td><img class="product__img" src="{product.image}" alt="{product.name}" /></td>
      <td>{product.category}</td>
      <td><span class="product__name">{product.name}</span></td>
      <td>€{product.price}</td>
      <td>
        <Counter count={$db[product.name] || 0} on:update={(event) => handleUpdate(product.name, event.detail)} />
      </td>
    </tr>
    {/each}
  </table>
  <button class="inventory__submit" type="submit">Conclude the day</button>
</div>

<style>

  .inventory__submit {
    display: block;
    margin: 30px auto;
  }


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
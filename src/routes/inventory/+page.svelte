<script lang="ts">
	import Counter from '../Counter.svelte';

  export let data;
</script>

<div class="inventory">
  <table class="inventory__table">
    <tr>
      <th></th>
      <th>product name</th>
      <th>product price</th>
      <th>product quantity</th>
    </tr>
    {#each data.products as product}
    <tr>
      <td><img class="inventory__product_img" src="{product.image}" alt="{product.name}" /></td>
      <td>{product.name}</td>
      <td>€{product.price}</td>
      <td>
        <Counter on:update={(event) => console.log(`${product.name}: ${event.detail}`)} />
      </td>
    </tr>
    {/each}
  </table>
  <button class="inventory__submit" type="submit">Conclude the day</button>
</div>

<style>
  .inventory__table {
    margin: auto;
    text-align: center;
    border-collapse: collapse;
  }

  .inventory__submit {
    display: block;
    margin: 10px auto;
  }

  .inventory__product_img {
    height: 50px;
    /* position: absolute; */
  }
  .inventory__product_img:hover {
    transform: scale(3);
  }
  .inventory__table tr:has(> :not(th)):hover {
    background-color: var(--color-bg-2);
  }

  .inventory__table td {
    padding: 10px;
  }

  @media (max-width: 600px) {
    .inventory__table tr th:nth-child(4) {
      display: none;
    }
    .inventory__table tr {
      position: relative;
    }
    .inventory__table tr td {
      padding-bottom: 80px;
    }
    .inventory__table tr td:nth-child(4) {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 0;
    }
  }
</style>
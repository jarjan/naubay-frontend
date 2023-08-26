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
      <td><img src="{product.image}" alt="{product.name}" height="50px" /></td>
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
  }
  .inventory__submit {
    display: block;
    margin: 10px auto;
  }
</style>
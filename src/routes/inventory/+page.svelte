<script lang="ts">
	import Counter from '../Counter.svelte';
  import products from "$lib/data/products.json";
</script>

<div class="inventory">
  <table class="inventory__table">
    <tr>
      <th>product name</th>
      <th>product price</th>
    </tr>
    {#each products as product}
    <tr>
      <td>{product.name}</td>
      <td>€{(Math.random() * 20).toFixed(2)}</td>
    </tr>
    {/each}
  </table>
  <h1>Conclude the day:</h1>
  <form class="conclude__form">
    <!-- list of sold items for the day -->
    {#each products as product}
    <div class="conclude_item"><span class="conclude_item_name">{product.name.toUpperCase()}:</span><Counter /></div>
    {/each}
    
    <button class="conclude__button" type="submit">Conclude</button>
  </form>
</div>

<style>
  .inventory__table {
    margin: auto;
    text-align: center;
  }

  .conclude__form {
    display: flex;
    flex-direction: column;
    width: 800px;
    align-items: center;
    justify-content: center;
  }

  .conclude_item {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
  }

  .conclude_item_name {
    flex-grow: 1;
    font-size: 2rem;
    margin-right: 1rem;
    text-align: right;
  }
</style>
<script lang="ts">
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
</div>

<style>
  .inventory__table {
    margin: auto;
    text-align: center;
  }
</style>
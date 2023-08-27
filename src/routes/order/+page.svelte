<script lang="ts">
	import Counter from '../Counter.svelte';
  import db from '$lib/store/order'
	let isPaying = false;
	let selectedDay = 'monday';

  function handleUpdate(name: string, count: string, day: string) {
    const currentDB = $db;
    db.set({
			...currentDB,
			[day]: {
				...currentDB[day] || {},
				[name]: Number(count)
			}
		})
  }

	function handleSubmit() {
		isPaying = true;
	}

  export let data;
</script>

<svelte:head>
	<title>Bestellung</title>
	<meta name="description" content="Bestellung für eine Woche im Voraus" />
</svelte:head>

<div class="order {isPaying ? 'backdrop': ''}">
  <h1>Bestellung für eine Woche im Voraus</h1>

	<ul class='order__week'>
		<li><button class="{selectedDay == 'monday' ? 'selected' : ''}" on:click={() => selectedDay = 'monday'}>Montag</button></li>
		<li><button class="{selectedDay == 'tuesday' ? 'selected' : ''}" on:click={() => selectedDay = 'tuesday'}>Dienstag</button></li>
		<li><button class="{selectedDay == 'wednesday' ? 'selected' : ''}" on:click={() => selectedDay = 'wednesday'}>Mittwoch</button></li>
		<li><button class="{selectedDay == 'thursday' ? 'selected' : ''}" on:click={() => selectedDay = 'thursday'}>Donnerstag</button></li>
		<li><button class="{selectedDay == 'friday' ? 'selected' : ''}" on:click={() => selectedDay = 'friday'}>Freitag</button></li>
		<li><button class="{selectedDay == 'saturday' ? 'selected' : ''}" on:click={() => selectedDay = 'saturday'}>Samstag</button></li>
		<li><button class="{selectedDay == 'sunday' ? 'selected' : ''}" on:click={() => selectedDay = 'sunday'}>Sonntag</button></li>
	</ul>

  <table class="product__table">
    <tr>
      <th></th>
      <th>Kategorie</th>
      <th>Name</th>
      <th>Preis</th>
      <th>Anzahl</th>
    </tr>
    {#each data.products as product}
    <tr>
      <td><img class="product__img" src="{product.image}" alt="{product.name}" /></td>
      <td>{product.category}</td>
      <td><span class="product__name">{product.name}</span></td>
      <td>€{product.price}</td>
      <td>
        <Counter count={$db?.[selectedDay]?.[product.name] || 0} on:update={(event) => handleUpdate(product.name, event.detail, selectedDay)} />
      </td>
    </tr>
    {/each}
  </table>

  <button class="order__submit" type="submit" on:click={handleSubmit}>Bestellung abschicken</button>
</div>

<div class="order__payment {isPaying ? 'open' : 'close'}">
	<h1>Bezahlung</h1>
	<div></div>
</div>

<style>
.order {
	overflow: hidden;
	position: relative;
}

.order__week {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	list-style: none;
	margin: 20px 0;
	padding: 0;
	text-align: center;
}

.order__week::-webkit-scrollbar {
	display: none;
}

.order__week button {
	font-size: 1rem;
	background-color: #ffffff;
	border-color: #ffffff;
}
.order__week button.selected {
	border-bottom-color: var(--color-theme-2);
}
.order__submit {
	margin: 30px auto;
	display: block;
}

.order__payment {
	z-index: 123;
	position: fixed;
	top: 30px;
	bottom: 30px;
	left: 30px;
	right: 30px;
	min-width: 80%;
	background: var(--color-bg-1);
	border: 2px solid var(--color-theme-2);
	transition: all 0.2s ease-in-out;
	box-shadow: none;
}

.order__payment.close {
	transform: translateY(calc(100vh + 100px));
}
.order__payment.open {
	display: block;
	transform: translateY(0);
	box-shadow: 0 0 100px 100px rgb(255 255 255 / 85%);
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
	position: relative;
}

.product__name {
	max-width: 150px;
	display: inline-block;
}

.product__img:hover {
	transform: scale(2.5);
	z-index: 1;
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
	.order__week button{
		padding: 0.25rem 0.5rem
	}

	.product__table td {
		padding: 0;
	}

	.product__table tr td:nth-child(2),
	.product__table tr th:nth-child(2),
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
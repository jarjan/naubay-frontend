<script lang="ts">
	import Counter from '../Counter.svelte';
	import appleLogo from '$lib/images/apple-pay.svg';
	import googleLogo from '$lib/images/google-pay.svg';
	import paypalLogo from '$lib/images/paypal.svg';
  import db from '$lib/store/order'
	import products from '$lib/data/products.json';

	let isPaying = false;
	let hasPayed = false;
	let selectedDay = 'Montag';

  function handleUpdate( day: string, name: string, count: string, price?: string) {
    const currentDB = $db;
    db.set({
			...currentDB,
			[day]: {
				...currentDB[day] || {},
				[name]: {
					count: Number(count),
					price: Number(price),
					total: Number(count) * Number(price)
				}
			}
		})
  }

	function handleSubmit() {
		isPaying = true;
	}

  // export let data;
</script>

<svelte:head>
	<title>Bestellung</title>
	<meta name="description" content="Bestellung für eine Woche im Voraus" />
</svelte:head>

<div class="order {isPaying ? 'backdrop': ''}">
  <h1>Bestellung für eine Woche im Voraus</h1>

	<ul class='order__week'>
		<li><button class="{selectedDay == 'Montag' ? 'selected' : ''}" on:click={() => selectedDay = 'Montag'}>Montag</button></li>
		<li><button class="{selectedDay == 'Dienstag' ? 'selected' : ''}" on:click={() => selectedDay = 'Dienstag'}>Dienstag</button></li>
		<li><button class="{selectedDay == 'Mittwoch' ? 'selected' : ''}" on:click={() => selectedDay = 'Mittwoch'}>Mittwoch</button></li>
		<li><button class="{selectedDay == 'Donnerstag' ? 'selected' : ''}" on:click={() => selectedDay = 'Donnerstag'}>Donnerstag</button></li>
		<li><button class="{selectedDay == 'Freitag' ? 'selected' : ''}" on:click={() => selectedDay = 'Freitag'}>Freitag</button></li>
		<li><button class="{selectedDay == 'Samstag' ? 'selected' : ''}" on:click={() => selectedDay = 'Samstag'}>Samstag</button></li>
		<li><button class="{selectedDay == 'Sonntag' ? 'selected' : ''}" on:click={() => selectedDay = 'Sonntag'}>Sonntag</button></li>
	</ul>

  <table class="product__table">
    <tr>
      <th></th>
      <th>Kategorie</th>
      <th>Name</th>
      <th>Preis</th>
      <th>Anzahl</th>
    </tr>
    {#each products as product}
    <tr>
      <td><img class="product__img" src="{product.image}" alt="{product.name}" /></td>
      <td>{product.category}</td>
      <td><span class="product__name">{product.name}</span></td>
      <td>€{product.price}</td>
      <td>
        <Counter count={$db?.[selectedDay]?.[product.name]?.count || 0} on:update={(event) => handleUpdate(selectedDay, product.name, event.detail, products.find((p) => p.name === product.name)?.price)} />
      </td>
    </tr>
    {/each}
  </table>

  <button class="order__submit" type="submit" on:click={handleSubmit}>Bestellung abschicken</button>
</div>

<div class="order__payment {isPaying ? 'open' : 'close'}">
	<h1>Bezahlung</h1>

	<table class="order__table">
	{#each Object.keys($db) as day}
		<tr><th colspan="4">{day}</th></tr>
		{#each Object.keys($db[day]) as product}
			{#if $db[day][product].count > 0}
				<tr>
					<td>{product}</td>
					<td>€{$db[day][product].price}</td>
					<td>x{$db[day][product].count}</td>
					<td>€{$db[day][product].total.toFixed(2)}</td>
				</tr>
			{/if}
		{/each}
	{/each}
	<tr>
		<th colspan="4">Summe</th>
	</tr>
	<tr>
		<td colspan="4" style="text-align: right">
			€{Object.keys($db).reduce((acc, day) => {
				return acc + Object.keys($db[day]).reduce((acc, product) => {
					return acc + $db[day][product].total
				}, 0)
			}, 0).toFixed(2)}
		</td>
	</tr>
	</table>

	{#if hasPayed}
		<h2 style="text-align: center;">
			Danke für Ihre Bestellung!
		</h2>
	{/if}

	{#if !hasPayed}
	<div class="payment__types">
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<img on:click={() => {hasPayed = true}} class="payment__apple {/^((?!chrome|android).)*safari/i.test(navigator?.userAgent) ? '' : 'visually-hidden'}" src={appleLogo} alt="Apple Pay" />
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<img on:click={() => {hasPayed = true}} class="payment__google {navigator?.userAgent.indexOf("Chrome") != -1 ? '' : 'visually-hidden'}" src={googleLogo} alt="Google Pay" />
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<img on:click={() => {hasPayed = true}} class="payment__paypal" src={paypalLogo} alt="PayPal" />
	</div>
	{/if}
</div>

<style>
.order {
	overflow: hidden;
	position: relative;
}

.order__table {
	border-collapse: collapse;
	margin: 0 auto;
}
.order__table td,
.order__table th {
	padding: 4px;
	border: 1px solid var(--color-theme-1)
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
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: 30px;
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
.payment__types {
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.payment__apple {
	width: 100px;
	cursor: pointer;
}
.payment__google {
	width: 150px;
	cursor: pointer;
}
.payment__paypal {
	width: 100px;
	margin-top: 20px;
	cursor: pointer;
	border-radius: 10px;
	background-color: gold;
	padding: 10px;
	cursor: pointer;
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
	.order__payment {
		margin: 10px;
	}
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
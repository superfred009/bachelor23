<script>
	import './styles.css';
</script>
<script context="module">
	export const ssr = true;
</script>
<div class="app">

	<main>
		<slot />
	</main>

</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

</style>

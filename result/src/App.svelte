<script>
	import page from "page"
    import Home from "./pages/Home.svelte";
    import Result from "./pages/Result.svelte";

	let current;
	let urlparams;

	page('/', () => (current = Home))
	page('/result/:email/:registrationNo', (ctx,next) => {
		urlparams = ctx.params 
		next()
	},
	()=> (current = Result)
	)

	page.start()
	
</script>

<main>
	<svelte:component this={current} {urlparams}/>
</main>
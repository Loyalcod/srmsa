<script>
	import Header from "./components/Header.svelte";	
	import Footer from './components/Footer.svelte'
	import Modal from './components/Modal.svelte'
	import ModalForm from './components/ModalForm.svelte'

	let src = './images/result1.jpeg'

	let showmodal = false;

	const ToggoleModal = ()=>{
		showmodal = !showmodal

	}

</script>


<Header on:click={ToggoleModal} />
<Modal {showmodal} on:click={ToggoleModal}>
	<ModalForm />

</Modal>

<img src={src} alt="Result Checker Images">

<Footer />




<style>
	img{
		display: block;
		width: 100vw;
		height: 75vh;
		object-fit:cover;
	}
</style>
<script>
	import Header from "../components/Header.svelte";	
	import Footer from '../components/Footer.svelte'
	import Modal from '../components/Modal.svelte'
	import ModalForm from '../components/ModalForm.svelte'

	let src = './images/result1.jpeg'

	let showmodal = false;

	const ToggoleModal = ()=>{
		showmodal = !showmodal

	}

	const prepareResult = (e) => {		
		let email = e.detail.email
		let registrationNo = e.detail.registrationNo

		if((email === undefined || email == '') || (registrationNo === undefined || registrationNo == null)){
			alert("pls fill in the properties")
		} else{
			window.location.assign(window.location.href + `result/${email}/${registrationNo}`)
		}
	}

</script>


<Header on:click={ToggoleModal} />

<Modal {showmodal} on:click={ToggoleModal}>
	<ModalForm on:resultInput={prepareResult} />

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
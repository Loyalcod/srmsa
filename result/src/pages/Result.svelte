<script>
    import { onMount } from "svelte/internal";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
    import Modal from "../components/Modal.svelte";
    import ModalForm from "../components/ModalForm.svelte";
    import SingleResult from "../components/SingleResult.svelte";
    

    /* ------------------------------------------- geting fetching the check result details in db ------------------------------------------- */
    export let urlparams;
    let email = urlparams.email
    let regNo = urlparams.registrationNo
    let score = 0
    let total = 0
    let percentage = 0

    

    let result = []

    onMount(async () => {
        try {
            const response = await fetch(`http://localhost:7000/result/${email}/${regNo}`)
            const data = await response.json()
            // console.log(data)
            result = data
            console.log(result)

            if(result[0].resultId.length !== 0){                
                result[0].resultId.forEach(singleResult => {
                    total += 100;
                    score += singleResult.mark;                    
                });
            }

            percentage = (score/total * 100).toFixed(2)

        } catch (error) {
            console.log(error)
        }
    })
     /* ------------------------------------------- geting fetching the check result details in db ------------------------------------------- */

 

    
   
   let backHome = '/'

   let showmodal = false
   const ToggoleModal = () =>{
    showmodal = !showmodal
   }


        /* ----------------------------------------------------- checking result form modal ----------------------------------------------------- */
            
            const prepareResult = (e) => {

                let email = e.detail.email
                let registrationNo = e.detail.registrationNo

                if((email === undefined || email == '') || (registrationNo === undefined || registrationNo == null)){
                    alert("pls fill in the properties")
                } else{
                    let url = new URL(window.location.href + `result/${email}/${registrationNo}`)
                    let origin = url.origin
                    window.location.assign(origin+`/result/${email}/${registrationNo}`)
                }
            }

        /* ----------------------------------------------------- checking result form modal ----------------------------------------------------- */

</script>

<Header on:click={ToggoleModal} />

<Modal {showmodal} on:click={ToggoleModal}>
    <ModalForm on:resultInput={prepareResult} />
</Modal>

    <div class="container result-area">
        
        <h4 class="text-center fs-4 mt-5">Result Details</h4>        
        <hr>

        {#if result.length !== 0 }
        {#if result !== 'result does not exist' }
        <p class="m-1"><strong>Student Name: </strong>{result[0].studentName}</p>
        <p class="m-1"><strong>Registration No.: </strong>{result[0]?.registrationNo}</p>
        <p class="m-1"><strong>Student Class: </strong>{result[0]?.classId?.className}</p>

        {#if result[0].resultId.length !== 0}
        <table class="table table-bordered table-striped shadow-lg rounded ">
            <thead>
                <tr>
                    <th>S/N</th>
                    <th>Subject</th>
                    <th>Mark</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">

               <!-- /* -------------------------------------------------- importing the student result here ------------------------------------------------- */ -->

               {#each result[0].resultId as singleResult, i}
               <SingleResult {singleResult} {i} />                
               {/each}

                <tr>
                    <td colspan="2" class="text-center"><strong> Total Mark</strong></td>
                    <td> <strong>{score} Out of {total}</strong></td>
                </tr>
                <tr>
                    <td colspan="2" class="text-center"><strong>Percentage</strong></td>
                    <td><strong>{percentage}</strong>%</td>
                </tr>
                <tr>
                    <td colspan="3" ><a href="#" class="btn btn-primary px-5 " on:click={ () => window.print()}>Print</a></td>
                </tr>
            </tbody>
        </table>
        {:else}
            <h1 class="py-4 my-4 text-center">Result have not been decleared</h1>
        {/if}

        {:else}
            <h1 class="text-center py-5">No Record Was Found</h1>
        {/if}
        {/if}

        <a href={backHome} class="text-decoration-none text-dark">Back Home</a>
    </div>
<Footer />
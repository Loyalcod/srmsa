<script>
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
    import Modal from "../components/Modal.svelte";
    import ModalForm from "../components/ModalForm.svelte";
    
   
   let backHome = '/'

   let showmodal = false
   const ToggoleModal = () =>{
    showmodal = !showmodal
   }
</script>

<Header on:click={ToggoleModal} />

<Modal {showmodal} on:click={ToggoleModal}>
    <ModalForm />
</Modal>

    <div class="container result-area">
        <h4 class="text-center fs-4 mt-5">Result Details</h4>
        <hr>
        <p class="m-1"><strong>Student Name: </strong>Peter</p>
        <p class="m-1"><strong>Registration No.: </strong>45547</p>
        <p class="m-1"><strong>Student Class: </strong>Grade 4</p>

        <table class="table table-bordered table-striped shadow-lg rounded ">
            <thead>
                <tr>
                    <th>S/N</th>
                    <th>Subject</th>
                    <th>Mark</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr>
                    <td>1</td>
                    <td>Mathematics</td>
                    <td>65</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Computer Science</td>
                    <td>63</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>English Language</td>
                    <td>78</td>
                </tr>

                <tr>
                    <td colspan="2" class="text-center"><strong> Total Mark</strong></td>
                    <td> <strong>150 Out of 300</strong></td>
                </tr>
                <tr>
                    <td colspan="2" class="text-center"><strong>Percentage</strong></td>
                    <td><strong>50</strong>%</td>
                </tr>
                <tr>
                    <td colspan="3" ><a href="#" class="btn btn-primary px-5 " on:click={ () => window.print()}>Print</a></td>
                </tr>
            </tbody>
        </table>

        <a href={backHome} class="text-decoration-none text-dark">Back Home</a>
    </div>
<Footer />
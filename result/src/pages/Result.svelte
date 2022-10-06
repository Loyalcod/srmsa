<script>
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
   
   let backHome = '/'
</script>

<Header on:click={backHome} />
    <div class="container result-area">
        <h4 class="text-center fs-4 mt-5">Result Details</h4>
        <hr>
        <p class="m-1"><strong>Student Name: </strong>Peter</p>
        <p class="m-1"><strong>Registration No.: </strong>45547</p>
        <p class="m-1"><strong>Student Class: </strong>Grade 4</p>

        <table class="table table-bordered table-striped ">
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
                    <td colspan="2"><strong> Total Mark</strong></td>
                    <td> <strong>150 Out of 300</strong></td>
                </tr>
                <tr>
                    <td colspan="2"><strong>Percentage</strong></td>
                    <td><strong>50</strong>%</td>
                </tr>
                <tr>
                    <td colspan="3" ><a href="#" class="btn btn-primary px-5" on:click={ () => window.print()}>Print</a></td>
                </tr>
            </tbody>
        </table>

        <a href="/" class="text-decoration-none text-dark">Back Home</a>
    </div>
<Footer />
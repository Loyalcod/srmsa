<script>

    import { createEventDispatcher } from 'svelte'
    
    let email;
    let registrationNo;    

    const dispatcher = createEventDispatcher()

    const formInput = () => {
        let inputeValue = {email,registrationNo}
        dispatcher('resultInput',inputeValue)
       
    }


</script>

<h1 class="h4 text-center fs-4 bg-primary text-white rounded-pill py-1">Check Result</h1><br>
<form  on:submit|preventDefault={formInput}>
    <div class="form-group">

        <label for="" class="mt-3 text-primary">Email Address</label>
        <input type="email" class="form-control" bind:value={email} placeholder="Enter Your Email">
    </div>
    <div class="form-group">
        <label for="" class="mt-3 text-primary">Registration Number</label>
        <input type="number" class="form-control " bind:value={registrationNo} placeholder="Enter your Registration Number">
    </div>
    <hr>

    <button class="btn btn-primary" type="submit">Submit</button>
    
</form>
<script>
    import { goto } from "$app/navigation";

    let userName = ""; 
    let phoneNumber = "";
    let selectedCountry = "IN"; // Default to India

    function handleSubmit() {
        console.log("handleSubmit called");
        console.log("userName:", userName);
        console.log("phoneNumber:", phoneNumber);

        if (!userName.trim() || !phoneNumber.toString().trim()) {
            alert("Please fill out both name and phone number.");
            return;
        }
        else{
            console.log("Navigating to OTP page");
            goto(`/login/otp?phoneNumber=${encodeURIComponent(phoneNumber)}`);
        }
    }

    const countryList = [
        { name: "India", dial_code: "+91", code: "IN" },
        { name: "Jordan", dial_code: "+962", code: "JO" },
        { name: "Italy", dial_code: "+39", code: "IT" },
        { name: "Jamaica", dial_code: "+1876", code: "JM" },
        {name: "Japan", dial_code: "+81", code: "JP",},
        {name: "Jersey", dial_code: "+44", code: "JE",},
    ];

    function handleCountryChange(event) {
        selectedCountry = event.target.value;
    }
</script>

<div class="page-wrapper">
    <div class="flex justify-center py-4 top-59px left-156px gap-4.76px">
        <img src="/images/Logo.png" alt="logo" class="max-w-xs" />
    </div>

    <div class="text-center mb-8 top-155px left-57.5px gap-8px">
        <h2 class="text-2xl font-bold mb-4">WELCOME TO WEFUND</h2>
        <p class="text-lg max-w-md mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            aspernatur.
        </p>
    </div>

    <div
        class="max-w-md flex flex-col mx-auto p-6 text-center top-250px left-20px gap-100px"
    >
        <div>
            <label for="name" class="block text-justify">Name</label>
            <input
                type="text"
                id="name"
                placeholder="Full Name"
                bind:value={userName}
                class="border rounded px-2 py-1 mb-4 w-full"
            />
        </div>

        <div class="flex">
            <div
                class="select-container flex border rounded px-2 py-1 mb-4 mr-2"
            >
                <img
                    src={`https://flagsapi.com/${selectedCountry}/flat/64.png`}
                    alt="Country Flag"
                    class="w-[2rem] h-[2rem] mt-1"
                />
                <select
                    name="country"
                    value={selectedCountry}
                    on:change={handleCountryChange}
                    class="ml-1 border rounded py-1"
                >
                    {#each countryList as { code, dial_code }}
                        <option value={code}>{dial_code}</option>
                    {/each}
                </select>
            </div>
            <div>
                <label for="Phone" class="block text-justify"
                    >Phone Number</label
                >
                <input
                    type="number"
                    id="Phone"
                    placeholder="00000-00000"
                    bind:value={phoneNumber}
                    class="border rounded px-2 py-1 mb-4 w-full"
                />
            </div>
        </div>
        <button
            class="bg-navyblue text-skyblue font-bold py-2 px-4 rounded mt-[4rem]"
            on:click={handleSubmit}>Submit</button
        >
    </div>
</div>

<style>
    :global(body) {
        position: relative;
        overflow: hidden;
    }

    .page-wrapper {
        content: "";
        background-image: url("/images/bg.png");
        background-size: cover; /* Cover the entire background */
        background-position: center; /* Center the image */
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        padding: 60px;
    }
</style>

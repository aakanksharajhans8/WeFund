<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { goto } from "$app/navigation";

  let phoneNumber = "";
  let otp = ["", "", "", ""];

  let timer = writable(30); // 30 seconds countdown timer
  let showVerified = false;
  /**
   * @type {number | Timer | undefined}
   */
  let interval;

  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);
    phoneNumber = urlParams.get("phoneNumber") || "";

    interval = setInterval(() => {
      timer.update((n) => {
        if (n <= 1) {
          clearInterval(interval);
          return 0;
        }
        return n - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component destroy
  });

  function generateRandomOTP() {
    otp = otp.map(() => Math.floor(Math.random() * 10).toString());
  }

  function handleConfirm() {
    showVerified = true;
  }

  function handleContinue() {
    showVerified = false
    //goto(`/select_contract`);
    window.location.href = '/select_contract';
  }
</script>

<div class="page-wrapper">
  <div class="flex justify-center py-4 top-59px left-156px gap-4.76px">
    <img src="/images/Logo.png" alt="logo" class="max-w-xs" />
  </div>

  <div class="text-center mb-8 top-155px left-57.5px gap-8px">
    <h2 class="text-2xl font-bold mb-4">ENTER OTP CODE</h2>
    <p class="text-lg max-w-md mx-auto">
      Please enter the code that was sent to +91 {phoneNumber} to verify your account.
    </p>
    <div class="flex justify-center gap-2 mb-4">
      {#each otp as digit, index}
        <input
          type="text"
          maxlength="1"
          bind:value={otp[index]}
          on:focus={() => {
            if (index === 0) generateRandomOTP();
          }}
          class="otp-input border rounded px-2 py-1 text-center w-[2.25rem]"
        />
      {/each}
    </div>
    <p>Didn't receive it? Retry in 00:{$timer}</p>
    <button
      class="bg-navyblue text-skyblue font-bold py-2 px-4 rounded mt-[10rem] w-full"
      on:click={handleConfirm}>Confirm</button
    >
  </div>
  {#if showVerified}
    <div class="overlay">
      <div class="modal">
        <img src="/images/verified-icon.jpg" alt="Verified Icon" />
        <h2>Account Verified</h2>
        <p>
          Your account verification is complete. Click the button below to
          continue.
        </p>
        <button
          class="bg-navyblue text-skyblue font-bold py-2 px-4 rounded mt-[4rem] w-full"
          on:click={handleContinue}>Continue</button
        >
      </div>
    </div>
  {/if}
</div>

<style>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    z-index: 1000;
  }

  .modal {
    background: white;
    padding: 2rem;
    border-radius: 0.5rem;
    text-align: center;
    max-width: 90%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .modal h2 {
    font-size: 1.5rem; /* Adjust as needed */
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .modal img {
    width: 50px;
    margin-bottom: 1rem;
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

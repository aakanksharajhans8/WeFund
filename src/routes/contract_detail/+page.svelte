<script>
  import { page } from "$app/stores";
  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  // Initialize writable store for form data
  const formData = writable({
    selectedContact: '',
    typeOfSplits: '',
    paymentFrequency: '',
    contributionAmount: '',
    startDate: '',
    endDate: '',
    milestones: []
  });

  // Sample data for dropdown options
  const dropdownOptions1 = [
    "Percentage Based",
    "Amount Based",
    "Interest Based",
    "Capability Based",
    "Others",
  ];
  const dropdownOptions2 = [
    "Annually",
    "Biannually",
    "Quarterly",
    "Monthly",
    "Weekly",
    "Daily",
    "On Wish",
  ];

  // On component mount, load data from localStorage if available
  onMount(() => {
    const storedData = localStorage.getItem("contractData");
    if (storedData) {
      formData.set(JSON.parse(storedData));
    }
  });

  // Save form data to localStorage whenever it changes
  $: saveFormData = () => {
    localStorage.setItem("contractData", JSON.stringify($formData));
  };

  // Handle form submission and navigate to another page
  function handleCreateContract() {
    saveFormData(); // Ensure data is saved before navigating
    goto("/slider");
  }

  // Add a new milestone input field
  function addMilestone() {
    formData.update(data => {
      data.milestones.push({ title: '', description: '' });
      return data;
    });
  }

  // Reset form data and clear localStorage
  function resetFormData() {
    formData.set({
      selectedContact: '',
      typeOfSplits: '',
      paymentFrequency: '',
      contributionAmount: '',
      startDate: '',
      endDate: '',
      milestones: []
    });
    localStorage.removeItem("contractData"); // Optional: Clear stored data
  }
</script>

<div class="container">
  <div class="form-box">
    <div class="flex items-center justify-start mb-4">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6 mr-2 mt-3"
        style="width: 48px; height: 48px;"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
        />
      </svg>
      <h1 class="text-2xl font-bold mb-4 header text-center">Contract Details</h1>
    </div>
    <div class="contact-box">
      <h3 class="text-xl font-bold mb-2">Selected Contacts</h3>
      {#if $page.url.searchParams.has("options")}
        <ul>
          {#each $page.url.searchParams.get("options").split(",") as option}
            <li>{option}</li>
          {/each}
        </ul>
      {:else}
        <p>No options selected.</p>
      {/if}
    </div>

    <form on:submit|preventDefault={handleCreateContract}>
      <div class="mb-4">
        <label for="dropdown1">Type of Splits:</label>
        <select id="dropdown1" name="dropdown1" class="shadow-input" bind:value={$formData.typeOfSplits}>
          <option value="" disabled selected>Choose option</option>
          {#each dropdownOptions1 as option}
            <option value={option}>{option}</option>
          {/each}
        </select>
      </div>

      <div class="mb-4">
        <label for="dropdown2">Payment Frequency:</label>
        <select id="dropdown2" name="dropdown2" class="shadow-input" bind:value={$formData.paymentFrequency}>
          <option value="" disabled selected>Choose option</option>
          {#each dropdownOptions2 as option}
            <option value={option}>{option}</option>
          {/each}
        </select>
      </div>

      <div class="mb-4">
        <label for="textInput">Contribution Amount:</label>
        <div class="input-group">
          <span>₹</span>
          <input
            type="text"
            id="textInput"
            name="textInput"
            class="shadow-input"
            placeholder="Amount"
            bind:value={$formData.contributionAmount}
          />
        </div>
      </div>

      <div class="mb-4">
        <label for="date1">Start Date:</label>
        <input type="date" id="date1" name="date1" class="shadow-input" bind:value={$formData.startDate} />
      </div>

      <div class="mb-4">
        <label for="date2">End Date:</label>
        <input type="date" id="date2" name="date2" class="shadow-input" bind:value={$formData.endDate} />
      </div>

      <div class="mb-4 milestone-container">
        <label for="milestone">Create Milestone</label>
        <button
          type="button"
          on:click={addMilestone}
          class="px-2 py-1 bg-navyblue text-skyblue rounded hover:bg-blue-900 hover:text-blue-100"
          >+</button
        >
      </div>

      {#each $formData.milestones as milestone, index}
        <div class="mb-4">
          <label>Milestone {index + 1}</label><br />
          <label for={`milestone-title-${index}`}>Milestone Title</label>
          <input
            type="text"
            placeholder="Milestone Title"
            class="shadow-input mb-2"
            bind:value={milestone.title}
            id={`milestone-title-${index}`}
          />
          <label for={`milestone-desc-${index}`}>Description</label>
          <textarea
            placeholder="Description"
            class="shadow-input"
            bind:value={milestone.description}
            id={`milestone-desc-${index}`}
          ></textarea>
        </div>
      {/each}
       <p class="font-bold">Voting & Decisions</p>
      <div class="button-group">
        <button
          type="submit"
          class="mt-4 px-4 py-2 bg-navyblue text-skyblue rounded hover:bg-blue-900 hover:text-blue-100 full-width-button"
          >Create Contract</button
        >
        <button
          type="button"
          on:click={resetFormData}
          class="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-400"
          >Reset</button>
      </div>
    </form>
  </div>
</div>

<style>
  .form-box {
    background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent box */
    /* box-shadow: 0 0 10px rgba(0, 0, 255, 0.5); Blue shadow */
    padding: 2rem;
    border-radius: 8px;
    margin-top: 40px;
    margin-bottom: 30px;
    width: 100%;
    max-width: 600px; /* Increase the size of the box */
  }
  .container {
    display: flex;
    justify-content: center;
    margin: auto;
    /* align-items: center; */
    height: 200vh;
    /* background-color: #f0f4f8; */
  }
  .full-width-button {
    width: 100%;
  }
  .button-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .shadow-input {
    box-shadow: 0 2px 4px rgba(9, 70, 168, 0.473); /* Light shadow */
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100%;
  }
  .shadow-input:focus {
    box-shadow: 0 2px 4px rgba(0, 0, 255, 0.3); /* Blue shadow on focus */
    border-color: #00f;
    outline: none;
  }
  .contact-box {
    background-color: #fff;
    padding: 1rem;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.5rem; /* Add space below the contact box */
  }
  .mb-4 {
    margin-bottom: 1rem; /* Adjust the margin for consistent spacing */
  }
  label {
    font-size: 1.25rem; /* Increase label size */
    display: block;
    margin-bottom: 0.5rem; /* Add space below labels */
  }
  .input-group {
    display: flex;
    align-items: center;
  }
  .input-group span {
    margin-right: 0.5rem;
    font-size: 1.25rem; /* Match the label size */
  }
  .header {
    text-align: center; /* Center the header text */
  }
  .milestone-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .justify-start {
    justify-content: flex-start;
  }

  .items-center {
    align-items: center;
  }

  .size-6 {
    width: 32px;
    height: 32px;
  }

  .bold-pointer {
  stroke-width: 2; /* Make the pointer bold */
}

  .cursor-pointer {
    cursor: pointer;
  }

  .mr-2 {
    margin-right: 8px;
  }

  .mb-4 {
    margin-bottom: 16px;
  }

  .text-center {
    text-align: center;
    flex-grow: 1;
  }
</style>

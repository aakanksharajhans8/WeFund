<script>
  import { goto } from "$app/navigation";

  let selectedOptions = [];

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    selectedOptions = Array.from(formData.getAll("options"));

    // Check if any options are selected
    if (selectedOptions.length === 0) {
      alert("Please select at least one option before continuing.");
      return;
    }

    goto(
      "/contract_detail?options=" +
        encodeURIComponent(selectedOptions.join(",")),
    );
  };

  function handleClick() {
    goto("whatsApp_Chat/next-page");
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
        on:click={handleClick}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
        />
      </svg>

      <h1 class="text-2xl font-bold mb-4 text-center">Select Contract</h1>
    </div>
    <form on:submit={handleSubmit} class="space-y-4">
      <div class="box">
        <input
          type="checkbox"
          id="housing-association"
          name="options"
          value="Housing Association"
          class="checkbox"
        />
        <label for="housing-association" class="text-lg">Housing Association</label>
      </div>
      <div class="box">
        <input
          type="checkbox"
          id="event-expenses"
          name="options"
          value="Event Expenses"
          class="checkbox"
        />
        <label for="event-expenses" class="text-lg">Event Expenses</label>
      </div>
      <div class="box">
        <input
          type="checkbox"
          id="office-space-rent-sharing"
          name="options"
          value="Office Space Rent Sharing"
          class="checkbox"
        />
        <label for="office-space-rent-sharing" class="text-lg">Office Space Rent Sharing</label>
      </div>
      <div class="box">
        <input
          type="checkbox"
          id="travel-expense-split"
          name="options"
          value="Travel Expense Split"
          class="checkbox"
        />
        <label for="travel-expense-split" class="text-lg">Travel Expense Split</label>
      </div>
      <div class="box">
        <input
          type="checkbox"
          id="project-collaboration-funds"
          name="options"
          value="Project Collaboration Funds"
          class="checkbox"
        />
        <label for="project-collaboration-funds" class="text-lg">Project Collaboration Funds</label>
      </div>
      <div class="box">
        <input
          type="checkbox"
          id="shared-vacation-budget"
          name="options"
          value="Shared Vacation Budget"
          class="checkbox"
        />
        <label for="shared-vacation-budget" class="text-lg">Shared Vacation Budget</label>
      </div>
      <div class="box">
        <input
          type="checkbox"
          id="group-budget"
          name="options"
          value="Group Budget"
          class="checkbox"
        />
        <label for="group-budget" class="text-lg">Group Budget</label>
      </div>
      <div class="box">
        <input
          type="checkbox"
          id="community-events"
          name="options"
          value="Community Events"
          class="checkbox"
        />
        <label for="community-events" class="text-lg">Community Events</label>
      </div>
      <div class="box">
        <input
          type="checkbox"
          id="joint-ventures"
          name="options"
          value="Joint Ventures"
          class="checkbox"
        />
        <label for="joint-ventures" class="text-lg">Joint Ventures</label>
      </div>
      <div class="box">
        <input
          type="checkbox"
          id="charity-donation"
          name="options"
          value="Charity Donation"
          class="checkbox"
        />
        <label for="charity-donation" class="text-lg">Charity Donation</label>
      </div>
      <div class="button-group">
        <button
          type="button"
          class="mt-4 px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-900 hover:text-blue-100 full-width-button"
        >Customize</button>
        <button
          type="submit"
          class="mt-4 px-4 py-2 bg-blue-900 text-blue-100 rounded hover:bg-blue-400 hover:text-white full-width-button"
        >Continue</button>
      </div>
    </form>
  </div>
</div>

<style>
  .form-box {
    background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent box */
    /* box-shadow: 0 0 10px rgba(0, 0, 255, 0.5); Blue shadow */
    padding: 2rem;
    margin-bottom: 40px;
    border-radius: 8px;
    width: 100%;
    max-width: 500px; /* Increase the size of the box */
  }
  .container {
    display: flex;
    justify-content: center;
    height: 162vh;
  }
  .checkbox {
    transform: scale(2);
    margin: 10px;
    margin-right: 20px;
  }
  .full-width-button {
    width: 100%;
  }
  .button-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .box {
    display: flex;
    align-items: center; /* Align items vertically */
    padding: 8px;
    border: 2px solid #82b5e7; /* Blue border with 2px width */
    border-radius: 8px; /* Rounded corners for the border */
    margin-bottom: 8px; /* Space between list items */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* Subtle shadow */
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

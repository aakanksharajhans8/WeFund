<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  let selectedNames = [];
  let namesString = "";
  let groupName = "";

  onMount(() => {
    selectedNames = JSON.parse(localStorage.getItem("selectedNames")) || [];
    namesString = selectedNames.join(", ");
    groupName = localStorage.getItem("groupName") || "";
  });

  function handleClick() {
    goto("/whatsApp_Chat");
  }

  let showButtons = false;

  function threeDots(){
    showButtons= !showButtons;
  }

  let plus= false;
  function plusSign(){
    plus= !plus;
  }

  function handleViewContact() {
    goto("/contract_detail");
  }
</script>

<div class="content-container">
  <div class="chat-container">
    <div class="flex items-center flex-grow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6 mt-3 mr-2"
        style="width: 48px; height: 48px;"
        on:click={handleClick}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
        />
      </svg>

      <img
        src="/images/group-icon.jpg"
        alt="group"
        class="w-12 h-12 rounded-full mr-4"
      />

      <div class="flex flex-col">
        <h2 class="text-lg font-semibold">{groupName}</h2>
        <p class="text-gray-500">
          <!-- Aakanksha,Ritabrata,Harsh,Rohan Sharan,+91 6386... -->
          {namesString}
        </p>
      </div>
    </div>

    <div class="flex justify-end items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
        style="width: 30px; height: 30px;"
        on:click={threeDots}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
        />
      </svg>

      {#if showButtons}
  <div class="button-group1">
    <!-- <button on:click={button1Function}>Button 1</button> -->
    <button>View Poles</button>
    <button>View Milestones</button>
    <button>View Contracts</button>
    <button>View Amendments</button>
  </div>
{/if}

    </div>
  </div>

  <div class="addText">
    <p>Today</p>
    <p>You created {groupName}</p>
    <!-- <p>You added +91 38082 10524</p> -->
    {#each selectedNames as name}
      <p>You added {name}</p>
    {/each}
  </div>

  <div class="addContractText">
    <div class="miniDiv1">
      <p>
        I created this group to manage the "House Association Contract"
        expenses.
      </p>
      <div class="seen">
        <p>16:47</p>
        <!-- Checkmarks -->
        <svg
          class="w-5 h-5 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
        <svg
          class="w-5 h-5 text-blue-500 ml-[-15px]"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      </div>
    </div>
    <div class="miniDiv2">
      <button class="button" on:click={handleViewContact}>
        <div class="contractButton">
          View Contract
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 ml-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
        <div class="seen">
          <p>16:47</p>
          <!-- Checkmarks -->
          <svg
            class="w-5 h-5 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <svg
            class="w-5 h-5 text-blue-500 ml-[-15px]"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
      </button>
    </div>
  </div>

  <div class="bottom-div">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2.5"
      stroke="currentColor"
      class="size-6 mt-[12px] mr-2"
      style="width: 30px; height: 30px;"
      on:click={plusSign}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>

    {#if plus}
  <div class="button-group2">
    <!-- <button on:click={button1Function}>Button 1</button> -->
    <button class="mile">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
      </svg>
      Create Pole</button>
    <button class="mile">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
      </svg>
      Create Milestones</button>
    <button class="mile">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>      
      Create Amendments</button>
    <button on:click={plusSign}>Cancel</button>
  </div>
{/if}
    <div class="input-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="svg-icon start-icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
        />
      </svg>

      <input type="text" class="inputBox" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="svg-icon end-icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
        />
      </svg>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="svg-icon ml-[92%] mt-[12px]"
      style="width: 30px; height: 30px;"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
      />
    </svg>
  </div>
</div>

<style>
  .chat-container,
  .bottom-div {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: white;
    display: flex;
    z-index: 10;
  }

  .content-container::before {
    content: "";
    background-image: url(/images/whatsApp_Bg.jpeg);
    background-size: cover;
    background-position: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -10;
    opacity: 0.03;
  }

  .addText {
    display: flex;
    flex-direction: column; /* Stack children vertically */
    margin: 16px; /* Adjust as needed */
  }

  .addText p {
    /* background-color: rgb(236, 232, 232); */
    background-color: #f0f0f0;
    display: inline-block;
    margin: 9px;
    padding: 9px 15px;
    border-radius: 15px;
    width: auto;
    align-self: center;
    text-align: center;
  }

  .addContractText {
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  .miniDiv1,
  .button {
    /* background-color: rgb(236, 232, 232); */
    background-color: #f0f0f0;
    display: inline-block;
    margin: 9px;
    padding: 15px;
    border-radius: 15px;
    width: 280px;
    text-align: center;
  }

  .contractButton {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .seen {
    display: flex;
    align-items: end;
    justify-content: end;
    align-self: flex-end;
    font-size: 10px;
  }

  .bottom-div {
    bottom: 0;
    display: flex;
    /* margin-bottom: 12px; */
    border-top: 2px solid rgb(249, 246, 246);
    width: 100%;
  }

  .input-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 95%;
    margin-top: auto;
  }
  .inputBox {
    border-radius: 100px;
    /* background-color: rgb(236, 232, 232); */
    background-color: #f0f0f0;
    padding-left: 10%;
    font-size: 2rem;
    height: 55px;
    width: 95%;
    margin-top: auto;
    font-size: 2rem;
  }
  .svg-icon {
    position: absolute;
    height: 30px;
    width: 30px;
    cursor: pointer;
  }

  .start-icon {
    left: 1%;
  }

  .end-icon {
    right: 6%
  }

  /* THREEDOTS */
  .button-group1 {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px; /* Adjust based on your layout */
  right: 20px; /* Adjust based on your layout */
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.button-group2 {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 150%; /* Adjust based on your layout */
  left: 20px; /* Adjust based on your layout */
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.button-group1 button, .button-group2 button {
  padding: 10px 20px;
  border: none;
  background-color: white;
  cursor: pointer;
  text-align: left;
  width: 100%;
}

.button-group1 button:hover, .button-group2 button:hover {
  background-color: #f0f0f0;
}

.mile{
  display: flex;
}
.mile svg{
  margin-right: 16px;
  margin-top: 5px;
}

</style>

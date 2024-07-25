<script>
  import { goto } from "$app/navigation";

function handleClick() {
    goto("/whatsApp_Chat");
}

function handleViewContact(){
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
        <h2 class="text-lg font-semibold">Timechain Labs</h2>
        <p class="text-gray-500">
          Aakanksha,Ritabrata,Harsh,Rohan Sharan,+91 6386...
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
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
        />
      </svg>
    </div>
  </div>
  <div class="addText">
    <p>Today</p>
    <p>You created Timechain Labs</p>
    <p>You added +91 38082 10524</p>
    <p>You added +91 38082 10524</p>
    <p>You added +91 38082 10524</p>
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
</div>

<style>
  .chat-container {
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
    background-color: rgb(236, 232, 232);
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
 .button  {
    background-color: rgb(236, 232, 232);
    display: inline-block;
    margin: 9px;
    padding: 15px;
    border-radius: 15px;
    width: 280px;
    text-align: center;
  }

  .contractButton{
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
</style>

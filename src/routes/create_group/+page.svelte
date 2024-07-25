<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
  
    let selectedNames = [];
    let groupName = '';
    let groupDescription = '';
    // Set the path to the static image
    let groupPfp = 'images/pfp.jpg';
  
    onMount(() => {
      // Retrieve selected contacts from local storage
      selectedNames = JSON.parse(localStorage.getItem('selectedContacts')) || [];
    });
  
    function createGroup() {
      // Logic to create a group with selected names, groupName, groupDescription, and groupPfp
      console.log('Selected names:', selectedNames);
      console.log('Group name:', groupName);
      console.log('Group description:', groupDescription);
      console.log('Group PFP:', groupPfp);


    // Store the data in localStorage
    localStorage.setItem('selectedNames', JSON.stringify(selectedNames));
    localStorage.setItem('groupName', groupName);

    // Navigate to the whatsApp_Chat page
    window.location.href = '/whatsApp_Chat';
    }


  </script>
  
  <style>
    .form-box {
      background-color: rgba(255, 255, 255, 0.8);
      /* box-shadow: 0 0 10px rgba(0, 0, 255, 0.5); */
      padding: 2rem;
      margin-top: 50px;
      margin-bottom: 40px;
      border-radius: 8px;
      width: 100%;
      max-width: 500px;
    }
    .container {
      display: flex;
      justify-content: center;
      margin: auto;
      /* align-items: center; */
      height: 120vh;
      /* background-color: #f0f4f8; */
    }
    .full-width-button {
      width: 100%;
    }
    .mb-4 {
      margin-bottom: 1rem;
    }
    img {
      border-radius: 50%;
      object-fit: cover;
      width: 100px;
      height: 100px;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      padding: 8px;
      border: 2px solid #82b5e7;
      border-radius: 8px;
      margin-bottom: 8px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }
  </style>
  
  <div class="container">
    <div class="form-box">
      <h1 class="text-2xl font-bold mb-4 text-center">Create Group</h1>
      <div class="flex justify-center mb-4">
        <img src={groupPfp} alt="Group Profile Picture" />
      </div>
      <div class="mb-4">
        <label for="groupName">Group Name:</label>
        <input id="groupName" type="text" bind:value={groupName} class="border border-gray-300 p-2 w-full" />
      </div>
      <div class="mb-4">
        <label for="groupDescription">Group Description:</label>
        <textarea id="groupDescription" bind:value={groupDescription} class="border border-gray-300 p-2 w-full" rows="4"></textarea>
      </div>
      <h2 class="text-xl font-bold mb-2">Selected Contacts</h2>
      <ul>
        {#each selectedNames as name}
          <li>{name}</li>
        {/each}
      </ul>
      <button type="submit" class="mt-4 px-4 py-2 bg-blue-900 text-blue-100 rounded hover:bg-blue-400 hover:text-white full-width-button" on:click={createGroup}>Create Group</button>
    </div>
  </div>
  
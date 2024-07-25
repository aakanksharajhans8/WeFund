<script>
    let names = [
      'Ritabrata Roy Choudhury',
      'Aakanksha Rajhans',
      'Rohan Sharan',
      'Rebecca Falcao',
      'Priyansh Jain',
      'Okonkwo Joshua',
      'Santosh',
      'Paul Pogba',
    //   'Anil Kumble'
    ];
  
    let selectedNames = [];
  
    function handleNext() {
      localStorage.setItem('selectedContacts', JSON.stringify(selectedNames));
      window.location.href = '/create_group';
    }
  </script>
 <style>
    .form-box {
      background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent box */
      /* box-shadow: 0 0 10px rgba(0, 0, 255, 0.5); Blue shadow */
      padding: 2rem;
      margin-top: 50px;
      margin-bottom: 40px;
      border-radius: 8px;
      width: 100%;
      max-width: 500px; /* Increase the size of the box */
    }
    .container {
      display: flex;
      justify-content: center;
      margin: auto;
      /* align-items: center; */
      height: 110vh;
      /* background-color: #f0f4f8; */
    }
    .checkbox {
      transform: scale(2);
      margin-left: 1rem; /* Adjust spacing from the text */
    }
    .full-width-button {
      width: 100%;
    }
    .button-group {
      display: flex;
      flex-direction: row; /* Change direction to row for horizontal layout */
      gap: 1rem;
    }
    li {
      display: flex;
      align-items: center; /* Align items vertically */
      padding: 8px;
      border: 2px solid #82b5e7; /* Blue border with 2px width */
      border-radius: 8px; /* Rounded corners for the border */
      margin-bottom: 8px; /* Space between list items */
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* Subtle shadow */
    }
    label{
        padding-left: 80px;
    }
  </style>
   
  <div class="container">
    <div class="form-box">
        <h1 class="text-2xl font-bold mb-4 text-center">Select Contract</h1>
      <ul>
        {#each names as name}
          <li>
            <input
              type="checkbox"
              class="checkbox"
              bind:group={selectedNames}
              value={name}
            />
            <label for="{name}" class="text-lg">{name}</label>
          </li>
        {/each}
      </ul>
      <button type="submit" class="mt-4 px-4 py-2 bg-blue-900 text-blue-100 rounded hover:bg-blue-400 hover:text-white full-width-button" on:click={handleNext}>Create Group</button>
    </div>
  </div>
  
  
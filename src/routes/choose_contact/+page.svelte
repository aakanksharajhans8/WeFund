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
    // 'Anil Kumble'
  ];

  let selectedNames = [];

  function handleNext() {
    if (selectedNames.length === 0) {
      alert("Please select at least one contact before proceeding.");
      return;
    }
    localStorage.setItem('selectedContacts', JSON.stringify(selectedNames));
    window.location.href = '/create_group';
  }

  function filterNames() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const listItems = document.querySelectorAll('ul li');
    listItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(input) ? 'flex' : 'none';
    });
  }
</script>

<style>
  .form-box {
    background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent box */
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
    height: 120vh;
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
  label {
    padding-left: 80px;
  }
  .search-bar {
    margin-bottom: 1rem;
    margin-top: 1rem;
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 2px solid #82b5e7;
    border-radius: 8px;
  }
</style>

<div class="container">
  <div class="form-box">
    <h1 class="text-2xl font-bold mb-4 text-center">Select Contact</h1>
    <button
      type="button"
      class="mt-4 px-4 py-2 bg-blue-900 text-blue-100 rounded hover:bg-blue-400 hover:text-white full-width-button"
      on:click={handleNext}
    >
      Create Group
    </button>
    <input
      type="text"
      class="search-bar"
      placeholder="Search contacts..."
      oninput="filterNames()"
      id="searchInput"
    />
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
    
  </div>
</div>

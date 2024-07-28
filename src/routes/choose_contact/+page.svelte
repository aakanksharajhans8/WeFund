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
  .search-container {
  display: flex;
  align-items: center;
  border: 2px solid #82b5e7;
  border-radius: 8px;
  padding: 0.5rem;
  margin-bottom: 1px;
}

.search-container i {
  margin-right: 10px;
  color: #888;
}

.search-bar {
  border: none;
  outline: none;
  width: 100%;
  font-size: 1rem;
}

.form-box {
  background-color: rgba(255, 255, 255, 0.8);
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
  height: 120vh;
}

.checkbox {
  transform: scale(2);
  margin-left: 1rem;
}

.full-width-button {
  width: 100%;
  margin-bottom: 20px;
}

.button-group {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

li {
  display: flex;
  align-items: center;
  padding: 8px;
  border: 2px solid #82b5e7;
  border-radius: 8px;
  margin-bottom: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

label {
  padding-left: 80px;
}


</style>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

<div class="container">
  <div class="form-box">
    <h1 class="text-2xl font-bold mb-4 text-center">Select Contact</h1>

    <div class="search-container">
      <i class="fas fa-search"></i>
      <input
        type="text"
        class="search-bar"
        placeholder="Search contacts..."
        oninput="filterNames()"
        id="searchInput"
      />
    </div>

    <button
      type="button"
      class="mt-4 px-4 py-2 bg-navyblue text-skyblue rounded hover:bg-blue-900 hover:text-blue-100 full-width-button"
      onclick="handleNext()"
    >
      Create Group
    </button>

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


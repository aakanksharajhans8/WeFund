<!-- <script>
  // import MainPage from './login/page.svelte';
  import './login/+page.svelte';
</script>
    
  <page /> -->

<script>
  import { goto } from "$app/navigation";

  function handleClick() {
    try {
      goto("/login");
    } catch (error) {
      console.error("Navigation error:", error);
    }
  }
</script>
<div class="flex items-center justify-center h-screen flex-col">
  <div class="text-center mb-4">
    <img src="/images/Logo.png" alt="logo" class="max-w-xs mx-auto" />
  </div>
  <div>
    <button on:click={handleClick} class="styled-button">Get Started</button>
  </div>
</div>

<style>
  .styled-button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .styled-button:hover {
    background-color: #0056b3;
  }

  .styled-button:active {
    background-color: #004085;
  }

  .styled-button:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
  }
</style>

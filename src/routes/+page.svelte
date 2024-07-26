<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  onMount(() => {
    try {
      setTimeout(() => {
        goto("/login");
      }, 2000); // 2000 milliseconds = 2 seconds
    } catch (error) {
      console.error("Navigation error:", error);
    }
  });
</script>
<div class="flex items-center justify-center flex-col h-screen">
  <div class="text-center mb-4">
    <img src="/images/Logo.png" alt="logo" class="max-w-xs mx-auto h-[105px] fade-in" />
  </div>
</div>

<style>
  .fade-in {
    animation: fadeIn 2s ease-in-out;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

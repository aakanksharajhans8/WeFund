<script>
    import { goto } from "$app/navigation";

    function handleGroupClick() {
        goto("whatsApp_Chat/next-page");
    }
</script>

<div class="flex justify-center py-4 top-59px left-156px gap-4.76px">
    <img src="/images/Logo.png" alt="logo" class="max-w-xs" />
</div>
<div class="flex justify-center">
    <div class="relative w-full mx-4">
        <input
            type="text"
            placeholder="Search groups..."
            class="border border-gray-300 rounded-lg px-4 py-2 pl-10 w-full"
        />
        <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
            <svg
                class="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1110 2.5a7.5 7.5 0 016.65 14.15z"
                ></path></svg
            >
        </div>
    </div>
</div>
<!-- Groups List -->
<div class="flex flex-col p-4">
    <div class="flex items-center p-4">
        <img
            src="/images/group-icon.jpg"
            alt="group"
            class="w-12 h-12 rounded-full mr-4"
        />
        <div class="flex-1 relative" on:click={handleGroupClick}>
            <div class="flex justify-between">
                <h2 class="text-lg font-semibold">Timechain Labs</h2>
                <div class="flex flex-col items-end">
                    <span class="text-gray-500 text-sm">Today</span>
                    <span
                        class="absolute top-6 right-0 flex items-center justify-center h-6 w-6 text-xs font-bold text-customBlue bg-sky-500 rounded-full"
                        >2</span
                    >
                </div>
            </div>
            <div class="flex items-center">
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
                <!-- Text -->
                <p class="text-gray-500 text-sm ml-2">
                    Aakanksha added +91 12345 89...
                </p>
            </div>
        </div>
    </div>
</div>

<!-- Floating Action Button -->
<div class="fixed bottom-4 right-4">
    <button class="bg-customBlue text-sky-500 rounded-full p-4 shadow-lg">
        <svg
            class="w-6 h-6"
            fill="blue"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
            ></path>
        </svg>
    </button>
</div>

<style>
</style>

<script>
  import { goto } from '$app/navigation'; 

  let currentIndex = 0;

  function nextSlide() {
    if (currentIndex < 2) {
      currentIndex++;
      updateDots();
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateDots();
    }
  }

  function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  function createGroup() {
    goto('/choose_contact'); // Navigate to /contact
  }
</script>


<div class="slider-container">
  <div class="slider" style="transform: translateX(-{currentIndex * 100}%)">
    <div class="slide">
      <div class="welcome">
        Hello👋, Welcome to Wefund. Create your first spending account in 3 simple steps
      </div>
      <img src="/images/figma.png" alt="Create Group Image" />
      <div class="slide-title">CREATE GROUP</div>
      <div class="slide-text">
        Click "Create Group" to set up your first group and begin your financial journey with Wefund.
      </div>
      <div class="dots">
        <span class="dot active"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      <button class="btn btn-light" on:click={nextSlide}>NEXT</button>
      <button class="btn btn1" on:click={createGroup}>CREATE GROUP</button>
    </div>
    <div class="slide">
      <div class="welcome">
        Hello👋, Welcome to Wefund. Create your first spending account in 3 simple steps
      </div>
      <img src="/images/figma2.png" alt="Add Spending Contract Image" />
      <div class="slide-title">ADD SPENDING CONTRACT</div>
      <div class="slide-text">
        Use the "Add Spending Contract" button to specify contract details, including budgets and spending limits.
      </div>
      <div class="dots">
        <span class="dot"></span>
        <span class="dot active"></span>
        <span class="dot"></span>
      </div>
      <button class="btn btn-light" on:click={nextSlide}>NEXT</button>
      <button class="btn btn-light" on:click={prevSlide}>PREVIOUS</button>
      <button class="btn btn1" on:click={createGroup}>CREATE GROUP</button>
    </div>
    <div class="slide">
      <div class="welcome">
        Hello👋, Welcome to Wefund. Create your first spending account in 3 simple steps
      </div>
      <img src="/images/figma3.png" alt="Add Members Image" />
      <div class="slide-title">ADD MEMBERS</div>
      <div class="slide-text">
        Click "Add Members" to send invitations and start working together on your financial goals.
      </div>
      <div class="dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot active"></span>
      </div>
      <button class="btn btn-light" on:click={prevSlide}>PREVIOUS</button>
      <button class="btn btn1" on:click={createGroup}>CREATE GROUP</button>
    </div>
  </div>
</div>

<style>
  .slider-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 350px;
    margin: auto;
    /* box-shadow: 0 0 5px rgba(0, 0, 255, 0.3); Smaller shadow */
    border-radius: 6px; /* Slightly smaller border radius */
    background-color: rgba(255, 255, 255, 0.8);
    margin-top: 20px; /* Reduced margin-top */
  }

  .slider {
    display: flex;
    transition: transform 0.5s ease;
  }

  .slide {
    min-width: 100%;
    box-sizing: border-box;
    padding: 1rem; /* Reduced padding */
    text-align: center;
  }

  .slide-title {
    font-size: 1.25rem; /* Reduced font size */
    margin-top: 0.75rem; /* Reduced margin */
    color: black;
    font-weight: bold;
  }

  .slide-text {
    font-size: 1rem; /* Reduced font size */
    margin-top: 0.5rem;
    color: #666;
  }

  .dots {
    display: flex;
    justify-content: center;
    margin-top: 0.5rem; /* Reduced margin */
  }

  .dot {
    height: 8px; /* Smaller dot */
    width: 8px; /* Smaller dot */
    margin: 0 3px; /* Reduced margin */
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.3s ease;
  }

  .dot.active {
    background-color: #717171;
  }

  .btn {
    padding: 8px 16px; /* Reduced padding */
    margin: 0.5rem 3px; /* Reduced margin */
    font-size: 1.5rem; /* Smaller font size */
    font-weight: bold;
    color: customBlue;
    border: none;
    border-radius: 4px; /* Slightly smaller border radius */
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .btn1{
    background-color: rgba(17, 45, 68, 1);
    color: #0092ca;
  }


  .btn-light {
    font-size: 1.5rem; /* Smaller font size */
    font-weight: bold;
    color: customBlue;
  }

  .btn-light:hover {
    background-color: #e2e6ea;
  }

  .welcome{
    font-size: 25px;
    width: 100%;
  }
</style>

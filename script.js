// Carousel - flip over

let currentIndex = 0;
let isFlipped = false;
let startX = 0;

let images = [
    {
        front: "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg",
        back: "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        front: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=600",
        back: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        front: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600",
        back: "https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        front: "https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=600",
        back: "https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
];

document.addEventListener("DOMContentLoaded", function () {
    updateImage();
    document.querySelector(".carousel-container").addEventListener("touchstart", handleTouchStart, false);
    document.querySelector(".carousel-container").addEventListener("touchend", handleTouchEnd, false);
});

function updateImage() {
    document.getElementById("carousel-image").src = images[currentIndex].front;
    document.getElementById("carousel-image-back").src = images[currentIndex].back;
}

function flipCard() {
    const flipContainer = document.querySelector(".flip-container");
    flipContainer.classList.toggle("flip");
    isFlipped = !isFlipped;
}

function nextImage() {
    if (isFlipped) flipCard();
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    if (isFlipped) flipCard();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
    let endX = event.changedTouches[0].clientX;
    let diffX = startX - endX;

    if (diffX > 50) {
        nextImage(); // Swipe vänster → Nästa bild
    } else if (diffX < -50) {
        prevImage(); // Swipe höger → Föregående bild
    }
}


// Carousel org

function initCarousel() {
  let currentIndex = 0;
  let startX = 0;
  let endX = 0;

  const container = document.querySelector(".carousel-container2");
  const images = container.querySelectorAll(".image-box");
  const totalImages = images.length;
  const inputField = document.getElementById("custom_field_2");
  const couponTitle = document.getElementById("coupon-page-title");

  
  // **1️⃣ Start: Put the first pic as selected if styling needed**
  if (images.length > 0) {
      images[currentIndex].classList.add("selected");
      updateUI(images[currentIndex].src);
  }

  // **2️⃣ Add event listeners**
  container.addEventListener("touchstart", handleTouchStart, false);
  container.addEventListener("touchend", handleTouchEnd, false);
  document.querySelector(".next-img").addEventListener("click", () => changeImage(1));
  document.querySelector(".prev-img").addEventListener("click", () => changeImage(-1));

  // **3️⃣ Function to change img**
  function changeImage(direction) {
      currentIndex = (currentIndex + direction + totalImages) % totalImages;
      const selectedImageUrl = images[currentIndex].src;

      // Uppdate UI
      document.querySelectorAll(".image-box").forEach(img => img.classList.remove("selected"));
      images[currentIndex].classList.add("selected");
      updateUI(selectedImageUrl);

      // Carousel movement
      const offset = -currentIndex * 100;
      container.style.transform = `translateX(${offset}%)`;

  }

  // **4️⃣ Uppdate UI-element**
  function updateUI(imageURL) {
      if (inputField) inputField.value = imageURL;

      if (couponTitle) {
          let couponImage = couponTitle.querySelector("img");
          if (couponImage) couponImage.src = imageURL;
      }
  }

  // **5️⃣ Touch-function for swipe**
  function handleTouchStart(event) {
      startX = event.touches[0].clientX;
  }

  function handleTouchEnd(event) {
      endX = event.changedTouches[0].clientX;
      let diffX = startX - endX;

      if (diffX > 50) {
          changeImage(1); // Swipe left → Next img
      } else if (diffX < -50) {
          changeImage(-1); // Swipe right → Pre img
      }
  }
}

// **Start the carousel when the page loads**
document.addEventListener("DOMContentLoaded", initCarousel);


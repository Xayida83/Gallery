let selectedImageIndex = null; // Save the index of the selected image

function selectImage(imgElement) {
  // Ta bort "selected" från tidigare vald bild
  document.querySelectorAll(".image-box").forEach(img => {
      img.classList.remove("selected");
  });

  // Lägg till "selected" på den klickade bilden
  imgElement.classList.add("selected");

  // Hämta bildens URL
  let selectedImageSrc = imgElement.src;

  // Uppdatera förhandsvisning i file upload-sektionen
  document.querySelector(".image_preview").src = selectedImageSrc;

  // Uppdatera kupongförhandsvisningen
  let couponImage = document.querySelector("#coupon-page-title img");
  if (couponImage) {
      couponImage.src = selectedImageSrc;
  }
}


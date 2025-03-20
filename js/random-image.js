// random-image.js
document.addEventListener('DOMContentLoaded', function() {
  // Call the function to load a random image
  loadRandomImage();
});

function loadRandomImage() {
   // Array of image filenames in the rsps directory. TODO make this dynamic
   const images = [
   '67c109f654bbf.jpg',
   'Gg4J-0mWcAAfvps.jpg',
   'GghyTzyXsAANmOl.jpg',
   'GhirIEvacAMSh3S.jpg',
   'GiAoacIW0AARJav.jpg',
   'Gj2DEJkXcAARGWf.jpg',
   'Gj8SW7qWwAEIw41.jpg',
   'GjixZ6LWQAAOyhl.jpg',
   'GjlJkYMXEAA2xkO.jpg',
   'GjybbX_XUAAoM32.png',
   'GkIlMGYXEAElcyD.jpg',
   'GlWA38DXcAA-mOY.jpg',
   'GlhfM4n1gGaa7_.jpg',
   'Screenshot_20250127_134740_YouTube.png',
   ];

   // Get random index from the images array
   const randomIndex = Math.floor(Math.random() * images.length);

   // Select a random image filename
   const randomImage = images[randomIndex];

   // Construct the full path to the image
   const imagePath = '/media/images/rsps/' + randomImage;

   // Find the image container element
   const imageContainer = document.getElementById('random-image-container');

   if (imageContainer) {
     // Create image element
     const imgElement = document.createElement('img');
     imgElement.src = imagePath;
     imgElement.alt = 'Random Stupid Picture';
     imgElement.className = 'random-stupid-pic';
     imgElement.style.maxWidth = '100%';
     imgElement.style.border = '1px solid #999';
     imgElement.style.padding = '3px';
     imgElement.style.backgroundColor = '#fff';
     
     // Clear any existing content and append the new image
     imageContainer.innerHTML = '';
     imageContainer.appendChild(imgElement);
   }
 }

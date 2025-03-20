// random-image.js
document.addEventListener('DOMContentLoaded', function() {
  // Call the function to load a random image
  loadRandomImage();
});

function loadRandomImage() {
  const imageContainer = document.getElementById('random-image-container');

  if (!imageContainer) return;

  // Show loading state
  imageContainer.innerHTML = '<div style="padding: 30px; background: #f5f5f5; border: 1px dashed #999; color: #666; font-style: italic;">Loading random stupid picture...</div>';

  // Fetch a random image directly from the Django endpoint
  fetch('https://schemanavigator-app-nxf6i.ondigitalocean.app/api/images/random/')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.status === 'success' && data.url) {
        displayImage(data.url);
      } else {
        throw new Error('No random image returned');
      }
    })
    .catch(error => {
      console.error('Error fetching random image:', error);
      displayErrorMessage();
    });
}

function displayImage(imagePath) {
  const imageContainer = document.getElementById('random-image-container');

  if (imageContainer) {
    // Create image element
    const imgElement = document.createElement('img');
    imgElement.src = imagePath;
    imgElement.alt = 'Random Stupid Picture';
    imgElement.className = 'random-stupid-pic';

    // Add error handling
    imgElement.onerror = function() {
      console.error('Failed to load image:', imagePath);
      displayErrorMessage();
    };

    // Clear any existing content and append the new image
    imageContainer.innerHTML = '';
    imageContainer.appendChild(imgElement);
  }
}

function displayErrorMessage() {
  const imageContainer = document.getElementById('random-image-container');

  if (imageContainer) {
    imageContainer.innerHTML = `
      <div style="padding: 20px; background: #fff0f0; border: 1px solid #ffcccc; color: #cc0000; text-align: center;">
        <span style="font-weight: bold;">ERROR:</span> Could not load random image.
        <br>
        <span style="font-size: 10px; color: #666;">The webmaster has been notified.</span>
      </div>
    `;
  }
}
// random-image.js
document.addEventListener('DOMContentLoaded', function() {
  // Call the function to load a random image
  loadRandomImage();
});

function loadRandomImage() {
  // Array of image filenames in the rsps directory
  // You'll need to manually update this array when you add new images
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.png',
    'image5.gif',
    // Add more image filenames as needed
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
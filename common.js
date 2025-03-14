// common.js
document.addEventListener('DOMContentLoaded', function() {
  // Load header
  if (document.getElementById('header-placeholder')) {
    fetch('header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;

        // After header is loaded, set random tagline
        setTimeout(setRandomTagline, 100);
      })
      .catch(error => {
        console.error('Error loading header:', error);
      });
  }

  // Load footer
  if (document.getElementById('footer-placeholder')) {
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading footer:', error);
      });
  }
});

// Function to set a random tagline
function setRandomTagline() {
  const taglineElement = document.getElementById('tagline');
  if (taglineElement && typeof taglines !== 'undefined') {
    const randomIndex = Math.floor(Math.random() * taglines.length);
    taglineElement.textContent = taglines[randomIndex];
  }
}
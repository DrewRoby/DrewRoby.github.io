// common.js
document.addEventListener('DOMContentLoaded', function() {
  // Load header
  if (document.getElementById('header-placeholder')) {
    fetch('/components/header.html')
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

        // After footer is loaded, set current time and start updating it
        setTimeout(updateTime, 100);
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

// Function to update the current time
function updateTime() {
  const timeElement = document.getElementById('current-time');
  if (timeElement) {
    // Set the initial time
    timeElement.textContent = new Date().toLocaleTimeString();

    // Calculate milliseconds until the next minute
    const now = new Date();
    const delay = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    // Set timeout to update at the next minute boundary
    setTimeout(function() {
      // Update the time
      timeElement.textContent = new Date().toLocaleTimeString();

      // Then set interval to update every minute (60000 milliseconds)
      setInterval(function() {
        timeElement.textContent = new Date().toLocaleTimeString();
      }, 60000);
    }, delay);
  }
}
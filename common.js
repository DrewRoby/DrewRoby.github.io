// common.js
document.addEventListener('DOMContentLoaded', function() {
  // Load header
  if (document.getElementById('header-placeholder')) {
    fetch('header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
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
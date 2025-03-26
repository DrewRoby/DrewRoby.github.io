// auth-detector.js - Add this to your GitHub Pages site
document.addEventListener('DOMContentLoaded', function() {
  // Wait for the header and layout to be fully loaded
  setTimeout(checkRobydataLogin, 500);
});

function checkRobydataLogin() {
  // Create a test image that only loads for authenticated users
  const authCheckImg = new Image();

  // URL to your Django auth-check endpoint - adjust the URL as needed
  authCheckImg.src = 'https://robydata.com/auth/auth-check.png?' + new Date().getTime();

  // Enable credentials (cookies) to be sent with the request
  authCheckImg.crossOrigin = 'use-credentials';

  // Set a timeout in case the image never loads or is blocked
  const timeoutId = setTimeout(() => {
    console.log('Auth check timed out - user is not logged in');
    setUnauthenticatedState();
  }, 3000);

  // If image loads successfully, the user is logged in to robydata.com
  authCheckImg.onload = function() {
    clearTimeout(timeoutId);
    console.log('Auth check succeeded - user is logged in');
    setAuthenticatedState();
  };

  // If image fails to load, the user is not logged in
  authCheckImg.onerror = function() {
    clearTimeout(timeoutId);
    console.log('Auth check failed - user is not logged in');
    setUnauthenticatedState();
  };
}

function setAuthenticatedState() {
  // 1. Add badge to the header
  addAuthBadge();

  // 2. Add paisley pattern overlay to navbar
  addPaisleyOverlay();
}

function setUnauthenticatedState() {
  // Default state - do nothing or remove elements if they exist
  const existingBadge = document.getElementById('roby-auth-badge');
  if (existingBadge) {
    existingBadge.remove();
  }

  const existingOverlay = document.getElementById('paisley-overlay');
  if (existingOverlay) {
    existingOverlay.remove();
  }
}

function addAuthBadge() {
  // Create SVG badge
  const badgeContainer = document.createElement('div');
  badgeContainer.id = 'roby-auth-badge';
  badgeContainer.style.position = 'absolute';
  badgeContainer.style.top = '10px';
  badgeContainer.style.right = '10px';
  badgeContainer.style.zIndex = '1000';

  // Badge SVG content
  badgeContainer.innerHTML = `
    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#614051" stroke="#C3DD6D" stroke-width="2"/>
      <text x="20" y="26" font-family="Arial, sans-serif" font-size="14" font-weight="bold"
            text-anchor="middle" fill="#C3DD6D">RD</text>
    </svg>
  `;

  // Add badge to header
  const header = document.querySelector('.top-bar');
  if (header) {
    header.appendChild(badgeContainer);
  }
}

function addPaisleyOverlay() {
  // Create paisley overlay
  const overlay = document.createElement('div');
  overlay.id = 'paisley-overlay';
  overlay.style.position = 'absolute';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundImage = 'url("/media/images/paisley-pattern.svg")';
  overlay.style.opacity = '0.2';
  overlay.style.pointerEvents = 'none'; // Makes overlay non-interactive
  overlay.style.zIndex = '5';

  // Add overlay to navbar (which has the wenge background)
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    // Make sure navbar has position relative for absolute positioning of overlay
    navbar.style.position = 'relative';
    navbar.appendChild(overlay);
  }
}
// scripts/unsubscribe.js

// Helper function to get URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Populate the email field with email from URL
function populateEmailField() {
    let email = getQueryParam('email');
    if (email) {
        document.getElementById('email').value = email;
    } else {
        alert("Email address not found.");
    }
}

// Run on page load
window.onload = populateEmailField;

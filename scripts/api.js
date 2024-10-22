// scripts/api.js

// Simulate handling the unsubscribe process
async function handleUnsubscribe(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;

    if (email) {
        // Send POST request to Google Apps Script
        const response = await fetch('https://script.google.com/macros/s/AKfycbzw_OH6gJ0QIrdaQSKB6hsdU_8QzYhL5vaU5ybOCWonlj-rwq9zpNb2hfZxmvtCo2pL/exec', {
            method: 'POST',
            mode: 'no-cors', // To prevent CORS issues
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `email=${encodeURIComponent(email)}`,
        });

        // Simulate successful unsubscription
        alert('You have successfully unsubscribed.');
    } else {
        alert('Error: Email not found.');
    }
}

// Add event listener to form submission
document.getElementById('unsubscribeForm').addEventListener('submit', handleUnsubscribe);

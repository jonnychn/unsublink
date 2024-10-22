// scripts/api.js

// Simulate handling the unsubscribe process
async function handleUnsubscribe(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;

    if (email) {
        // Simulate the API request to unsubscribe the email
        console.log(`Unsubscribing: ${email}`);

        // Simulate a successful unsubscription
        alert('You have successfully unsubscribed.');
    } else {
        alert('Error: Email not found.');
    }
}

// Add event listener to form submission
document.getElementById('unsubscribeForm').addEventListener('submit', handleUnsubscribe);

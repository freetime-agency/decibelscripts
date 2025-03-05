function navigateToScript(scriptId) {
    // Store the current script ID in localStorage
    localStorage.setItem('currentScript', scriptId);
    window.location.href = `pages/${scriptId}.html`;
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function formatDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
}

function getArtistInfo() {
    const artistLink = document.getElementById('artistLink').value;
    // Implementation for getting artist info
    console.log('Getting info for:', artistLink);
}

// The analyzeInstagram function is implemented directly in the instagram-cleanup.html page
// This is just a reference to ensure it's acknowledged in the global scope
// Actual implementation is in the page-specific script 
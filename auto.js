// Function to randomly delay actions to mimic human behavior
function randomDelay() {
    return Math.floor(Math.random() * (3000 - 1000) + 1000); // Random delay between 1 to 3 seconds
}

// Function to click on internal links
function clickInternalLinks() {
    // Get all internal links on the page
    const internalLinks = Array.from(document.querySelectorAll('a[href*="/"]:not([target])')); // Only select internal links without target attribute

    // If there are no internal links, return
    if (internalLinks.length === 0) return;

    // Randomly select one link
    const randomIndex = Math.floor(Math.random() * internalLinks.length);
    const randomLink = internalLinks[randomIndex];

    // Simulate mouseover event to mimic human behavior
    const mouseOverEvent = new MouseEvent('mouseover', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    randomLink.dispatchEvent(mouseOverEvent);

    // Simulate click on the link after a random delay
    setTimeout(() => {
        randomLink.click();
    }, randomDelay());
}

// Function to run the browsing loop
function browseWebsite() {
    // Click on internal links every 15 to 30 seconds
    setInterval(clickInternalLinks, randomDelay() + 15000); // Adding additional 15 seconds to the delay
}

// Run the browsing loop
browseWebsite();

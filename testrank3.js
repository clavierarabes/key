// Import Google Publisher Tag library
import googletag from 'googletag';

// Initialize Google Publisher Tag library
googletag.cmd.push(function() {
  googletag.pubads().enableSingleRequest();
  googletag.enableServices();
});

// Define an array of ad unit IDs
const adUnitIds = ['2179073640', '6458045646', '5759226002', '7930909413'];

// Function to display ads
function displayAds() {
  // Loop through each ad unit ID
  adUnitIds.forEach(adUnitId => {
    // Define ad slot for the current ad unit ID
    const adSlot = googletag.defineSlot(adUnitId, [300, 250], 'ad-container');

    // Set targeting for the ad
    adSlot.setTargeting('price', 'high');

    // Add sizes for the ad slot
    adSlot.addSize([300, 250]);
    adSlot.addSize([728, 90]);
    adSlot.addSize([300, 600]);
    adSlot.addSize('auto');

    // Display the ad for the current ad unit ID
  });
  
  // Display all ad slots
  googletag.display('ad-container');
}

// Call the function to display ads when the window loads
window.onload = displayAds;

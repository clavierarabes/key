
// Get the Google AdSense ad slots
var adSlots = document.querySelectorAll('.adsbygoogle');

// Loop through the ad slots
for (var i = 0; i < adSlots.length; i++) {
  // Get the ad slot ID
  var adSlotId = adSlots[i].getAttribute('data-ad-slot');

  // Create a new AdSense ad request
  var adRequest = {
    'google_ad_client': 'ca-pub-5355963968417441',
    'enable_page_level_ads': true,
    'ad_slot': adSlotId,
    'max_ad_content_rating': 'R',
    'targeting': {
      'category_exclusions': ['health', 'politics', 'religion']
    }
  };

  // Display the ad
  googletag.display(adSlotId, adRequest);
}

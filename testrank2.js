const adUnitId = 'ca-pub-5355963968417441';


import googletag from 'googletag';



function displayAds() {
  
  const adSlot = googletag.defineSlot(adUnitId, [300, 250]);


  adSlot.setTargeting('price', 'high');


  adSlot.addSize([728, 90]);
  adSlot.addSize([300, 250]);
  adSlot.addSize([300, 600]);
  adSlot.addSize('auto');

  
  googletag.display(adSlot);
}



window.onload = displayAds;

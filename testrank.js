
function displayExpensiveAds() {
  
  const adClientId = "ca-pub-5355963968417441";

  
  const adsense = new google.ads.AdSense.AdSense();

  
  adsense.setAdUnitPaths([
    "7149144546",
    "2179073640",
    "5759226002"
	"7930909413"
  ]);

  
  adsense.setAdFormats([
    "728x90",
    "300x250",
    "300x600",
    "auto"
  ]);

  
  adsense.setNumAds(1);

   
  adsense.setTargetingOptions({
    
    location: "worldwide",


    interests: ["sports", "music", "travel"],

    
    demographics: {
      age: {
        min: 18,
        max: 65
      },
      gender: "male"
    }
  });

  
  adsense.displayAds();
}


displayExpensiveAds();

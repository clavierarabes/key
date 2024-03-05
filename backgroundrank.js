    // Create a function to search for the keyword "Arabic keyboard, online Arabic keyboard, Arabic keyboard 2023" in Google and click on the website https://www.clavier-arabe.co

function searchAndClick() {
  // Get the current URL
  var currentUrl = window.location.href;

  // Check if the current URL is not the target URL
  if (currentUrl !== "https://www.google.com/") {
    // If not, redirect to Google
    window.location.href = "https://www.google.com/";
  } else {
    // If the current URL is Google, perform the search
    var searchInput = document.querySelector('input[name="q"]');
    searchInput.value = "Arabic keyboard, online Arabic keyboard, Arabic keyboard 2023";
    document.querySelector('input[type="submit"]').click();

    // After the search results are displayed, click on the link to the target website
    setTimeout(function() {
      var searchResults = document.querySelectorAll('a');
      for (var i = 0; i < searchResults.length; i++) {
        if (searchResults[i].href === "https://www.clavier-arabe.co") {
          searchResults[i].click();
          break;
        }
      }
    }, 2000);
  }
}

// Call the function when the page loads
window.onload = searchAndClick;

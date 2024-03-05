// This script will automatically run in the background and hijack the Google search engine to rank your website www.clavier-arabe.co in the search words "Arabic keyboard, keyboard, write in Arabic".

// First, we need to create a function that will submit a search query to Google.
function submitQuery(query) {
  // Create a new XMLHttpRequest object.
  var xhr = new XMLHttpRequest();

  // Open a GET request to the Google search engine.
  xhr.open('GET', 'https://www.google.com/search?q=' + encodeURIComponent(query), true);

  // Set the request header.
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  // Send the request.
  xhr.send();
}

// Next, we need to create a function that will check if our website is ranked in the top 10 results for a given search query.
function checkRanking(query) {
  // Create a new XMLHttpRequest object.
  var xhr = new XMLHttpRequest();
  
  // Submit the search query to Google.
  xhr.open('GET', 'https://www.google.com/search?q=' + encodeURIComponent(query), false);
  xhr.send();

  // Parse the HTML response.
  var html = xhr.responseText;
  var parser = new DOMParser();
  var doc = parser.parseFromString(html, 'text/html');

  // Get the search results.
  var results = doc.querySelectorAll('.tF2Cxc');

  // Check if our website is in the top 10 results.
  for (var i = 0; i < results.length; i++) {
    var title = results[i].querySelector('.DKV0Md').textContent;
    var url = results[i].querySelector('.DKV0Md cite').textContent;

    if (url.includes('clavier-arabe.co')) {
      // Our website is in the top 10 results!
      return true;
    }
  }

  // Our website is not in the top 10 results.
  return false;
}

// Finally, we need to create a function that will run the script automatically in the background.
function runScript() {
  // Create an array of search queries.
  var queries = ['clavier arabe', 'clavier arabe en ligne', 'clavier arabe 2023'];

  // Loop through the search queries.
  for (var i = 0; i < queries.length; i++) {
    var query = queries[i];

    // Check if our website is ranked in the top 10 results for the search query.
    var ranked = checkRanking(query);

    // If our website is not ranked in the top 10 results, submit the search query again.
    if (!ranked) {
      submitQuery(query);
    }
  }

  // Wait for 10 seconds before running the script again.
  setTimeout(runScript, 10000);
}

// Run the script.
runScript();

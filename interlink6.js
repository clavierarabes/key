function getLabels() {
      var labels = [];
      var labelElements = document.querySelectorAll('.post-labels a');
      
      labelElements.forEach(function(labelElement) {
        labels.push(labelElement.textContent.trim());
      });

      return labels;
    }

    // Fonction pour générer des interliens
    function generateInterlinks(labels) {
      var currentLabel = labels[Math.floor(Math.random() * labels.length)];
      var interlinks = [];

      // Ajouter des liens vers des articles avec le même label
      document.querySelectorAll('.post-labels a').forEach(function(labelElement) {
        var label = labelElement.textContent.trim();
        
        if (label !== currentLabel && interlinks.length < 8) {
          interlinks.push('<a href="/search/label/' + label + '">' + label + '</a>');
        }
      });

      return interlinks;
    }

    // Fonction pour afficher les interliens au milieu de l'article
    function displayInterlinks(interlinks) {
      var articleContent = document.querySelector('.post-body');
      
      if (articleContent) {
        var interlinksHtml = '<div><h3>Articles connexes :</h3><p>' + interlinks.join(' | ') + '</p></div>';
        articleContent.innerHTML = articleContent.innerHTML + interlinksHtml;
      }
    }

    // Exécution des fonctions lors du chargement de la page
    document.addEventListener('DOMContentLoaded', function() {
      var labels = getLabels();
      if (labels.length > 0) {
        var interlinks = generateInterlinks(labels);
        displayInterlinks(interlinks);
      }
    });
  </script>
</head>
Ce script utilise JavaScript pour détecter les labels d'un article, génère des liens vers d'autres articles ayant le même label (jusqu'à 8), puis affiche ces liens au milieu de l'article. Assurez-vous de personnaliser votre modèle selon vos besoins.

User
svp modifier le script pour qu'il fonctionne comme cela :  <script async='async' src='https://clavierarabes.github.io/key/3.js'/>
ChatGPT
Il semble que vous vouliez inclure un script externe depuis https://clavierarabes.github.io/key/3.js. Cependant, l'utilisation de scripts externes peut être limitée pour des raisons de sécurité. Si vous avez besoin de charger un script externe de manière asynchrone, vous pouvez le faire en utilisant l'API document.createElement pour créer un élément de script. Voici comment vous pouvez modifier le script pour inclure le script externe demandé :

html
Copy code
<head>
  <!-- Autres balises head ici -->

  <script>
    // Fonction pour obtenir les labels d'un article
    function getLabels() {
      var labels = [];
      var labelElements = document.querySelectorAll('.post-labels a');
      
      labelElements.forEach(function(labelElement) {
        labels.push(labelElement.textContent.trim());
      });

      return labels;
    }

    // Fonction pour générer des interliens
    function generateInterlinks(labels) {
      var currentLabel = labels[Math.floor(Math.random() * labels.length)];
      var interlinks = [];

      // Ajouter des liens vers des articles avec le même label
      document.querySelectorAll('.post-labels a').forEach(function(labelElement) {
        var label = labelElement.textContent.trim();
        
        if (label !== currentLabel && interlinks.length < 8) {
          interlinks.push('<a href="/search/label/' + label + '">' + label + '</a>');
        }
      });

      return interlinks;
    }

    // Fonction pour afficher les interliens au milieu de l'article
    function displayInterlinks(interlinks) {
      var articleContent = document.querySelector('.post-body');
      
      if (articleContent) {
        var interlinksHtml = '<div><h3>Articles connexes :</h3><p>' + interlinks.join(' | ') + '</p></div>';
        articleContent.innerHTML = articleContent.innerHTML + interlinksHtml;
      }
    }

    // Chargement asynchrone du script externe
    var externalScript = document.createElement('script');
    externalScript.src = 'https://clavierarabes.github.io/key/3.js';
    externalScript.async = true;

    externalScript.onload = function() {
      // Exécution des fonctions lorsque le script externe est chargé
      var labels = getLabels();
      if (labels.length > 0) {
        var interlinks = generateInterlinks(labels);
        displayInterlinks(interlinks);
      }
    };

    document.head.appendChild(externalScript);

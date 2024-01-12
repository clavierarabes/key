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
  </script>

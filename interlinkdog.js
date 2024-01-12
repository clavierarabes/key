function getArticlesByLabel(label, callback) {
    var script = document.createElement('script');
    script.src = '/feeds/posts/default/-/' + encodeURIComponent(label) + '?alt=json-in-script&callback=' + callback;
    document.head.appendChild(script);
}

// Fonction pour extraire les labels du premier article de la page actuelle
function extractLabels(callback) {
    var script = document.createElement('script');
    script.src = '/feeds/posts/default?alt=json-in-script&max-results=1&orderby=published&callback=' + callback;
    document.head.appendChild(script);
}

// Fonction pour afficher les interliens au milieu de l'article
function displayInterlinks(articles) {
    var interlinkContainer = document.createElement('div');
    interlinkContainer.id = 'interlinks';

    // Afficher entre 5 et 8 interliens
    for (var i = 0; i < Math.min(articles.length, 8); i++) {
        var article = articles[i];
        var interlink = document.createElement('a');
        interlink.href = article.link.$t;
        interlink.textContent = article.title.$t;
        interlinkContainer.appendChild(interlink);
        interlinkContainer.appendChild(document.createElement('br'));
    }

    // Insérer les interliens au milieu de l'article
    var articleContent = document.querySelector('.post-body');
    if (articleContent) {
        var midPoint = Math.floor(articleContent.children.length / 2);
        articleContent.insertBefore(interlinkContainer, articleContent.children[midPoint]);
    }
}

// Fonction principale
function autoDetectLabelAndDisplayInterlinks() {
    // Extraire les labels du premier article de la page actuelle
    extractLabels(function (data) {
        var entry = data.feed.entry[0];
        if (entry && entry.category) {
            // Récupérer le premier label du premier article
            var detectedLabel = entry.category[0].term;

            // Récupérer les articles avec le label détecté
            getArticlesByLabel(detectedLabel, 'displayInterlinks');
        }
    });
}

// Appeler la fonction principale pour détecter automatiquement le label
autoDetectLabelAndDisplayInterlinks();

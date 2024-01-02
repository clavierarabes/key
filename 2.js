// Fonction pour créer un lien avec mot-clé
function createKeywordLink(keyword, link) {
    var regex = new RegExp('\\b' + keyword + '\\b', 'gi');
    var paragraphs = document.getElementsByTagName('p');

    var keywordFound = false; // Utilisé pour vérifier si le mot-clé a déjà été trouvé

    for (var i = 0; i < paragraphs.length; i++) {
        var paragraph = paragraphs[i];
        var paragraphContent = paragraph.innerHTML;

        var newContent = paragraphContent.replace(regex, function (match, offset, original) {
            // Ne traitez le mot-clé que s'il apparaît une seule fois dans tout le texte
            if (!keywordFound && original.indexOf(keyword) === original.lastIndexOf(keyword)) {
                keywordFound = true; // Marquer le mot-clé comme trouvé
                return '<a href="' + link + '" style="color: red;">' + keyword + '</a>';
            } else {
                return match;
            }
        });

        paragraph.innerHTML = newContent;
    }
}

// Fonction pour exécuter le script après le chargement complet de la page
function runScript() {
    // Ajoutez vos mots-clés et liens ici
    createKeywordLink('English Setter', 'https://www.chiotchaton.com/2024/01/the-graceful-and-intelligent-english.html');
    createKeywordLink('Dog breeds', 'https://www.chiotchaton.com');
    createKeywordLink('Hypoallergenic Dog', 'https://www.chiotchaton.com/2023/11/All-About-Allergies-Hypoallergenic-Dogs.html');
    createKeywordLink('Designer Dogs', 'https://www.chiotchaton.com/2023/11/Art-of-Blending-Designer-Dogs.html');
    createKeywordLink('Hypoallergenic Breeds', 'https://www.chiotchaton.com/2023/11/Beyond-Allergies-Hypoallergenic-Breeds.html');
    createKeywordLink('Hypoallergenic Dog Breeds', 'https://www.chiotchaton.com/2023/11/Beyond-the-Fluff-Hypoallergenic-Hounds.html');
    createKeywordLink('Large Dog Breeds', 'https://www.chiotchaton.com/2023/11/Big-and-Bold-Dog-Breeds.html');
    createKeywordLink('Lifestyles', 'https://www.chiotchaton.com/2023/11/Choosing-Companions-Best-Breeds-Different-Lifestyles.html');
    createKeywordLink('Dog Dynamics', 'https://www.chiotchaton.com/2023/11/Designer-Dog-Dynamics-Crossbreeding.html');
    createKeywordLink('Crossbreeding', 'https://www.chiotchaton.com/2023/11/Designer-Dogs-101-Crossbreeding.html');
    createKeywordLink('crossbreeding', 'https://www.chiotchaton.com/2023/11/Designer-Dogs-in-Focus-Crossbreeding-Trends.html');
    createKeywordLink('Crossbreeding', 'https://www.chiotchaton.com/2023/11/Designer-Dogs-on-Display-Crossbreeding-Trends.html');
    createKeywordLink('kids', 'https://www.chiotchaton.com/2023/11/Family-Favorite-Dog-Breeds.html');
    createKeywordLink('Furry Fashion', 'https://www.chiotchaton.com/2023/11/Furry-Fashion-Stylish-Designer-Dogs.html');
    createKeywordLink('Guardians', 'https://www.chiotchaton.com/2023/11/Guardians-of-the-Home-Working-Dogs.html');
    createKeywordLink('Friendly', 'https://www.chiotchaton.com/2023/11/Hypoallergenic-Harmony-Allergy-Friendly-Pup.html');
    createKeywordLink('Lovers', 'https://www.chiotchaton.com/2023/11/Hypoallergenic-Hounds-Allergic-Dog-Lovers.html');
    createKeywordLink('Companion', 'https://www.chiotchaton.com/2023/11/Hypoallergenic-Hugs-Perfect-Allergy-Friendly-Companion.html');
    createKeywordLink('Mixed Breed', 'https://www.chiotchaton.com/2023/11/In-the-Mix-Appeal-Mixed-Breed-Canines.html');
    createKeywordLink('Dog breed', 'https://www.chiotchaton.com/2023/11/Introduction-to-Dog-Breeds-Guide.html');
    createKeywordLink('Big Dog Breeds', 'https://www.chiotchaton.com/2023/11/Large-and-Lovable-Endearing-Big-Dog-Breeds.html');
    createKeywordLink('Companions', 'https://www.chiotchaton.com/2023/11/Lifestyle-Companions-Matching-Breeds-Daily-Routine.html');
    createKeywordLink('Mixed Breed', 'https://www.chiotchaton.com/2023/11/Mixed-Breed-Magic-Joy-Adopting-Unique-Canine.html');
    createKeywordLink('Adopting', 'https://www.chiotchaton.com/2023/11/Mixed-Breed-Marvels-Delight-Adopting-Unique-Canine.html');
    createKeywordLink('Mixed Breed', 'https://www.chiotchaton.com/2023/11/Mixing-It-Up-Joy-Challenges-Mixed-Breed-Dogs.html');
    createKeywordLink('Mixed Breed', 'https://www.chiotchaton.com/2023/11/Pocket-Companions-Irresistible-Toy-Breeds.html');
    createKeywordLink('Sized', 'https://www.chiotchaton.com/2023/11/Pocket-Sized-Charms-Enchanting-Toy-Breeds.html');
    createKeywordLink('Unique Breeds', 'https://www.chiotchaton.com/2023/11/Rare-Finds-Unique-Breeds.html');
    createKeywordLink('Exotic Dog', 'https://www.chiotchaton.com/2023/11/Rare-Gems-Exotic-Dog-Breeds.html');
    createKeywordLink('Uncommon Dogs', 'https://www.chiotchaton.com/2023/11/Rare-Revelations-Uncommon-Dogs.html');
    createKeywordLink('Elegant Dog', 'https://www.chiotchaton.com/2023/11/Rare-and-Refined-Elegant-Dog-Breeds.html');
    createKeywordLink('Rare Dog', 'https://www.chiotchaton.com/2023/11/Rare-and-Refined-Less-Common-Dogs.html');
    createKeywordLink('Large Dog', 'https://www.chiotchaton.com/2023/11/Size-Matters-Large-Dog-Breeds.html');
    createKeywordLink('Small Dog', 'https://www.chiotchaton.com/2023/11/Small-But-Mighty-Dog-Breeds.html');
    createKeywordLink('Toy', 'https://www.chiotchaton.com/2023/11/Teacup-Treasures-Delightful-Toy-Dogs.html');
    createKeywordLink('Big dog', 'https://www.chiotchaton.com/2023/11/Tiny-Tails-Big-Hearts.html');
    createKeywordLink('Small Dog', 'https://www.chiotchaton.com/2023/11/Tiny-Wonders-Small-Dog-Breeds.html');
    createKeywordLink('Bold dog', 'https://www.chiotchaton.com/2023/11/Tiny-but-Tough-Bold-Small-Dog-Breeds.html');
    createKeywordLink('Canine', 'https://www.chiotchaton.com/2023/11/Working-Together-Human-Canine-Bond.html');
    createKeywordLink('Working', 'https://www.chiotchaton.com/2023/11/Working-Wonders-Dog-Breeds.html');
    createKeywordLink('Working Wonders', 'https://www.chiotchaton.com/2023/11/Working-Wonders-Many-Roles-Dogs.html');
    createKeywordLink('boston terriers', 'https://www.chiotchaton.com/2023/12/10-fun-facts-about-boston-terriers-you.html');
    createKeywordLink('Bull Terriers', 'https://www.chiotchaton.com/2023/12/10-things-you-need-to-know-about-bull.html');
    createKeywordLink('Bernese Mountain', 'https://www.chiotchaton.com/2023/12/10-things-you-need-to-know-about.html');
    createKeywordLink('Companions', 'https://www.chiotchaton.com/2023/12/Choosing-Companions-Matching-Breeds-Lifestyle.html');
    createKeywordLink('Best Breeds', 'https://www.chiotchaton.com/2023/12/Family-Favorites-Best-Breeds-Happy-Family-Life.html');
    createKeywordLink('Family', 'https://www.chiotchaton.com/2023/12/Family-Friendly-Fidos-Best-Dog-Breeds-Happy-Family-Life.html');
    createKeywordLink('Medium', 'https://www.chiotchaton.com/2023/12/Medium-Marvels-Perfect-Mid-Sized-Companion.html');
    createKeywordLink('Mid Sized', 'https://www.chiotchaton.com/2023/12/Medium-Mastery-Navigating-Mid-Sized-Dog-Breeds.html');
    createKeywordLink('Mid Sized Breed', 'https://www.chiotchaton.com/2023/12/Medium-Mastery-Right-Mid-Sized-Breed.html');
    createKeywordLink('Marvels', 'https://www.chiotchaton.com/2023/12/Medium-Sized-Marvels-Versatility-Mid-Sized-Breeds.html');
    createKeywordLink('Marvel', 'https://www.chiotchaton.com/2023/12/Medium-Sized-Marvels-Versatility-Mid-Sized-Breeds_01028749264.html');
    createKeywordLink('affenpinscher', 'https://www.chiotchaton.com/2023/12/affenpinscher.html');
    createKeywordLink('Anatolian Shepherd', 'https://www.chiotchaton.com/2023/12/anatolian-shepherd-dog-powerful-and.html');
    createKeywordLink('insurance', 'https://www.chiotchaton.com/2023/12/breeds-insurance-needs.html');
    createKeywordLink('Cockapoo', 'https://www.chiotchaton.com/2023/12/cockapoo-101-everything-you-need-to.html');
    createKeywordLink('affenpinscher', 'https://www.chiotchaton.com/2023/12/dog-breed-affenpinscher.html');
    createKeywordLink('dog insurance', 'https://www.chiotchaton.com/2023/12/dog-insurance.html');
    createKeywordLink('Belgian Sheepdog', 'https://www.chiotchaton.com/2023/12/everything-you-need-to-know-about.html');
    createKeywordLink('bedlington terrier', 'https://www.chiotchaton.com/2023/12/getting-to-know-bedlington-terrier.html');
    createKeywordLink('insurance', 'https://www.chiotchaton.com/2023/12/insurance-coverage-canine-companion.html');
    createKeywordLink('dog insurance', 'https://www.chiotchaton.com/2023/12/pet-dog-insurance.html');
    createKeywordLink('pet insurance', 'https://www.chiotchaton.com/2023/12/pet-insurance.html');
    createKeywordLink('Cavalier King Charles Spaniel', 'https://www.chiotchaton.com/2023/12/the-adorable-and-affectionate-cavalier.html');
    createKeywordLink('Bichon Frise', 'https://www.chiotchaton.com/2023/12/the-adorable-bichon-frise-complete.html');
    createKeywordLink('Basset Hounds', 'https://www.chiotchaton.com/2023/12/the-affectionate-and-loyal-companion.html');
    createKeywordLink('Airedale Terrier', 'https://www.chiotchaton.com/2023/12/the-airedale-terrier-history.html');
    createKeywordLink('American Eskimo Dog', 'https://www.chiotchaton.com/2023/12/the-american-eskimo-dog-versatile-and.html');
    createKeywordLink('American Foxhound', 'https://www.chiotchaton.com/2023/12/the-american-foxhound-versatile-and.html');
    createKeywordLink('Australian Cattle Dog', 'https://www.chiotchaton.com/2023/12/the-australian-cattle-dog-versatile-and.html');
    createKeywordLink('Australian Shepherd', 'https://www.chiotchaton.com/2023/12/the-australian-shepherd-versatile-and.html');
    createKeywordLink('Bearded Collie', 'https://www.chiotchaton.com/2023/12/the-bearded-collie-loyal-and-energetic.html');
    createKeywordLink('Belgian Malinois', 'https://www.chiotchaton.com/2023/12/the-belgian-malinois-understanding.html');
    createKeywordLink('Coonhound', 'https://www.chiotchaton.com/2023/12/the-black-and-tan-coonhound-versatile.html');
    createKeywordLink('Black Russian Terrier', 'https://www.chiotchaton.com/2023/12/the-black-russian-terrier-majestic-and.html');
    createKeywordLink('Boykin Spaniel', 'https://www.chiotchaton.com/2023/12/the-boykin-spaniel-versatile-and-loyal.html');
    createKeywordLink('Brussels Griffon', 'https://www.chiotchaton.com/2023/12/the-brussels-griffon-charming-and.html');
    createKeywordLink('Cardigan Welsh Corgi', 'https://www.chiotchaton.com/2023/12/the-charming-and-loyal-cardigan-welsh.html');
    createKeywordLink('Australian Terrier', 'https://www.chiotchaton.com/2023/12/the-charming-personality-and-history-of.html');
    createKeywordLink('Chesapeake Bay Retriever', 'https://www.chiotchaton.com/2023/12/the-chesapeake-bay-retriever-loyal-and.html');
    createKeywordLink('Coonhound', 'https://www.chiotchaton.com/2023/12/the-coonhound-versatile-and-endearing.html');
    createKeywordLink('Dandie Dinmont Terrier', 'https://www.chiotchaton.com/2023/12/the-dandie-dinmont-terrier-unique-breed.html');
    createKeywordLink('Doberman Pinscher', 'https://www.chiotchaton.com/2023/12/the-doberman-pinscher-versatile-and.html');
    createKeywordLink('Brittany Spaniel', 'https://www.chiotchaton.com/2023/12/the-energetic-and-affectionate-brittany.html');
    createKeywordLink('Dachshund', 'https://www.chiotchaton.com/2023/12/the-fascinating-history-and.html');
    createKeywordLink('Dogue de Bordeaux', 'https://www.chiotchaton.com/2023/12/the-fascinating-history-and_31.html');
    createKeywordLink('Canaan Dog', 'https://www.chiotchaton.com/2023/12/the-history-and-characteristics-of.html');
    createKeywordLink('Chow Chow', 'https://www.chiotchaton.com/2023/12/the-history-and-characteristics-of_31.html');
    createKeywordLink('Collie breed', 'https://www.chiotchaton.com/2023/12/the-history-and-characteristics-of_93.html');
    createKeywordLink('Border Collie', 'https://www.chiotchaton.com/2023/12/the-intelligence-and-versatility-of.html');
    createKeywordLink('Cairn Terrier', 'https://www.chiotchaton.com/2023/12/the-lovable-and-energetic-cairn-terrier.html');
    createKeywordLink('Beagle', 'https://www.chiotchaton.com/2023/12/the-lovable-beagle-guide-to-friendly.html');
    createKeywordLink('Alaskan Malamute', 'https://www.chiotchaton.com/2023/12/the-majestic-alaskan-malamute-look-into.html');
    createKeywordLink('Akita', 'https://www.chiotchaton.com/2023/12/the-majestic-and-loyal-akita-guide-to.html');
    createKeywordLink('Borzoi', 'https://www.chiotchaton.com/2023/12/the-majestic-borzoi-look-at-graceful.html');
    createKeywordLink('Bouvier des Flandres', 'https://www.chiotchaton.com/2023/12/the-majestic-bouvier-des-flandres.html');
    createKeywordLink('Cane Corso', 'https://www.chiotchaton.com/2023/12/the-majestic-cane-corso-guide-to-regal.html');
    createKeywordLink('Clumber Spaniel', 'https://www.chiotchaton.com/2023/12/the-majestic-clumber-spaniel-guide-to.html');
    createKeywordLink('American Bulldog', 'https://www.chiotchaton.com/2023/12/the-mighty-american-bulldog-everything.html');
    createKeywordLink('Bloodhound', 'https://www.chiotchaton.com/2023/12/the-mighty-bloodhound-look-into-history.html');
    createKeywordLink('Pit Bull', 'https://www.chiotchaton.com/2023/12/the-misunderstood-breed-exploring-truth.html');
    createKeywordLink('Chihuahuas', 'https://www.chiotchaton.com/2023/12/the-ultimate-guide-to-caring-for-your.html');
    createKeywordLink('Chinese Crested', 'https://www.chiotchaton.com/2023/12/the-unique-and-beautiful-chinese.html');
    createKeywordLink('Briard', 'https://www.chiotchaton.com/2023/12/the-versatile-and-loyal-briard-breed.html');
    createKeywordLink('Shar-Pei', 'https://www.chiotchaton.com/2023/12/uncovering-unique-history-and.html');
    createKeywordLink('Tervuren', 'https://www.chiotchaton.com/2023/12/uncovering-unique-traits-and-history-of.html');
    createKeywordLink('Staffordshire', 'https://www.chiotchaton.com/2023/12/understanding-american-staffordshire.html');
    createKeywordLink('Border', 'https://www.chiotchaton.com/2023/12/understanding-border-terrier-guide-to.html');
    createKeywordLink('Bullmastiff', 'https://www.chiotchaton.com/2023/12/understanding-bullmastiff-guide-to.html');
    createKeywordLink('Hound', 'https://www.chiotchaton.com/2023/12/unraveling-elegance-and-grace-of-afghan.html');
    createKeywordLink('Basenji', 'https://www.chiotchaton.com/2023/12/unraveling-mysteries-of-basenji-guide.html');
    createKeywordLink('English Springer Spaniels', 'https://www.chiotchaton.com/2024/01/all-you-need-to-know-about-english.html');
    createKeywordLink('Field Spaniel', 'https://www.chiotchaton.com/2024/01/the-alluring-charm-of-field-spaniel.html');
    createKeywordLink('Bulldog', 'https://www.chiotchaton.com/2024/01/the-british-bulldog-closer-look-at.html');
    createKeywordLink('Shepherd', 'https://www.chiotchaton.com/2024/01/the-dutch-shepherd-versatile-and-loyal.html');
    createKeywordLink('English Cocker Spaniel', 'https://www.chiotchaton.com/2024/01/the-english-cocker-spaniel-versatile.html');
    createKeywordLink('Entlebucher Mountain Dog', 'https://www.chiotchaton.com/2024/01/the-entlebucher-mountain-dog-loyal-and.html');
    createKeywordLink('Setter', 'https://www.chiotchaton.com/2024/01/the-graceful-and-intelligent-english.html');
    createKeywordLink('English Toy Spaniel', 'https://www.chiotchaton.com/2024/01/the-history-and-characteristics-of.html');
    createKeywordLink('Eskimo dog', 'https://www.chiotchaton.com/2024/01/the-incredible-adaptability-of-eskimo.html');
    createKeywordLink('Foxhound', 'https://www.chiotchaton.com/2024/01/uncovering-history-and-characteristics.html');
    // Ajoutez autant de mots-clés et de liens que nécessaire
}

// Attendez que la page soit entièrement chargée avant d'exécuter le script
if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
    runScript();
} else {
    document.addEventListener('DOMContentLoaded', runScript);
}

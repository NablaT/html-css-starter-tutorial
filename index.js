document.addEventListener('DOMContentLoaded', function () {
    // Sélectionner tous les boutons de catégorie
    var categoryButtons = document.querySelectorAll('.category');

    // Sélectionner le lien du menu que nous voulons modifier
    var storiesLink = document.querySelector('a[href="#stories"]');

    // Ajouter un écouteur d'événements à chaque bouton
    categoryButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // variable `this` fait référence à l'objet qui a déclencher l'événement
            console.log("Bouton cliqué", this);
            // Mettre à jour le texte du lien avec le texte du bouton
            storiesLink.textContent = this.textContent;
        });
    });
});
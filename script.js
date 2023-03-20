/* Récupère les touches avec document.querySelectorAll, [] transforme en tableau et on récupère tout avec spread (...)
('.bouton') Récupère le css. le bouton avant bouton précise que l'on récupère tout. */
const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);
/* Récupère la liste keycode. keydown = Une touche est presser. click event = quand le touche est cliqué.
 .map prend chaque élément d'un tab, fait qlq chose avec une fonction callback et return le résultat sous forme de tab.*/
const ecran = document.querySelector('.ecran');

//event keydown (e) = event
// param => expression
document.addEventListener('keydown', (e) => 
// fonction qui récupère la valeur de keycode et la convertie en phrase avec toString
{
    const valeur = e.keyCode.toString();
    moncalcul(valeur)
})
//event click
document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    moncalcul(valeur)
})
// Fonction calcul♥
function moncalcul(valeur){
// Si listeKeycode contient une valeur 
    if (listeKeycode.includes(valeur)) {
        switch (valeur) { 
            // Quand on clique sur C       
            case '8':
                // Récupère le texte à l'intérieur de l'écran et on le fixe à 'rien'
                ecran.textContent = "";
                break;
               //Quand on clique sur égal on use eval() pour calculer ce qu'il y a dans l'écran quand on clique sur égal.
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                // Récupère et renvoie l'index du Keycode
                const indexKeycode = listeKeycode.indexOf(valeur);
                // Récupère la touche sur laquelle on à appuyé
                const touche = touches[indexKeycode];
                //resultat du calcul, .innerHTML récupère ou définit la syntaxe HTML décrivant les descendants de l'élément.
                ecran.textContent += touche.innerHTML;
        }
    }
}
// Event qui prévient l'utilisateur qu'il y a une erreur
window.addEventListener('error', (e) => {
    alert('Tu as du te tromper: ' + e.message)
})
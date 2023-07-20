//cette methode permet d'afficher une fenêtre qui permet à l'utilisateur de rentrer 

var reponse_player1 = prompt("Veuillez saisir entre un des mots affiché ( rock, paper, scissors) ?");

//Cette fonction permet vérifier la conformité de la réponse de l'utilisateur
function getPlayerChoice(reponse_player1){
    reponse_player1 = reponse_player1.toLowerCase();
    const tab = ['rock','paper','scissors'];
    for(let i=0; i<tab.length; i++){
        if(reponse_player1 === tab[i]){
            return reponse_player1;
        }else{
            console.log ("la valeur que vous avez rentrez ne correspond pas aux mots quivous ont étaient proposés.");  
        }
    }
}
//Cette fonction me permet de retourner une reponse donner par l'ordinateur de manière aléatoire 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  

function getComputerChoice(){
    var nbr_aleatoire = getRandomInt(3);
    const tab = ['rock','paper','scissors'];
    
    return tab[nbr_aleatoire];
}

console.log(getPlayerChoice(reponse_player1));
console.log(getComputerChoice());
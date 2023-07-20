//j'ai créer une variable assigné  à un objet date
const myDate = new Date("July 24, 2023 8:00");
const jour_actuel = myDate.getDay();
const heure_du_jour_actuel = myDate.getHours();
let jour_de_la_semaine = 'nous sommes un jour de semaine.';
let jour_durant_le_weekend = 'nous sommes un jour de weekend.';

console.log(jour_actuel);

if(jour_actuel == 1, 2, 3, 4,5){
    if(((jour_actuel == 5)&&(heure_du_jour_actuel>17))||((jour_actuel == 1)&&(heure_du_jour_actuel<9))){
        console.log(jour_durant_le_weekend);
    }else{
        console.log(jour_de_la_semaine);
    }

}else{
    //if(jour_actuel == 0,6){
        console.log(jour_durant_le_weekend);
    //}
}


 

const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

buttons.forEach((button) =>{
button.addEventListener("click",(e) => {
result.textContent += e.target.id; //si j'avais mis que le égale il m"écraserait mes résultats alors qu'avec += il ajoute à l'affichage de la calculatrice  les à côté en non remplacer par d'autre
console.log(result);//textContent m'envois le résutat de recherche de ma console dans résult
})
})

//maintenant il faut dire à javascript de calculer ce qu'il affiche il y a une méthode pour cela

// console.log(equal);//pas besoin de déclarer notre boutton puis js connais equal on peut donc passer à l'étape suivante la fonction


equal.addEventListener("click",()=>{ //au clic je veux que tu me mets le résultat dans result et ensuite textContent m'affiche le résultat dans le h3
    result.textContent = eval(result.textContent);//la méthode eval permet de prendre tout ce qui est dans result de le calculer pour l'envoyer ensuite dans texteContent
});

//j'appuie sur egual sa va déclencher addEventListener du click aprés il calcul dans eval(result.textContent) pour l'injecter dans result.textContent


// je vais m'occuper du C du CLEAR et connu de javascript pas besoin de le pointer comme pour equal je peux passer directement a ma fonction

clear.addEventListener("click",()=>{
 result.textContent = "";

});

//rappel les textContent son pour écrire les contens texte dans les balises!!!!!
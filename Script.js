let prenom = "Emilia";
let age = 20;

//alert("je m'appelle Emilia et j'ai 20 ans");
//alert("je m'appelle "+prenom+" et j'ai "+age+" ans et je suis heureuse d'apprendre js");

prenom = "Moussa";
age = 21;

let prenomUser = "Emilia";
let nomUser = "Kitanovski";

console.log(prenom+" m'apprend le language de programmation JavaScript");
console.log(age);

function afficher(){
    prenomUser = document.getElementById("prenomUtilisateur");
    nomUser = document.getElementById("nomUtilisateur");

    console.log(prenomUser.value);
    console.log(nomUser.value);
}

function changeInformation(){
    console.log(prenomUser,nomUser)
    let modifPrenom = document.getElementById("changePrenom");
    let modifNom = document.getElementById("changeNom");

    prenomUser = modifPrenom.value
    nomUser = modifNom.value

    console.log(prenomUser,nomUser)


}



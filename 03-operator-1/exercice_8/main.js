let salaireMensuel = 500;

let loyer = 0.3;

let nourriture = 0.2;

let transport = 0.1;

let autresDepenses = 50; // valeur initiale
autresDepenses += 25;     // ajoute 25

let totalDepenses = loyer + nourriture + transport + autresDepenses;

let reste = salaireMensuel - totalDepenses;

if (reste >= 100) {
    console.log("Budget bien géré");
} else {
    console.log("Attention, budget serré");
}

let loisirs = salaireMensuel * 0.15;   // 15% du salaire
totalDepenses = loyer + nourriture + transport + autresDepenses + loisirs;
reste = salaireMensuel - totalDepenses;

console.log("Pourcentage Loyer:", (loyer / salaireMensuel) * 100, "%");
console.log("Pourcentage Nourriture:", (nourriture / salaireMensuel) * 100, "%");
console.log("Pourcentage Transport:", (transport / salaireMensuel) * 100, "%");
console.log("Pourcentage Autres:", (autresDepenses / salaireMensuel) * 100, "%");
console.log("Pourcentage Loisirs:", (loisirs / salaireMensuel) * 100, "%");

salaireMensuel = salaireMensuel * 1.10; // augmentation de 10%

loyer = salaireMensuel * 0.3;
nourriture = salaireMensuel * 0.2;
transport = salaireMensuel * 0.1;
loisirs = salaireMensuel * 0.15;

// autresDepenses reste pareil si c'est fixe, sinon on peut l'ajuster
totalDepenses = loyer + nourriture + transport + autresDepenses + loisirs;
reste = salaireMensuel - totalDepenses;

if (totalDepenses > salaireMensuel * 0.9) {
    console.log("Dépenses trop élevées, réduisez vos charges");
}

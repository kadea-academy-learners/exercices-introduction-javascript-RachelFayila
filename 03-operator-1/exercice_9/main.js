// Valeur du patrimoine
let maison = 60000000;
let terrains = 40000000;
let liquidites = 20000000;

// Calcul du total
let totalPatrimoine = maison + terrains + liquidites;
console.log("Patrimoine total :", totalPatrimoine, "CDF");

// Répartition par catégorie
let partEnfants = totalPatrimoine * 0.75; // 75% pour les enfants
let partFamille = totalPatrimoine * 0.25; // 25% pour époux + frères/nièce

console.log("\n Répartition par catégorie");
console.log("Part des enfants (75%) :", partEnfants, "CDF");
console.log("Part du conjoint + frères/nièce (25%) :", partFamille, "CDF");

// Répartition de la part des enfants (3 parts : Paul, Marie, Alain représenté)
let partParEnfant = partEnfants / 3;
let partPaul = partParEnfant;
let partMarie = partParEnfant;

// Alain étant décédé, sa part est partagée entre Éric et Claire
let partAlainTotal = partParEnfant;
let partEric = partAlainTotal / 2;
let partClaire = partAlainTotal / 2;

console.log("\n Répartition parmi les enfants");
console.log("Paul reçoit :", partPaul, "CDF");
console.log("Marie reçoit :", partMarie, "CDF");
console.log("Alain (représenté par Éric et Claire) reçoit :", partAlainTotal, "CDF");
console.log("   → Éric reçoit :", partEric, "CDF");
console.log("   → Claire reçoit :", partClaire, "CDF");

// Répartition de la part famille (3 parts : Madame, Joseph, Sarah)
let partParMembreFamille = partFamille / 3;
let partMadame = partParMembreFamille;
let partJoseph = partParMembreFamille;
let partSarah = partParMembreFamille;

console.log("\n Répartition conjoint + frères/nièce");
console.log("Madame MUKUNA reçoit :", partMadame, "CDF");
console.log("Joseph reçoit :", partJoseph, "CDF");
console.log("Sarah reçoit :", partSarah, "CDF");

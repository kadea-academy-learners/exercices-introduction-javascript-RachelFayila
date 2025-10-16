
### Contexte
Vous êtes en train de gérer un budget mensuel simple. Vous avez un salaire mensuel fixe et devez répartir vos dépenses en différentes catégories :
 loyer, nourriture, transport, et autres dépenses.
 L'objectif est de calculer vos dépenses totales et de déterminer combien il vous reste après avoir payé toutes vos charges.

### Tâches
    1. Attribuer la valeur 500 à la variable `salaireMensuel`.

    2. Calculer la valeur de `loyer` en prenant 30% de `salaireMensuel`.


    3. Calculer la valeur de `nourriture` en prenant 20% de `salaireMensuel`.

    4. Calculer la valeur de `transport` en prenant 10% de `salaireMensuel`.

    5. Ajouter 25 à la variable `autresDepenses` initialisée à 50.

    6. Calculer la somme des dépenses (`loyer`, `nourriture`, `transport`, et `autresDepenses`) et l'attribuer à `totalDepenses`.

    7. Calculer le reste (`salaireMensuel - totalDepenses`) et l'attribuer à la variable `reste`.
<!--
    8. Vérifier si `reste` est supérieur ou égal à 100. Si oui, afficher "Budget bien géré", sinon afficher "Attention, budget serré".

    9. Ajouter une nouvelle catégorie de dépense appelée `loisirs`, initialisée à 15% de `salaireMensuel`, et recalculer `totalDepenses` et `reste`.

    10. Calculer le pourcentage du salaire mensuel utilisé pour chaque catégorie de dépense (`loyer`, `nourriture`, `transport`, `autresDepenses`, et `loisirs`) et afficher les résultats.

    11. Simuler une augmentation de 10% du `salaireMensuel` et recalculer toutes les valeurs (dépenses, total, reste, pourcentages).

    12. Ajouter une condition pour vérifier si les dépenses totales dépassent 90% du `salaireMensuel`. Si oui, afficher "Dépenses trop élevées, réduisez vos charges".
-->





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


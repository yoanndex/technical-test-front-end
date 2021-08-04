# Test technique pour le poste de développeur front-end 

## Introduction

Dans le cadre de la recherche du candidat pour le poste de [développeur front-end](https://www.welcometothejungle.com/fr/companies/la-ruche-qui-dit-oui/jobs/developpeur-front-end-h-f_paris) à La Ruche Qui Dit Oui!, nous avons préparé un test technique.

## Objectifs

Le but est d'évaluer le candidat sur sa manière de gérer des appels à une API, [Open Food Facts](https://wiki.openfoodfacts.org/Main_Page), ainsi que de traiter les données reçues en React.

## Consignes

Vous allez faire un moteur de recherche très simple qui doit permettre de rechercher des produits par nom, de les afficher dans une liste et de faire une page pour voir chaque produit.
Nous vous encourageons à utiliser [Create React App](https://github.com/facebook/create-react-app) avec [React Router](https://reactrouter.com/web/guides/quick-start).
Le code doit être hébergé sur un gestionnaire de version git au choix. (exemples: github, gitlab, bitbucket)
La qualité du code sera aussi évaluée.

### Le moteur de recherche

Cette première partie doit se servir de l'[endpoint de recherche](https://wiki.openfoodfacts.org/API/Read/Search). Une simple recherche par nom suffit, la pagination est optionnelle. Le résultat de cette recherche doit apparaitre sous forme de liste avec les informations suivantes:
- le nom du produit
- la photo du produit
- la liste de ses allergens
- un lien vers la page produit

### L'affichage d'un produit

La page d'un produit doit en n'afficher qu'un seul. Vous pouvez vous servir de cet [endpoint](https://wiki.openfoodfacts.org/API/Read/Product).
Les informations requises sur le produit sont les suivantes:
- le nom du produit
- la photo du produit
- la liste de ses allergens
  
Vous pouvez compléter cette page avec d'autres informations issues du retour de l'API.

### Bonus

Si vous voulez aller plus loin, vous pouvez mettre en place la pagination sur la recherche ainsi que des filtres.

## Notes

Il n'y a pas de limite de temps pour faire ce test.
Si vous avez des questions, n'hésitez pas à les poser.
Bon courage!

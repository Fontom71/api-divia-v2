# Divia API

Version 2 (améliorée) de l'API Divia.

Désormais l'api est entièrement faite en TypeScript et est plus facile à utiliser. Chaque ligne et chaque arrêt est maintenant un objet avec des méthodes pour les manipuler.

Puisque [l'ancienne API de Keolis](http://timeo3.keolis.com/relais/217.php) n'est plus disponible, celle-ci utilise l'API du [site de Divia](https://www.divia.fr/bus-tram) qui renvoie un extrait de page HTML dans lequel se trouve les horaires des prochains passages.

## Importation de l'API :

- Avec ESM :
  ```js
  import ApiDivia from "api-divia-v2";
  ```
- Avec CommonJS :
  ```js
  const ApiDivia = require("api-divia-v2");
  ```
- Via un CDN :
  ```html
  <script src="https://cdn.jsdelivr.net/npm/api-divia-v2/dist/api-divia-v2.min.js"></script>
  ```

## Utilisation

Exemple :

```js
const api = new ApiDivia();
// Les données sont chargés dans le constructeur, mais vous pouvez les recharger avec :
// await api.apiClient.fetchLinesAndStops();

(async () => {
  // Récupère la ligne :
  const line = api.findLine("T1");
  // ou :
  const line = api.getLine("82");

  // Récupère l'arrêt :
  const stop = line.findStop("République T1");
  // ou :
  const stop = line.getStop("1560");
  // ou directement :
  const stop = api.findStop("T1");

  // Récupère les prochains passages :
  console.log(await api.getStops());
})();
```

Chaque ligne possède deux directions : `A` et `R`. `A` est utilisé par défaut dans l'API.

Pour chaque Line ou Stop, vous pouvez récupérer les données fournies par Divia via la propriété `data`.

## Fonctionnement

L'API récupère dans un premier temps les données du réseau Divia à cette adresse : https://bo-api.divia.fr/api/reseau/type/json afin de pouvoir récupérer les identifiants et informations des lignes et arrêts. Vous pouvez donc si vous le souhaitez mettre en cache la variable JSON `api.lines` et `api.stops` afin d'éviter de refaire la requête à chaque démarrage de votre application.

Pour récupérer les prochains passages Totem, il faut faire une requête HTTP POST à cette adresse : https://www.divia.fr/bus-tram?type=479, avec le contenu application/x-www-form-urlencoded suivant :

- `requete=arret_prochainpassage`
- `requete_val[id_ligne]=<id_ligne>`
- `requete_val[id_arret]=<id_arrêt>`
  Note : bien penser à encoder les crochets avec URL encode (par exemple : `requete_val%5Bid_ligne%5D`).

## Licence

Licence MIT

Copyright (c) 2024 - Fontom's

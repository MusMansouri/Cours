## Les bases de l'asynchronisme en JS

### **1. Comprendre l'Asynchronisme en JavaScript**

En JavaScript, la plupart des opérations, comme les requêtes réseau (HTTP), l'accès à des fichiers ou des bases de données, sont asynchrones. Cela signifie qu'elles ne se terminent pas immédiatement et que JavaScript continue à exécuter d'autres parties du code pendant que ces opérations sont en cours.

#### **Exécution Synchrone vs. Asynchrone :**

- **Synchrone :** Les instructions sont exécutées une par une, en bloquant l'exécution jusqu'à ce que chaque instruction soit terminée.

  ```javascript
  console.log("Début");
  console.log("Milieu");
  console.log("Fin");
  // Sortie : Début, Milieu, Fin
  ```

- **Asynchrone :** Les instructions asynchrones sont démarrées mais ne bloquent pas l'exécution des autres instructions.

  ```javascript
  console.log("Début");
  setTimeout(() => console.log("Milieu"), 1000); // Exécuté après 1 seconde
  console.log("Fin");
  // Sortie : Début, Fin, Milieu (dans cet ordre)
  ```

### **2. Les Promesses en JavaScript**

Une promesse est un objet qui représente la complétion (ou l'échec) future d'une opération asynchrone. Une promesse peut être dans l'un des trois états suivants :

- **Pending (En attente)** : Initiale, en attente d'accomplissement.
- **Fulfilled (Résolue)** : L'opération a réussi.
- **Rejected (Rejetée)** : L'opération a échoué.

#### **Créer et Utiliser une Promesse :**

Voici comment créer une promesse et gérer ses résultats avec `.then()` et `.catch()` :

```javascript
// Création d'une promesse
const maPromesse = new Promise((resolve, reject) => {
  let reussite = true; // Imaginons un succès pour cette démonstration
  if (reussite) {
    resolve("Succès !");
  } else {
    reject("Échec !");
  }
});

// Utilisation de la promesse
maPromesse
  .then((message) => {
    console.log(message); // Affiche "Succès !" si la promesse est résolue
  })
  .catch((erreur) => {
    console.log(erreur); // Affiche "Échec !" si la promesse est rejetée
  });
```

#### **Promesses avec des Opérations Asynchrones :**

Les promesses sont souvent utilisées avec des opérations asynchrones telles que des requêtes API :

```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json()) // Transformation de la réponse en JSON
  .then((data) => console.log(data)) // Affichage des données reçues
  .catch((error) => console.error("Erreur :", error));
```

### **3. `async/await` : Une Gestion Simplifiée des Promesses**

`async/await` est une syntaxe introduite en ES2017 (ES8) qui simplifie l'écriture de code asynchrone basé sur des promesses, rendant le code plus lisible et facile à comprendre.

- **`async`** : Devant une fonction, indique que cette fonction retourne une promesse.
- **`await`** : Suspend l'exécution de la fonction `async` jusqu'à ce que la promesse soit résolue ou rejetée.

#### **Exemple Simple d’`async/await` :**

Voici comment utiliser `async/await` pour gérer une promesse :

```javascript
// Fonction asynchrone utilisant async/await
const obtenirDonnees = async () => {
  try {
    const response = await fetch("https://api.example.com/data"); // Attend la résolution de fetch
    const data = await response.json(); // Attend la conversion en JSON
    console.log(data);
  } catch (error) {
    console.error("Erreur :", error); // Capture et affiche les erreurs
  }
};

obtenirDonnees();
```

### **4. Pourquoi Utiliser `async/await` ?**

- **Lisibilité :** `async/await` permet d'écrire du code asynchrone qui ressemble à du code synchrone, ce qui rend le flux logique plus facile à suivre.
- **Gestion des Erreurs :** Avec `try/catch`, la gestion des erreurs dans `async/await` est plus intuitive que l'approche basée sur `.catch()` avec des promesses.
- **Chaînage Plus Simple :** Moins de code imbriqué et une meilleure gestion des dépendances entre les opérations.

### **Résumé :**

- **Asynchronisme :** Permet d'exécuter d'autres opérations pendant que certaines tâches sont en cours.
- **Promesses :** Offrent une méthode structurée pour gérer le code asynchrone en représentant l'état futur d'une opération.
- **`async/await` :** Simplifient l'écriture et la gestion des promesses, rendant le code plus lisible et plus facile à maintenir.

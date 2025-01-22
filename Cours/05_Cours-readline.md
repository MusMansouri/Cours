## Le module readline

Le module `readline` est également un module intégré à Node. Il facilite la lecture de données depuis un flux de données, généralement une entrée utilisateur en mode interactif. Il est souvent utilisé pour créer des interfaces en ligne de commande (CLI).

### Utilisation de base

Pour pouvoir l'utiliser, vous devez déjà l'importer.
Ensuite, vous pouvez créer une interface en utilisant la méthode `createInterface`. Cette méthode va prendre deux arguments: un objet de configuration et deux flux de données.

```js
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
```

### Méthodes principales
- `question()`:
La méthode question() est utilisée pour poser une questino à l'utilisateur et en attendre une réponse
```js
interface.question('Quel est votre nom ?', (name) => {
    console.log(`Bonjour ${name}`)
    interface.close()
})
```

La méthode close() est utilisée pour fermer l'interface une fois que vous avez terminé de lire les données.

### Evènements
Le module readline émet également des évènements que vous pouvez écouter pour traiter différentes actions. Les évènements sont liés à la méthode `interface.on()`

- `line`: Evenement qui est émis à chaque fois qu'une ligne est validée (pression sur Entrée). Le callback associé reçoit la ligne en argument.

- `close`: Cet évènement est émis lorsque l'interface est fermée

```js
// Import du module
const readline = require('readline');

// Création de l'interface
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Interaction avec l'utilisateur
interface.question('Quel est votre nom ?', (name) => {
    console.log(`Bonjour ${name}`)
    interface.close()
})

// Evenement lié à la fermeture
interface.on('close', () => {
    console.log("L'interface est fermée")
})
```
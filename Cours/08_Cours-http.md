## Le module http

Le module `http` permet de créer des serveurs HTTP et de gérer les requêtes et les réponses du serveur. Il est basé sur les protocoles HTTP/1.1 et supporte les principales méthodes HTTP telles que `GET`, `POST`, `PUT`, `DELETE` etc.

### Principales méthodes et concepts du module `http`

1. Création d'un serveur HTTP
La méthode la plus courante du module http est `http.createServer()`.

```js
const server = http.createServer((req, res) => {
    // Code pour gérer la requête
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
```
- `req` (Request): Objet représentant la requête entrante, contenant des informations sur ce que le client a demandé.

- `res` (Response): Objet permettant d'envoyer une réponse au client.

### Exemple: Création d'un serveur basique

```js
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200; // Code de statut HTTP (200: OK)
    res.setHeader('Content-Type': 'text/plain') // Définit le type de contenu de la réponse
    res.end('Hello World!') // Envoyer la réponse
})

const port = 3000;
server.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`)
})
```

- `res.statusCode`: Définit le code de statut de la réponse HTTP (200 pour OK, 404 pour Not Found etc.)
- `res.setHeader()`: Définit un en-tête HTTP (ici, le type de contenu)
- `res.end()`: Termine la réponse et envoie les données au client.

### Gestion des requêtes

```js
const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html'})
        res.end('<h1>Bienvenue sur la page d\'accueil</h1>')
    } else if (req.url === "/about" && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html'})
        res.end('<h1>A propos de nous</h1>')
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html'})
        res.end('<h1>404 - Page non trouvée</h1>')
    }
})
```

- `req.url`: Retourne l'URL demandé par le client
- `req.method`: Retourne la méthode HTTP utilisée (GET, POST etc.)

### Lecture des données (Requête POST)

Pour traiter les données envoyées par une requête POST, vous pouvez écouter l'évènement `data` sur l'objet `req` pour recevoir les morceaux de données, puis l'évènement `end` pour savoir quand toute les données ont été reçues.

```js
const server = http.createServer((req, res) => {
    if (req.method = 'POST') {
        let body = '';

        // Lire les données envoyées par le client
        req.on('data', (chunk) => {
            body += chunk.toString();
        })

        // Une fois que toutes les données ont été traitées
        req.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'text/plain'})
        res.end('Données reçues')
        })
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain'})
        res.end('Utilisez la requête POST svp')
    }
})
```

### Redirections HTTP

Vous pouvez rediriger une requête vers une autre URL en utilisant le code de statut 301 (redirection permanente) ou 302 (redirection temporaire)

```js
const server = http.createServer((req, res) => {
    if (req.url === '/old-page') {
        res.writeHead(301, { Location: '/new-page'});
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html'});
        res.end('<h1>404 - Page non trouvée</h1>')
    }
})
```

### Envoi de JSON en réponse

Pour envoyer une réponse JSON, il suffit de définir le type de contenu comme `application/json` et d'utiliser `JSON.stringify()` pour convertir un objet JavaScript en chaîne JSON.

```js
const serv = http.createServer((req, res) => {
    if (req.url === '/api' && req.method === 'GET') {
        const data = {
            message: 'Hello world!',
            timestamp: Date.now()
        };

        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify(data))
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html'});
        res.end('<h1>404 - Page non trouvée</h1>')
    }
});
```
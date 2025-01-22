## Bases d'architecture web

### SSR (Server Side Rendering)

1. C'est le serveur qui s'occupe du rendu de notre site. Ce qui signifie que le client reçoit le site complet durant sa requête initiale

2. **SEO**: Le SSR est la meilleure approche en terme de SEO car les bots de moteurs de recherche peuvent parcourir le contenu et l'ajouter.

3. **Performance:** Les performances en SSR sont supérieures comme tout le rendu est fait côté serveur. Le chargement sera invisible client. C'est donc adapté pour compenser des connexions peu puissantes ou plus lentes.

4. **Charge du serveur:** En devenant générer côté serveur à chaque requête, le serveur est beaucoup plus actif et sa charge peut monter vite. Ce qui n'a aucune chance d'arriver en CSR

Le SSR nécessite un back-end plus fourni et la bonne utilisation de frameworks back.

### CSR (Client Side Rendering)

1. En CSR, le serveur n'envoie que le minimum fonctionnel avec des placeholders pour le contenu. Le contenu réel est chargé et rendu côté client par le JS

2. **Updates dynamiques:** Le principal intérêt du CSR est de permettre des mises à jour de contenu dynamiques sans rechargement de page. Idéal pour les SPA où le contenu change souvent

3. **Facilité:** Le CSR est plus facile à mettre en place grâce aux puissants frameworks front actuels (React, Vue, Angular)

Attention, le CSR pose des difficultés de référencement. L'un de ses seuls problèmes est la gestion du SEO.
---
layout: doc
---

# Politique relative aux cookies — Sono AAC Communicator

**Dernière mise à jour : 23 février 2026**

---

## 1. Que sont les cookies ?

Les cookies sont de petits fichiers texte placés sur un appareil par un site web ou un service web pour stocker des informations entre les sessions. Il s'agit d'une technologie de navigateur web et ils ne font pas intrinsèquement partie des applications mobiles natives.

---

## 2. Cette Application utilise-t-elle des cookies ?

**Essentiellement non.** Sono est une application mobile native. Dans le cadre d'une utilisation normale — parcourir les symboles, construire des phrases, lire la sortie vocale ou utiliser la fonctionnalité de phrases assistée par IA — aucun cookie, session web ni stockage navigateur n'est utilisé.

L'Application comprend un composant WebView intégré utilisé **uniquement** pour afficher les documents légaux (cette Politique relative aux cookies, la Politique de confidentialité et les Conditions générales d'utilisation) lorsque vous choisissez de les consulter depuis l'écran d'accueil de l'Application. Selon la manière dont ces documents sont hébergés, cette WebView peut ou non transmettre des cookies à votre appareil (voir la Section 4).

Il n'existe aucun cookie de suivi, cookie d'analyse ni cookie publicitaire utilisé à quelque moment que ce soit durant le fonctionnement normal de l'Application.

---

## 3. Stockage local utilisé par l'Application

Bien que l'Application n'utilise pas de cookies durant son fonctionnement normal, elle stocke un petit nombre de valeurs de préférences sur votre appareil via le service de cache interne de l'Application. Ces données sont fonctionnellement nécessaires au fonctionnement de l'Application et ne vous suivent pas entre les applications ou les appareils.

Les données suivantes sont stockées localement sur votre appareil :

| Élément de stockage | Finalité | Format | Persisté sur disque |
|---|---|---|---|
| `gsaCache.db` | Magasin de préférences de l'Application — contient le nom d'affichage, le genre, le paramètre IA, la sélection de voix TTS et l'index des photos de symboles personnalisés | Base de données clé-valeur Sembast | Oui |
| Fichiers de photos personnalisées | Photos personnelles attribuées aux symboles par l'accompagnant | Fichiers image | Oui |
| Historique des messages | Phrases récemment prononcées (session en cours uniquement) | En mémoire uniquement | **Non** |
| Modèle de langage IA | Le fichier LLM sur l'appareil (si téléchargé) | Binaire GGUF | Oui |
| Modèles vocaux TTS | Fichiers de synthèse vocale hors ligne (si téléchargés) | Binaire de modèle | Oui |

Tous ces éléments sont stockés dans le répertoire sandboxisé privé de l'Application sur votre appareil. Ils ne sont pas accessibles à d'autres applications et ne sont pas transmis à un serveur par l'Application.

Les préférences de l'Application étant stockées sous forme de cookies fonctionnels dans la base de données `gsaCache.db`, elles sont soumises au mécanisme de consentement aux cookies de l'Application. Si le consentement aux cookies fonctionnels est révoqué, l'Application effacera la base de données de préférences lors du prochain acquittement du consentement.

---

## 4. WebView intégrée pour l'affichage des documents légaux

L'Application comprend un composant WebView intégré (propulsé par `webview_flutter`) utilisé **exclusivement** pour afficher les documents légaux — cette Politique relative aux cookies, la Politique de confidentialité et les Conditions générales d'utilisation. Cette WebView est ouverte uniquement lorsque vous appuyez délibérément sur un lien vers un document légal depuis l'écran d'accueil de l'Application.

**Si les documents légaux sont hébergés à une URL distante :** le serveur qui délivre ces documents peut définir des cookies ou utiliser d'autres mécanismes de suivi dans la WebView, de la même manière que tout site web visité dans un navigateur. Dans ce cas, les pratiques de confidentialité et en matière de cookies de ce service d'hébergement s'appliquent — et non la présente politique.

**Si les documents légaux sont servis depuis les ressources locales de l'Application :** aucune requête réseau externe n'est effectuée, et aucun cookie n'est défini ni reçu.

Aucun autre composant WebView, navigateur intégré ni contenu web tiers n'est chargé durant quelque autre partie du fonctionnement normal de l'Application.

---

## 5. Services tiers et leur propre stockage

Lorsque vous téléchargez volontairement des fichiers optionnels de modèles IA ou TTS, l'Application effectue des requêtes HTTPS vers les serveurs tiers suivants. Ces serveurs peuvent définir leurs propres cookies ou utiliser leurs propres mécanismes de suivi si vous les visitez ultérieurement dans un navigateur, mais ils ne définissent pas de cookies sur votre appareil via l'Application elle-même.

| Service | Ce qui se passe | Politique de cookies/confidentialité |
|---|---|---|
| Hugging Face (`huggingface.co`) | Téléchargement de fichier uniquement — aucun cookie défini via l'Application | [huggingface.co/privacy](https://huggingface.co/privacy) |
| GitHub (`github.com`) | Téléchargement de fichier uniquement — aucun cookie défini via l'Application | [docs.github.com/en/site-policy/privacy-policies](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) |
| Apple TTS (solution de repli, iOS) | Géré par le système d'exploitation — voir la politique de confidentialité d'Apple | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| Google TTS (solution de repli, Android) | Géré par le système d'exploitation — voir la politique de confidentialité de Google | [policies.google.com/privacy](https://policies.google.com/privacy) |

---

## 6. Suppression de tout le stockage de l'Application

Vous pouvez supprimer toutes les données stockées par l'Application à tout moment en **désinstallant l'Application** de votre appareil. Cela supprimera définitivement tous les fichiers de préférences, les photos personnalisées et les fichiers de modèles téléchargés. La procédure varie légèrement selon la plateforme :

**iOS :** Accédez à Réglages > Général > Stockage iPhone (ou Stockage iPad) > Sono > Supprimer l'app.

**Android :** Accédez à Paramètres > Applications > Sono > Désinstaller. Vous pouvez également utiliser Paramètres > Applications > Sono > Stockage > Effacer les données pour supprimer toutes les données stockées sans désinstaller l'Application.

Vous pouvez également supprimer les photos personnalisées individuelles à tout moment en appuyant longuement sur une carte de symbole dans l'Application et en sélectionnant l'option de suppression de la photo personnalisée.

---

## 7. Modifications de cette politique

Nous pouvons mettre à jour cette Politique relative aux cookies de temps à autre. La date de « Dernière mise à jour » en haut de ce document reflète la révision la plus récente. Étant donné que cette Application n'utilise pas de cookies et que ses pratiques de stockage local n'évoluent qu'à l'occasion de mises à jour importantes de l'Application, les modifications de cette politique devraient être rares.

---

## 8. Contact

Si vous avez des questions concernant cette Politique relative aux cookies ou les pratiques de stockage local de l'Application, contactez-nous à :

> **Matan Ljubas**
> **lj.matan@gmail.com**

---

*Cette Politique relative aux cookies s'applique uniquement à l'application mobile native Sono. Elle ne s'applique pas à un site web ou un service web qui pourrait être associé à l'éditeur.*

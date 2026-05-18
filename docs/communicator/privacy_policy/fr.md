---
layout: doc
---

# Politique de confidentialité — Sono AAC Communicator

**Dernière mise à jour : 23 février 2026**

---

## 1. Introduction et identité du responsable du traitement

Sono est une application de communication par pictogrammes conçue pour aider les personnes à s'exprimer à l'aide d'images et de mots prononcés.

**Responsable du traitement :** L'entité responsable du traitement des données à caractère personnel en lien avec cette application est :

> **Matan Ljubas**
> Contact : **lj.matan@gmail.com**

**Représentant de l'UE (le cas échéant) :** Si l'éditeur est établi en dehors de l'Espace économique européen (EEE), un représentant au sein de l'UE est requis en vertu de l'article 27 du Règlement général sur la protection des données (RGPD). Lorsque cela est requis, le représentant de l'UE est :

> **[Nom et adresse du représentant de l'UE — à compléter si l'éditeur est établi hors EEE]**

**Le principe fondamental :** Sono est conçue pour fonctionner entièrement sur votre appareil. Elle ne collecte pas de données à caractère personnel à distance, ne crée pas de comptes utilisateur, ne vous suit pas et ne transmet pas votre activité de communication à un quelconque serveur.

---

## 2. Informations stockées sur votre appareil

Sono stocke une petite quantité de données de préférences localement sur votre appareil. Ces données ne quittent jamais l'appareil, sauf si vous effectuez explicitement une sauvegarde de votre appareil via un service tiers (tel qu'iCloud ou Google Drive), qui est régie par la politique de confidentialité de ce service.

| Donnée | Description | Emplacement |
|---|---|---|
| Nom d'affichage | Un nom que l'accompagnant définit pour l'utilisateur (ex. : « Alex ») | Système de fichiers de l'appareil |
| Préférence de genre | Préférence visuelle (neutre / masculin / féminin) pour les variantes d'illustrations | Système de fichiers de l'appareil |
| Activation de la correction de phrase par IA | Si le modèle de langage sur appareil est activé | Système de fichiers de l'appareil |
| Sélection de voix | La voix de synthèse vocale choisie | Système de fichiers de l'appareil |
| Photos de symboles personnalisées | Photos attribuées aux symboles de communication par l'accompagnant | Système de fichiers de l'appareil |
| Index des photos personnalisées | Une correspondance locale reliant les identifiants de symboles aux chemins des fichiers photos | Système de fichiers de l'appareil |

**L'historique des messages** (phrases récemment prononcées) est conservé **en mémoire uniquement** pendant la durée de la session d'application en cours. Il n'est pas écrit sur le disque et est définitivement perdu à la fermeture de l'application.

---

## 3. Utilisation de ces informations

Les informations listées ci-dessus sont utilisées uniquement pour faire fonctionner l'application sur votre appareil :

- **Nom d'affichage** — affiché comme message de bienvenue sur l'écran d'accueil.
- **Préférence de genre** — sélectionne les variantes d'illustrations adaptées au genre.
- **Activation de l'IA** — détermine si le modèle de langage sur appareil améliore les phrases prononcées.
- **Sélection de voix** — pilote le moteur de synthèse vocale.
- **Photos personnalisées** — affichées sur les cartes de symboles à la place des illustrations par défaut.

Aucune de ces informations n'est utilisée à des fins d'analyse, de publicité, de profilage, ou à quelque autre fin que l'exploitation locale de l'application sur votre appareil.

---

## 4. Base juridique du traitement (RGPD)

Lorsque le Règlement général sur la protection des données (UE) 2016/679 s'applique, les bases juridiques au titre de l'article 6 du RGPD pour le traitement des données décrites à la section 2 sont les suivantes :

| Donnée | Base juridique | Explication |
|---|---|---|
| Nom d'affichage, préférence de genre, activation de l'IA, sélection de voix | **Art. 6(1)(b) — Exécution d'un contrat** | Ces préférences sont nécessaires pour fournir les fonctionnalités essentielles de l'application telles que configurées par l'utilisateur/l'accompagnant. |
| Photos de symboles personnalisées | **Art. 6(1)(a) — Consentement** | L'accompagnant attribue explicitement une photo à un symbole. Le consentement peut être retiré à tout moment en supprimant la photo via le menu d'appui prolongé. |

Aucun traitement n'est fondé sur un profilage automatisé, et aucune décision de traitement n'a d'effets juridiques ou d'effets similaires significatifs sur un individu (voir également la section 13, Droit de ne pas faire l'objet d'une décision automatisée).

---

## 5. Intelligence artificielle sur l'appareil

Lorsque la fonctionnalité de correction de phrase par IA est activée, l'application utilise un grand modèle de langage (LLM) fonctionnant sur votre appareil pour rendre les phrases prononcées plus naturelles. Ce traitement s'effectue **entièrement sur votre appareil** :

- Le modèle (Qwen2.5-0.5B-Instruct, environ 400 Mo) est téléchargé une seule fois depuis un dépôt public (Hugging Face) et stocké localement.
- Aucune phrase, aucun symbole ni aucune autre saisie que vous effectuez ne sont jamais envoyés à un serveur externe pour un traitement par IA.
- Si la fonctionnalité IA est désactivée ou si le modèle n'a pas été téléchargé, l'application utilise un moteur grammatical à règles intégré.
- Aucun profilage, aucune prise de décision automatisée ni aucune inférence sur un individu n'est produite par la fonctionnalité IA.

---

## 6. Synthèse vocale

Sono propose deux modes de synthèse vocale :

**Voix hors ligne (recommandées) :** L'application peut télécharger des modèles vocaux spécifiques à une langue depuis un dépôt public (Sherpa-ONNX / GitHub releases). Une fois téléchargés, toute la synthèse vocale s'effectue entièrement sur votre appareil sans aucune transmission de données vers l'extérieur.

**Voix système de l'appareil (solution de repli) :** Lorsqu'aucune voix hors ligne n'est disponible pour la langue sélectionnée, l'application utilise le service de synthèse vocale intégré à votre appareil (fourni par Apple ou Google, selon votre appareil). Ces services système sont régis par les politiques de confidentialité d'Apple et de Google respectivement, et **peuvent transmettre le texte prononcé à leurs serveurs** pour le synthétiser. Vous pouvez éviter cela en téléchargeant une voix hors ligne dans **Paramètres > Voix**.

---

## 7. Connexions Internet optionnelles

Sono ne nécessite aucune connexion Internet obligatoire. L'application fonctionne entièrement hors ligne après installation.

La seule activité réseau qui se produit est lorsque vous choisissez de télécharger des ressources optionnelles :

- **Modèle de langage IA** — téléchargé depuis Hugging Face (`huggingface.co`) lorsque vous appuyez sur « Télécharger le modèle » dans Paramètres. Environ 400 Mo.
- **Modèles vocaux hors ligne** — téléchargés depuis les versions Sherpa-ONNX sur GitHub (`github.com`) lorsque vous sélectionnez et téléchargez une voix dans Paramètres. La taille du modèle varie selon la langue.

Ces téléchargements ne transfèrent que les données inhérentes à toute requête HTTPS (votre adresse IP et les en-têtes de requête de base). Aucune information personnelle, contenu de communication ou données d'utilisation n'est inclus dans ces requêtes. Une fois téléchargés, les modèles fonctionnent entièrement hors ligne.

---

## 8. Autorisations de l'appareil

L'application demande les autorisations d'appareil suivantes :

| Autorisation | Raison de la demande |
|---|---|
| **Appareil photo** | Pour prendre une photo et l'attribuer à un symbole de communication. Les photos sont stockées uniquement localement et ne sont jamais transmises. |
| **Bibliothèque de photos** | Pour sélectionner une photo existante et l'attribuer à un symbole de communication. La photo sélectionnée est copiée uniquement localement et n'est jamais transmise. |

L'application ne demande pas l'accès à la localisation, aux contacts, au microphone (pour l'enregistrement), au Bluetooth, aux données de santé, ni à toute autre autorisation sensible au-delà de celles listées ci-dessus.

---

## 9. Informations que nous ne collectons pas

Sono ne collecte, ne transmet ni ne stocke aucun des éléments suivants :

- Contenu des communications (phrases prononcées ou symboles appuyés)
- Schémas d'utilisation, durée de session ou fréquence d'utilisation
- Identifiants d'appareil, identifiants publicitaires ou données d'empreinte numérique
- Rapports de plantage ou journaux de diagnostic envoyés à un serveur distant
- Noms, adresses e-mail ou tout identifiant personnel au-delà de ceux saisis localement par l'accompagnant
- Données de localisation, quelle qu'en soit la nature
- Données biométriques ou relatives à la santé

Il n'existe aucun SDK d'analyse, aucun réseau publicitaire et aucune bibliothèque de suivi tierce intégrée dans l'application.

---

## 10. Services tiers

Les seuls services tiers impliqués dans l'application sont les sources optionnelles de téléchargement de modèles et les services de plateforme au niveau de l'appareil :

| Service | Rôle | Politique de confidentialité |
|---|---|---|
| Hugging Face (`huggingface.co`) | Héberge le fichier optionnel du modèle de langage IA | [huggingface.co/privacy](https://huggingface.co/privacy) |
| GitHub (`github.com`) | Héberge les archives optionnelles de modèles vocaux hors ligne | [docs.github.com/en/site-policy/privacy-policies](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) |
| Apple TTS (iOS, solution de repli) | Synthèse vocale de l'appareil en l'absence de voix hors ligne installée | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| Google TTS (Android, solution de repli) | Synthèse vocale de l'appareil en l'absence de voix hors ligne installée | [policies.google.com/privacy](https://policies.google.com/privacy) |

L'application n'entretient aucune relation avec des réseaux publicitaires, des prestataires d'analyse ou des courtiers en données.

---

## 11. Transferts internationaux de données

L'application elle-même ne transfère pas de données à caractère personnel à l'international. Cependant, lorsque vous choisissez de télécharger des fichiers de modèles IA ou TTS, ces requêtes sont envoyées à des serveurs exploités par Hugging Face et GitHub, qui sont basés aux États-Unis.

Ces téléchargements ne contiennent pas de données à caractère personnel au-delà des informations standard présentes dans toute requête HTTPS (adresse IP, en-têtes de requête). Aucun contenu de communication, préférence utilisateur ni information permettant d'identifier un individu n'est transmis.

Lorsque le RGPD s'applique, les transferts de données à caractère personnel vers les États-Unis se fondent sur :
- Le cadre de protection des données UE-États-Unis (lorsque le destinataire est certifié), ou
- Les clauses contractuelles types (CCT) adoptées par la Commission européenne, ou
- Le fait qu'aucune donnée à caractère personnel au sens du RGPD n'est transmise dans les requêtes concernées, rendant le chapitre V du RGPD inapplicable à ces transferts.

Pour le traitement effectué par Apple TTS et Google TTS (lorsqu'ils sont utilisés en solution de repli), veuillez vous référer aux politiques de confidentialité respectives d'Apple et de Google et à leurs mécanismes de transfert publiés.

---

## 12. Confidentialité des enfants

Sono est conçue pour aider des personnes de tous âges qui bénéficient de la communication par pictogrammes, y compris les enfants.

Étant donné que l'application ne collecte aucune donnée à caractère personnel à distance et fonctionne entièrement sur l'appareil, elle présente un risque minimal pour la vie privée de tous les utilisateurs, y compris les enfants.

**UE/EEE — Âge du consentement numérique (article 8 du RGPD) :** Dans l'Union européenne et l'Espace économique européen, l'âge auquel une personne peut consentir au traitement de données lié aux services numériques varie selon l'État membre (entre 13 et 16 ans). Lorsque l'application est utilisée par un enfant en dessous de l'âge du consentement numérique applicable, le consentement du titulaire de la responsabilité parentale est requis pour tout traitement de données. Pour cette application, le seul traitement nécessitant un consentement est l'attribution de photos personnalisées (voir section 4). Les parents et les tuteurs sont encouragés à examiner et configurer ces paramètres.

Si vous choisissez de télécharger un modèle IA ou TTS, ces téléchargements s'effectuent via une connexion HTTPS chiffrée. Les parents et tuteurs qui souhaitent empêcher tout accès Internet de l'application peuvent le faire en restreignant l'accès Internet au niveau de l'appareil ou du routeur — l'application continuera à fonctionner pleinement avec les modèles précédemment téléchargés.

---

## 13. Vos droits au titre du RGPD

Si vous résidez dans l'Espace économique européen, au Royaume-Uni ou dans une autre juridiction disposant d'une législation équivalente en matière de protection des données, vous disposez des droits suivants concernant les données à caractère personnel traitées dans le cadre de cette application. Étant donné que la quasi-totalité des données est stockée localement sur votre appareil et que vous en avez le contrôle direct, la plupart des droits peuvent être exercés par vous à tout moment directement via l'application.

| Droit | Comment l'exercer |
|---|---|
| **Droit d'accès (art. 15)** | Toutes les données stockées se trouvent sur votre appareil. Vous pouvez consulter le nom d'affichage et les paramètres directement dans Paramètres de l'accompagnant. Les photos personnalisées sont visibles sur le tableau de symboles. |
| **Droit de rectification (art. 16)** | Modifiez toute information stockée directement dans Paramètres de l'accompagnant à tout moment. |
| **Droit à l'effacement / « droit à l'oubli » (art. 17)** | Supprimez les photos personnalisées individuelles via le menu d'appui prolongé sur le symbole. Supprimez toutes les données de l'application en désinstallant l'application. |
| **Droit à la limitation du traitement (art. 18)** | Désactivez des fonctionnalités spécifiques (par ex. désactiver l'IA, supprimer une photo personnalisée) pour limiter le traitement associé. |
| **Droit à la portabilité des données (art. 20)** | Les données de l'application sont stockées dans des formats standard (texte brut, JSON, formats d'image courants) dans le répertoire sandboxisé de l'application. Sur les plateformes prises en charge, vous pouvez y accéder via les outils de sauvegarde de l'appareil. |
| **Droit d'opposition (art. 21)** | Vous pouvez vous opposer à tout moment au traitement fondé sur des intérêts légitimes en nous contactant (voir section 18). Lorsque le traitement est fondé sur le consentement, consultez le droit au retrait du consentement ci-dessous. |
| **Droit au retrait du consentement (art. 7(3))** | Lorsque le traitement est fondé sur le consentement (photos personnalisées), vous pouvez retirer votre consentement à tout moment en supprimant la photo. Le retrait ne remet pas en cause la licéité du traitement effectué avant celui-ci. |
| **Droit de ne pas faire l'objet d'une décision automatisée (art. 22)** | L'application n'effectue pas de prise de décision automatisée ni de profilage produisant des effets juridiques ou des effets similaires significatifs sur les individus. |

Pour exercer des droits qui ne peuvent pas être traités directement dans l'application, ou pour soulever une préoccupation concernant nos pratiques en matière de données, contactez-nous en utilisant les coordonnées de la section 18.

---

## 14. Conservation et suppression des données

**Données de session (historique des messages) :** Effacées automatiquement à chaque fermeture de l'application. Non persistées sur le disque.

**Données de préférence (nom, genre, activation, sélection de voix) :** Conservées sur l'appareil jusqu'à ce que l'accompagnant modifie manuellement le paramètre, ou jusqu'à la désinstallation de l'application.

**Photos personnalisées :** Conservées sur l'appareil jusqu'à leur suppression individuelle via le menu d'appui prolongé sur le symbole, ou jusqu'à la désinstallation de l'application.

**Fichiers de modèles IA et TTS :** Conservés sur l'appareil jusqu'à leur suppression via Paramètres, ou jusqu'à la désinstallation de l'application.

**Pour supprimer toutes les données de l'application :** La désinstallation de l'application de votre appareil supprime tous les fichiers stockés localement, y compris toutes les préférences, photos personnalisées et fichiers de modèles téléchargés.

Nous ne conservons aucune de ces informations sur nos propres serveurs, car elles ne nous sont jamais transmises.

---

## 15. Sécurité des données

Toutes les données stockées par l'application résident dans le conteneur sandboxisé privé de l'application sur votre appareil, qui est protégé par les mécanismes de sécurité intégrés à votre système d'exploitation (chiffrement du système de fichiers, isolation des processus, sandboxing des applications). L'application n'implémente pas de couches de chiffrement au-delà de celles fournies par le système d'exploitation.

Étant donné qu'aucune donnée à caractère personnel n'est transmise à notre infrastructure, il n'existe pas de données côté serveur détenues par nous qui pourraient être exposées en cas de violation de notre côté. Dans l'éventualité improbable où nous prendrions connaissance d'une vulnérabilité de sécurité dans l'application affectant des données à caractère personnel, nous en informerons les utilisateurs concernés via une mise à jour de l'application et, lorsque la loi l'exige, notifierons l'autorité de contrôle compétente dans les 72 heures suivant la prise de connaissance (article 33 du RGPD).

---

## 16. Accès aux paramètres de l'accompagnant

Les paramètres (y compris la possibilité de modifier le nom de l'utilisateur, la voix et les photos personnalisées) sont accessibles via un geste masqué — quatre appuis en deux secondes sur la zone de phrase. Ce mécanisme est conçu comme une simple barrière contre les modifications accidentelles, et non comme un système de contrôle d'accès robuste. Si vous avez besoin d'un contrôle d'accès strict, nous vous recommandons d'utiliser les fonctionnalités d'accès guidé ou de temps d'écran de votre appareil pour restreindre la navigation dans l'application.

---

## 17. Modifications de cette politique

Nous pouvons mettre à jour cette politique de confidentialité de temps à autre pour refléter les évolutions de l'application ou du droit applicable. Dans ce cas, la date de « Dernière mise à jour » en haut de ce document sera modifiée. Lorsque les modifications sont substantielles, nous vous en informerons via une notice dans l'application ou une mise à jour de l'application.

L'utilisation continue de l'application après la publication d'une modification vaut acceptation de la politique mise à jour, sauf si votre utilisation continue est fondée sur un droit nécessitant un nouveau consentement, auquel cas nous solliciterons ce consentement explicitement.

---

## 18. Contact, délégué à la protection des données et autorité de contrôle

**Contact pour les demandes relatives à la protection des données :**

> **Matan Ljubas**
> **[Adresse]**
> **lj.matan@gmail.com**

**Délégué à la protection des données (DPD) :** Si un délégué à la protection des données a été désigné, ses coordonnées sont :

> **[Nom et coordonnées du DPD — ou indiquer « Aucun DPD désigné » si non applicable]**

**Droit d'introduire une réclamation :** Si vous estimez que le traitement de vos données à caractère personnel enfreint le RGPD ou la législation nationale applicable en matière de protection des données, vous avez le droit d'introduire une réclamation auprès de l'autorité de contrôle de l'État membre de l'UE de votre résidence habituelle, de votre lieu de travail ou du lieu de l'infraction présumée. Une liste des autorités de contrôle de l'UE est disponible sur [edpb.europa.eu/about-edpb/about-edpb/members_en](https://www.edpb.europa.eu/about-edpb/about-edpb/members_en). Vous conservez également le droit de vous adresser à une juridiction.

---

*Cette politique de confidentialité s'applique à l'application Sono. Elle ne s'applique pas aux services tiers liés ou référencés dans le présent document, qui disposent de leurs propres politiques de confidentialité et de leurs propres responsabilités en tant que responsables du traitement.*

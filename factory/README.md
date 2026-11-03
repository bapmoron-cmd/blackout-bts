# BLACKOUT FACTORY — V1

Jeu d'enquête pédagogique sur la **protection des circuits électriques**, construit sur les **25 premières diapositives** du cours « Protéger les circuits électrique d'une installation » et les guides associés.

## Lancer le jeu
- Ouvrir https://bapmoron-cmd.github.io/blackout-bts/factory/ si GitHub Pages publie la branche main depuis la racine.
- Ou télécharger le contenu de ce dossier et ouvrir index.html dans un navigateur.
- En classe : 1 appareil par apprenti ou binôme ; saisir un **pseudonyme**, une équipe et un même code de salle.
- Pour projeter le classement : ajouter \`?board=1\` à l'adresse.

## Contenu V1
- Introduction narrative : panne industrielle fictive à l'usine Atlas.
- Trois personnages récurrents : Maya Volt, Karim Forge, Leo Circuit.
- Antagoniste narratif : L'Ombre (sa responsabilité n'est pas présumée démontrée).
- 6 missions, 24 questions avec indices, QCM, calculs, validation, correction expliquée.
- Chronomètre et sauvegarde locale sur l'appareil, fonctionnement sans compte.
- Classement **local par défaut** ; classement **partagé et mis à jour** via Supabase après configuration.
- Aucun conseil pratique d'intervention sous tension.

## Activer le classement partagé en temps réel (nécessite un backend)
GitHub Pages ne possède pas de base de données. Pour un classement **entre les appareils des élèves** :
1. Créer un projet dans Supabase.
2. Dans Authentication > Providers, activer Anonymous Sign-ins.
3. Exécuter \`supabase-schema.sql\` dans SQL Editor.
4. Dans \`config.js\`, renseigner l'URL du projet Supabase et la clé **publishable/anon** (clé publique, jamais la service_role).
5. Enregistrer/committer le fichier modifié dans GitHub.
6. Les appareils qui utilisent le même code de salle verront les scores publiés, mis à jour via Realtime + rafraîchissement de secours.
7. Garder des pseudonymes, pas de patronymes complets, et informer les apprentis de l'affichage des scores.

**Limites :** Sans cette configuration, le bandeau indique explicitement « Classement local sur cet appareil ». Le score n'est pas antifraude : un utilisateur peut manipuler le code côté navigateur. Ne pas utiliser ces notes comme notes officielles.

## GitHub Pages
Si une erreur 404 apparaît, aller dans le dépôt > Settings > Pages > Build and deployment > Deploy from a branch > main > /(root) > Save. Après publication, vérifier le chemin \`/blackout-bts/factory/\`. Ce dossier n'a pas remplacé le jeu BLACKOUT BTS en racine.

## Pistes V2
- Utiliser les vrais extraits des diapositives 9, 15, 19, 22, 23 et 25 comme pièces d'enquête.
- Ajouter un tableau formateur avec contrôle de séance et export CSV.
- Ajouter une banque d'énigmes et des variantes par groupe.

**Conception :** scénario fictif, valeurs techniques des exercices explicitement indiquées ; toute remise sous tension réelle exige la procédure et l'habilitation appropriées.

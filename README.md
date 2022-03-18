# Introduction 
Cette application est une application Web de gestion de tâches, les tâches étant stockées dans une base de données.

Elle permet de lister les tâches à faire, ajouter des tâches, afficher les tâches terminées


Elle permet également de modifier le statut d'une tâche, supprimer une tâche

La tâche a un nom, une description, une priorité, une date limite et un statut d'avancement.

## Installation

Installer tous les composants dans un répertoire par exemple todolist  

### Serveur
Pour pouvoir démarrer et utiliser cette application, il est nécessaire d'installer nodejs, express et mysql

Il est possible d'installer demon mais ce n'est pas obligatoire.

### Base de données

Créer une database mysql taskdb.
Un script de création de la table est disponible dans le répertoire bdd :
todolist_creation.sql

### Configuration

Le port d'écoute par défaut est le 3001, il est modifiable dans le fichier : app.js
Le nom de la base de données ainsi que le user de connection à la base et son mot de passe sont configurables dans le fichier

/todolist/src/db_utils.js

## Utilisation

Dans le répertoire racine de l'application,démarrer le serveur en lançant:

node app.js

Pour utiliser l'application, dans votre navigateur, saisissez

localhost:3001

Cliquer sur Bienvenue pour accéder à la gestion des tâches

## Tester unitairement

Pour tester l'affichage en HTML du nom de la tâche, lancer dans todolist/src

    node test_showTaskPropertyHTML.js

Pour tester la conversion du statut base de données de la tâche en chaîne de caractères, lancer dans todolist/src

    node test_convertStatus.js


# Introduction 
Cette application est une application Web de gestion de tâches, les tâches étant stockées dans une base de données.

Elle permet de:
_ lister les tâches à faire
_ ajouter des tâches à faire
_ différencier une tâche quand elle est terminée

Elle permet également de :
_ modifier le statut d'une tâche
_ supprimer une tâche
_ de visualiser seulement les tâches terminées

La tâche a un nom, une description, une priorité, une date limite et un statut d'avancement.

## Installation

Le répertoire racine de l'application est todolist  

### Serveur
Pour pouvoir démarrer et utiliser cette application, il est nécessaire d'installer :
_ express
_ mysql

Il est possible d'installer demon mais ce n'est pas obligatoire.

### Base de données

Un script de création de la table est disponible dans le répertoire todolist/bdd :
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


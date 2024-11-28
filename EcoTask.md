
# Projet EcoTask : Développement et mise en place d’une chaîne CI/CD

## Objectif :
Les étudiants doivent concevoir, configurer et tester une chaîne CI/CD complète permettant le déploiement continu d'une application web sur un environnement de production. Ils travailleront sur un projet fictif, mais réaliste, qui inclut le développement, les tests automatisés, l'intégration continue, le déploiement continu et la supervision.

---

## Contexte :
Vous êtes en charge de déployer une application web pour une start-up fictive. L'application est construite avec une stack typique de votre choix (par exemple : front-end en React/Vue.js et back-end en Node.js avec une base de données MySQL/PostgreSQL).

Le projet est versionné sur **GitLab** ou **GitHub** et doit être déployé automatiquement sur un serveur de production (**le serveur prêté par Jimmy**) via **Docker** et un orchestrateur comme **Kubernetes**.

---

## Projet de la Start-up : EcoTask

### Description de l'application EcoTask :
**EcoTask** propose une plateforme web de gestion de tâches dédiée aux petites entreprises cherchant à réduire leur empreinte écologique. L'objectif est d'aider les équipes à collaborer tout en suivant l'impact environnemental de leurs projets grâce à des fonctionnalités spécifiques (comme le calcul du bilan carbone des tâches).

---

### 1. Fonctionnalités principales :
- **Gestion des tâches** : CRUD des tâches avec détails (titre, description, responsable, échéance, priorité, bilan carbone calculé automatiquement).
- **Statistiques écologiques** : Tableau de bord avec le total des émissions de CO₂ par projet et un graphique d'évolution.
- **Collaboration d’équipe** : Gestion des utilisateurs, avec visibilité des tâches par projet.

---

### 2. Architecture technique :
- **Front-end** : Interface utilisateur avec framework (React ou Vue.js).  
- **Back-end** : API RESTful avec Node.js et Express (ou autre).  
- **Base de données** : Base relationnelle (PostgreSQL ou MySQL).  

---

### 3. Données initiales fournies :

Voici quelques données hypothétiques permettant le calcul des émissions de CO₂ : 

- **Tâche de bureautique légère**  
  - Exemples : Rédaction de documents, réunions en ligne.  
  - Hypothèse : **0.1 kg CO₂/h** (basé sur la consommation moyenne d’un ordinateur portable de 50 W).

- **Tâche technique**  
  - Exemples : Développement, conception graphique, tests.  
  - Hypothèse : **0.5 kg CO₂/h à 1.5 kg CO₂/h** (inclut des interactions avec les serveurs, recherches internet ; cela varie en fonction de la proximité des serveurs).

- **Tâche à forte intensité énergétique**  
  - Exemples : Simulation, rendu vidéo, calculs lourds.  
  - Hypothèse : **2 à 5 kg CO₂/h**.

> **Important :** Ces chiffres sont des valeurs hypothétiques. Vous pouvez, si vous le souhaitez, chercher des valeurs plus proches de la réalité en fonction de votre matériel, de la proximité des serveurs, de la consommation énergétique des technologies utilisées, etc.

---

## Tâches à réaliser pour le TP :

1. **CI/CD :**
   - Configurer un pipeline pour les tests, les linters et les builds Docker.
   - Déployer automatiquement sur Kubernetes (prod) ou un serveur distant (dev, test, etc.).

2. **Qualité et conformité :**
   - Intégrer SonarQube (ou un outil équivalent) pour analyser le code.
   - Ajouter des linters et des formatters pour uniformiser le code.

3. **Déploiement et environnement :**
   - Configurer les environnements dev, test et prod.
   - Gérer les variables sensibles de manière sécurisée.

4. **Monitoring :**
   - Ajouter des métriques pour superviser l'API et l'utilisation des ressources.
   - Configurer des dashboards avec Prometheus (ou un autre outil) et Grafana (ou un autre outil).

---

## Livrables attendus :
1. Le code source avec les fichiers de configuration pour les pipelines CI/CD et Docker.  
2. Une documentation expliquant la structure des pipelines et la configuration des outils.  
3. Un rapport décrivant les choix techniques, les problèmes rencontrés et les solutions mises en place.  
4. Une présentation orale du processus et du projet réalisé.  

---

## Critères d'évaluation :
- **Fonctionnalité de la chaîne CI/CD** : Tests, builds et déploiements correctement automatisés.  
- **Qualité du code** : Analyse via SonarQube, respect des normes de codage.  
- **Résilience et monitoring** : Collecte des métriques, gestion des logs et des alertes.  
- **Complexité technique et innovation** : Utilisation d'outils avancés et solutions optimisées.  

---

## Exemples d’outils :
- **CI/CD** : GitHub Actions, GitLab CI, CircleCI, ou Jenkins.  
- **Docker/Kubernetes** : Docker Compose pour dev, Kubernetes pour prod.  
- **Monitoring** : Prometheus + Grafana, ou ELK Stack.  
- **Tests** : Cypress, Jest, k6.  
- **Analyse qualité** : SonarQube, ESLint, Prettier.  

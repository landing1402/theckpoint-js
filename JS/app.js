//Fonctions de manipulation de chaînes

function inverserChaine(str) {
    //Inverser une chaîne
    return str.split('').reverse().join('');
}

function compterCaracteres(chaine) {
    // Utilisation de la propriété length pour compter les caractères
    return chaine.length;
}

function capitalizeWords(sentence) {
    // Diviser la phrase en mots individuels
    let words = sentence.split(" ");
    
    // Mettre en majuscule la première lettre de chaque mot
    let capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    
    // Rejoindre les mots pour former la phrase finale
    let capitalizedSentence = capitalizedWords.join(" ");
    
    return capitalizedSentence;
}

//Fonctions de tableau 

//Rechercher le maximum 
function findMax(arr) {
    // Vérifier si le tableau est vide
    if (arr.length === 0) {
        return null; // Retourner null si le tableau est vide
    }
    
    // Initialiser la variable max avec la première valeur du tableau
    let max = arr[0];
    
    // Parcourir le tableau pour trouver la valeur maximale
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return max;
}

//Rechercherle minimum
function findMin(arr) {
    // Vérifier si le tableau est vide
    if (arr.length === 0) {
        return null; // Retourner null si le tableau est vide
    }
    
    // Initialiser la variable min avec la première valeur du tableau
    let min = arr[0];
    
    // Parcourir le tableau pour trouver la valeur minimale
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    
    return min;
}

//Somme d'un tableau 
function sommeTableau(tableau) {
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    return somme;
}

/**
 * Fonction qui filtre les éléments d'un tableau en fonction d'une condition donnée.
 * @param {Array} tableau - Le tableau à filtrer.
 * @param {Function} condition - La fonction de condition qui retourne true ou false pour chaque élément.
 * @returns {Array} - Un nouveau tableau contenant les éléments filtrés.
 */
function filtrerTableau(tableau, condition) {
    // Utilisation de Array.prototype.filter pour filtrer les éléments
    return tableau.filter(condition);
}

//Fonctions mathématiques

/**
 * Fonction récursive pour calculer la factorielle d'un nombre.
 * @param {number} n - Le nombre dont on veut calculer la factorielle.
 * @returns {number} - La factorielle de n.
 */
function factorielleRecursive(n) {
    // Cas de base : factorielle de 0 ou 1 est 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Appel récursif pour calculer la factorielle
    return n * factorielleRecursive(n - 1);
}

//Vérification des nombres premiers

function estPremier(nombre) {
    // Vérifier si le nombre est inférieur ou égal à 1
    if (nombre <= 1) {
        return false;
    }
    
    // 2 et 3 sont premiers
    if (nombre <= 3) {
        return true;
    }
    
    // Vérifier si le nombre est divisible par 2 ou 3
    if (nombre % 2 === 0 || nombre % 3 === 0) {
        return false;
    }

     // Vérifier pour tous les entiers de 5 jusqu'à la racine carrée de nombre (arrondi inférieur)
     for (let i = 5; i * i <= nombre; i += 6) {
        if (nombre % i === 0 || nombre % (i + 2) === 0) {
            return false;
        }
    }
    
    // Si aucune condition ci-dessus n'est vérifiée, le nombre est premier
    return true;
}

//Suite de Fibonacci 
function fibonacci(n) {
    let fibSequence = [];
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        fibSequence.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }

    return fibSequence;
}

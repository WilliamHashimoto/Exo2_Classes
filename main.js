class Lieux {
    constructor(nom, contenu, ingredients) {
        this.nom = nom,
        this.contenu = contenu,
        this.ingredients = ingredients
    }
}

let maison = new Lieux ("maison", []);
let epicerie = new Lieux ("epicerie", [], []);
let cuisine = new Lieux ("cuisine", [], []);

class Ingredients {
    constructor (nom, etat, prix) {
        this.nom = nom,
        this.etat = etat,
        this.prix = prix
    }
}

let poivron = new Ingredients("poivron", "entier", 1);
let oignon = new Ingredients("oignon", "entier", 2);
let oeuf = new Ingredients("oeuf", "entier", 4);
let epice = new Ingredients("epice", "moulu", 3.25);
let paprika = new Ingredients("paprika", "moulu", 1.5);
let fromage = new Ingredients("fromage", "coupé", 1.6);

class Personne {
    constructor(nom, lieu, argent, panier) {
        this.nom = nom,
        this.lieu = lieu,
        this.argent = argent,
        this.panier = panier
        this.se_deplacer = (x) => {}
        this.payer = (x) => {}
        this.couper = (x,y) => {}
    }
}
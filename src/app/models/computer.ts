export class Computer {
    id: number;
    modele: string;
    marque: string;
    type: string;
    category: string;
    prixAchat: number;
    prixVente: number;
    dateEntree: Date;
    constructor(id = null, modele = null, marque = null, type = null,
        // tslint:disable-next-line: align
        category = null, prixAchat = null, prixVente = null, dateEntree = null) {
        this.id = id;
        this.modele = modele;
        this.marque = marque;
        this.type = type;
        this.category = category;
        this.prixAchat = prixAchat;
        this.prixVente = prixVente;
        this.dateEntree = dateEntree;
    }
}

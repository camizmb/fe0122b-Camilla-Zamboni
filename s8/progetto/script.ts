
fetch('Abbigliamento.json').then(function (response) { return response.json(); }).then(function (vestiti) {
    vestiti.forEach(function (item) {
        var vestiti = new Capi(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo)
    });
});

var Capi = /**@class */ (function () {
    function Capi(id: any, codprod: any, collezione: any, capo: any, modello: any, quantita: any, colore: any, prezzoivaesclusa: any, prezzoivainclusa: any, disponibile: any, saldo: any) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }

    Capi.prototype.getSaldocapo = function () {
        return (this.prezzoivainclusa * this.saldo) / 100;
    };

    Capi.prototype.getAcquistocapo = function () {
        return this.prezzoivainclusa - this.getSaldocapo();
    };

    return Capi;
}());


let primoVestito = new Capi(3, 5421, "primavera", "gonna", 8795, 10, "viola", 15, 20, "negozio", 35);
console.log(primoVestito)
console.log("Lo sconto è di: " + primoVestito.getSaldocapo() + "€")
console.log("Il prezzo finale del capo è di " + primoVestito.getAcquistocapo() + "€")

let secondoVestito = new Capi(8, 4001, "estate", "costume", 8971, 20, "giallo", 30.50, 35.50, "magazzino", 15);
console.log(secondoVestito)
console.log("Lo sconto è di: " + secondoVestito.getSaldocapo() + "€")
console.log("Il prezzo finale del capo è di " + secondoVestito.getAcquistocapo() + "€")

let terzoVestito = new Capi(10, 3331, "inverno", "maglione", 1111, 5, "nero", 18.50, 20, "negozio", 28);
console.log(terzoVestito)
console.log("Lo sconto è di:" + terzoVestito.getSaldocapo() + "€")
console.log("Il prezzo finale del capo è di:" + terzoVestito.getAcquistocapo() + "€")







fetch('Abbigliamento.json').then(response => response.json()).then(capi => {

    capi.forEach(item => {

        let vestiti = new Vestiti(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);


    })
});



class Vestiti {

    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;


    constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore: string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }

    mostraDisponibile(): string {
        return `Questo capo è disponibile in  ${this.disponibile}`
    }


    getSaldocapo(): number {
        return this.prezzoivainclusa * (this.saldo / 100)
    }


    getAcquistocapo(): number {
        return this.prezzoivaesclusa - this.getSaldocapo()
    }

}




let primo = new Vestiti(3, 5421, "primavera", "gonna", 8795, 10, "viola", 15, 20, "negozio", 35);
console.log(primo)
console.log("Lo sconto è di: " + primo.getSaldocapo() + "€")
console.log("Il prezzo finale del capo è di " + primo.getAcquistocapo() + "€")

let secondo = new Vestiti(8, 4001, "estate", "costume", 8971, 20, "giallo", 30.50, 35.50, "magazzino", 15);
console.log(secondo)
console.log("Lo sconto è di: " + secondo.getSaldocapo() + "€")
console.log("Il prezzo finale del capo è di " + secondo.getAcquistocapo() + "€")

let terzo = new Vestiti(10, 3331, "inverno", "maglione", 1111, 5, "nero", 18.50, 20, "negozio", 28);
console.log(terzo)
console.log("Lo sconto è di:" + terzo.getSaldocapo() + "€")
console.log("Il prezzo finale del capo è di:" + terzo.getAcquistocapo() + "€")

























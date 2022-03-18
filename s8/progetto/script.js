fetch('Abbigliamento.json').then(function (response) { return response.json(); }).then(function (vestiti) {
    vestiti.forEach(function (item) {
        var vestiti = new Capi(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
    });
});
var Capi = /**@class */ (function () {
    function Capi(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
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
var primoVestito = new Capi(3, 5421, "primavera", "gonna", 8795, 10, "viola", 15, 20, "negozio", 35);
console.log(primoVestito);
console.log("Lo sconto è di: " + primoVestito.getSaldocapo() + "€");
console.log("Il prezzo finale del capo è di " + primoVestito.getAcquistocapo() + "€");
var secondoVestito = new Capi(8, 4001, "estate", "costume", 8971, 20, "giallo", 30.50, 35.50, "magazzino", 15);
console.log(secondoVestito);
console.log("Lo sconto è di: " + secondoVestito.getSaldocapo() + "€");
console.log("Il prezzo finale del capo è di " + secondoVestito.getAcquistocapo() + "€");
var terzoVestito = new Capi(10, 3331, "inverno", "maglione", 1111, 5, "nero", 18.50, 20, "negozio", 28);
console.log(terzoVestito);
console.log("Lo sconto è di:" + terzoVestito.getSaldocapo() + "€");
console.log("Il prezzo finale del capo è di:" + terzoVestito.getAcquistocapo() + "€");
fetch('Abbigliamento.json').then(function (response) { return response.json(); }).then(function (capi) {
    capi.forEach(function (item) {
        var vestiti = new Vestiti(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
    });
});
var Vestiti = /** @class */ (function () {
    function Vestiti(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
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
    Vestiti.prototype.mostraDisponibile = function () {
        return "Questo capo \u00E8 disponibile in  ".concat(this.disponibile);
    };
    Vestiti.prototype.getSaldocapo = function () {
        return this.prezzoivainclusa * (this.saldo / 100);
    };
    Vestiti.prototype.getAcquistocapo = function () {
        return this.prezzoivaesclusa - this.getSaldocapo();
    };
    return Vestiti;
}());
var primo = new Vestiti(3, 5421, "primavera", "gonna", 8795, 10, "viola", 15, 20, "negozio", 35);
console.log(primo);
console.log("Lo sconto è di: " + primo.getSaldocapo() + "€");
console.log("Il prezzo finale del capo è di " + primo.getAcquistocapo() + "€");
var secondo = new Vestiti(8, 4001, "estate", "costume", 8971, 20, "giallo", 30.50, 35.50, "magazzino", 15);
console.log(secondo);
console.log("Lo sconto è di: " + secondo.getSaldocapo() + "€");
console.log("Il prezzo finale del capo è di " + secondo.getAcquistocapo() + "€");
var terzo = new Vestiti(10, 3331, "inverno", "maglione", 1111, 5, "nero", 18.50, 20, "negozio", 28);
console.log(terzo);
console.log("Lo sconto è di:" + terzo.getSaldocapo() + "€");
console.log("Il prezzo finale del capo è di:" + terzo.getAcquistocapo() + "€");

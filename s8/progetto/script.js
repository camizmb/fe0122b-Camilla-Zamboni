var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
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
    Abbigliamento.prototype.getSaldocapo = function (saldo) {
        return;
    };
    Abbigliamento.prototype.getAcquistocapo = function (costo) {
        return;
    };
    return Abbigliamento;
}());
fetch('Abbigliamento.json').then(function (response) { return response.json(); }).then(function (abbigliamento) {
});

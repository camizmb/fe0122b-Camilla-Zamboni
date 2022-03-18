var FirstUser = /** @class */ (function () {
    function FirstUser(marca, modello, numero, carica, numeroChiamate) {
        this.marca = marca;
        this.modello = modello;
        this.numero = numero;
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    FirstUser.prototype.chiamata = function (minutiDurata) {
        this.carica -= (0.20 * minutiDurata);
        this.numeroChiamate++;
    };
    FirstUser.prototype.numero404 = function () {
        return this.carica;
    };
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return FirstUser;
}());
var numberCarica = new FirstUser("samsung", "S21", 3386290112, 20, 10);
numberCarica.ricarica(12);
numberCarica.chiamata(8);
console.table(numberCarica);
var SecondUser = /** @class */ (function () {
    function SecondUser(marca, modello, numero, carica, numeroChiamate) {
        this.marca = marca;
        this.modello = modello;
        this.numero = numero;
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    SecondUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    SecondUser.prototype.chiamata = function (minutiDurata) {
        this.carica -= (0.20 * minutiDurata);
        this.numeroChiamate++;
    };
    SecondUser.prototype.numero404 = function () {
        return this.carica;
    };
    SecondUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return SecondUser;
}());
var numberCarica2 = new FirstUser("nokia", "3310", 3386290112, 30, 20);
numberCarica2.ricarica(10);
numberCarica2.chiamata(5);
console.table(numberCarica2);
var ThirdUser = /** @class */ (function () {
    function ThirdUser(marca, modello, numero, carica, numeroChiamate) {
        this.marca = marca;
        this.modello = modello;
        this.numero = numero;
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    ThirdUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    ThirdUser.prototype.chiamata = function (minutiDurata) {
        this.carica -= (0.20 * minutiDurata);
        this.numeroChiamate++;
    };
    ThirdUser.prototype.numero404 = function () {
        return this.carica;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
var numberCarica3 = new FirstUser("iphone", "12", 3386290112, 40, 30);
numberCarica3.ricarica(15);
numberCarica3.chiamata(10);
console.table(numberCarica3);

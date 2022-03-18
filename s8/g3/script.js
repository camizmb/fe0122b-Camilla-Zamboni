var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratori = /** @class */ (function () {
    function Lavoratori(redditoannuolordo, tasseinps, tasseirpef) {
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    return Lavoratori;
}());
var LiberoProfessionista = /** @class */ (function (_super) {
    __extends(LiberoProfessionista, _super);
    function LiberoProfessionista(redditoannuolordo, tasseinps, tasseirpef) {
        return _super.call(this, redditoannuolordo, tasseinps, tasseirpef) || this;
    }
    LiberoProfessionista.prototype.getUtileTasse = function () {
        return;
    };
    LiberoProfessionista.prototype.getTasseInps = function () {
        return (this.redditoannuolordo * this.tasseinps) / 100;
    };
    LiberoProfessionista.prototype.getTasseIrpef = function () {
        return (this.redditoannuolordo * this.tasseirpef) / 100;
    };
    LiberoProfessionista.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - (this.tasseirpef + this.tasseinps);
    };
    return LiberoProfessionista;
}(Lavoratori));
var lavoratore1 = new LiberoProfessionista(30000, 10, 20);
console.table(lavoratore1);
console.log("Tasso inps:" + lavoratore1.getTasseInps());
console.log("Tasso irpef:" + lavoratore1.getTasseIrpef());
console.log("Reddito Annuo Netto:" + lavoratore1.getRedditoAnnuoNetto());
console.log(lavoratore1.getUtileTasse());
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(redditoannuolordo, tasseinps, tasseirpef) {
        return _super.call(this, redditoannuolordo, tasseinps, tasseirpef) || this;
    }
    Artigiano.prototype.getUtileTasse = function () {
        return;
    };
    Artigiano.prototype.getTasseInps = function () {
        return (this.redditoannuolordo * this.tasseinps) / 100;
    };
    Artigiano.prototype.getTasseIrpef = function () {
        return (this.redditoannuolordo * this.tasseirpef) / 100;
    };
    Artigiano.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - (this.tasseirpef + this.tasseinps);
    };
    return Artigiano;
}(Lavoratori));
var lavoratore2 = new Artigiano(45000, 20, 50);
console.table(lavoratore2);
console.log("Tasso inps:" + lavoratore2.getTasseInps());
console.log("Tasso irpef:" + lavoratore2.getTasseIrpef());
console.log("Reddito Annuo Netto:" + lavoratore2.getRedditoAnnuoNetto());
console.log(lavoratore2.getUtileTasse());
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante(redditoannuolordo, tasseinps, tasseirpef) {
        return _super.call(this, redditoannuolordo, tasseinps, tasseirpef) || this;
    }
    Commerciante.prototype.getUtileTasse = function () {
        return;
    };
    Commerciante.prototype.getTasseInps = function () {
        return (this.redditoannuolordo * this.tasseinps) / 100;
    };
    Commerciante.prototype.getTasseIrpef = function () {
        return (this.redditoannuolordo * this.tasseirpef) / 100;
    };
    Commerciante.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - (this.tasseirpef + this.tasseinps);
    };
    return Commerciante;
}(Lavoratori));
var lavoratore3 = new Commerciante(78000, 20, 30);
console.table(lavoratore3);
console.log("Tasso inps:" + lavoratore3.getTasseInps());
console.log("Tasso irpef:" + lavoratore3.getTasseIrpef());
console.log("Reddito Annuo Netto:" + lavoratore3.getRedditoAnnuoNetto());
console.log(lavoratore3.getUtileTasse());

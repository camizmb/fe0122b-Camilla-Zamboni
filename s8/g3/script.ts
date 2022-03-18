abstract class Lavoratori {
    redditoannuolordo: number;
    tasseinps: number;
    tasseirpef: number;

    constructor(redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }

    abstract getUtileTasse(): number
    abstract getTasseInps(): number
    abstract getTasseIrpef(): number
    abstract getRedditoAnnuoNetto(): number

}

class LiberoProfessionista extends Lavoratori {
    constructor(redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
        super(redditoannuolordo, tasseinps, tasseirpef)
    }

    getUtileTasse(): number {
        return
    }

    getTasseInps(): number {
        return (this.redditoannuolordo * this.tasseinps) / 100
    }

    getTasseIrpef(): number {
        return (this.redditoannuolordo * this.tasseirpef) / 100
    }

    getRedditoAnnuoNetto(): number {
        return this.redditoannuolordo - (this.tasseirpef + this.tasseinps)
    }
}

let lavoratore1 = new LiberoProfessionista(30000, 10, 20)
console.table(lavoratore1)
console.log("Tasso inps:" + lavoratore1.getTasseInps())
console.log("Tasso irpef:" + lavoratore1.getTasseIrpef())
console.log("Reddito Annuo Netto:" + lavoratore1.getRedditoAnnuoNetto())
console.log(lavoratore1.getUtileTasse())


class Artigiano extends Lavoratori {
    constructor(redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
        super(redditoannuolordo, tasseinps, tasseirpef)
    }

    getUtileTasse(): number {
        return
    }

    getTasseInps(): number {
        return (this.redditoannuolordo * this.tasseinps) /100
    }

    getTasseIrpef(): number {
        return (this.redditoannuolordo * this.tasseirpef) /100
    }

    getRedditoAnnuoNetto(): number {
        return this.redditoannuolordo - (this.tasseirpef + this.tasseinps)
    }
}

let lavoratore2 = new Artigiano(45000, 20, 50)
console.table(lavoratore2)
console.log("Tasso inps:" + lavoratore2.getTasseInps())
console.log("Tasso irpef:" + lavoratore2.getTasseIrpef())
console.log("Reddito Annuo Netto:" + lavoratore2.getRedditoAnnuoNetto())
console.log(lavoratore2.getUtileTasse())






class Commerciante extends Lavoratori {
    constructor(redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
        super(redditoannuolordo, tasseinps, tasseirpef)
    }

    getUtileTasse(): number {
        return
    }

    getTasseInps(): number {
        return (this.redditoannuolordo * this.tasseinps) /100
    }

    getTasseIrpef(): number {
        return (this.redditoannuolordo * this.tasseirpef)/100
    }

    getRedditoAnnuoNetto(): number {
        return this.redditoannuolordo - (this.tasseirpef + this.tasseinps)
    }
}


let lavoratore3 = new Commerciante(78000, 20, 30)
console.table(lavoratore3)
console.log("Tasso inps:" + lavoratore3.getTasseInps())
console.log("Tasso irpef:" + lavoratore3.getTasseIrpef())
console.log("Reddito Annuo Netto:" + lavoratore3.getRedditoAnnuoNetto())
console.log(lavoratore3.getUtileTasse())
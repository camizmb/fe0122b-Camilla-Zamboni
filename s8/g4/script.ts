interface Smartphone {
    marca: string;
    modello: string;
    numero: number;
    carica: number;
    numeroChiamate: number


    ricarica(double: any, unaRicarica: any): void;
    chiamata(double: any, minutiDurata: any): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;

}


class FirstUser implements Smartphone {
    public marca: string;
    public modello: string;
    public numero: number;
    public carica: number;
    public numeroChiamate: number;


    constructor(marca: string, modello: string, numero: number, carica: number, numeroChiamate: number) {
        this.marca = marca;
        this.modello = modello;
        this.numero = numero
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }

    ricarica(unaRicarica: any): void {
        this.carica += unaRicarica
    }
    chiamata(minutiDurata: any): void {
        this.carica -= (0.20 * minutiDurata)
        this.numeroChiamate++
    }
    numero404(): number {
        return this.carica
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }





}

let numberCarica = new FirstUser("samsung", "S21", 3386290112, 20, 10);
numberCarica.ricarica(12)
numberCarica.chiamata(8)
console.table(numberCarica)


class SecondUser implements Smartphone {
    public marca: string;
    public modello: string;
    public numero: number;
    public carica: number;
    public numeroChiamate: number;


    constructor(marca: string, modello: string, numero: number, carica: number, numeroChiamate: number) {
        this.marca = marca;
        this.modello = modello;
        this.numero = numero
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }

    ricarica(unaRicarica: any): void {
        this.carica += unaRicarica
    }
    chiamata(minutiDurata: any): void {
        this.carica -= (0.20 * minutiDurata)
        this.numeroChiamate++
    }
    numero404(): number {
        return this.carica
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }

}

let numberCarica2 = new FirstUser("nokia", "3310", 3386290112, 30, 20);
numberCarica2.ricarica(10)
numberCarica2.chiamata(5)
console.table(numberCarica2)



class ThirdUser implements Smartphone {
    public marca: string;
    public modello: string;
    public numero: number;
    public carica: number;
    public numeroChiamate: number;


    constructor(marca: string, modello: string, numero: number, carica: number, numeroChiamate: number) {
        this.marca = marca;
        this.modello = modello;
        this.numero = numero
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }

    ricarica(unaRicarica: any): void {
        this.carica += unaRicarica
    }
    chiamata(minutiDurata: any): void {
        this.carica -= (0.20 * minutiDurata)
        this.numeroChiamate++
    }
    numero404(): number {
        return this.carica
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }

}


let numberCarica3 = new FirstUser("iphone", "12", 3386290112, 40, 30);

numberCarica3.ricarica(15)
numberCarica3.chiamata(10)
console.table(numberCarica3)




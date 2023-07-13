export interface IPalabras {
    sum: number;
    Palabras: IPalabra[];
}

export interface IPalabra {
    _id?: string;
    palabra: string;
    deletreo: string;
}
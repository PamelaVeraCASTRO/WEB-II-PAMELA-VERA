export interface IPagos {
    sum:      number;
    registro: IPago[];
}

export interface IPago {
    _id?:     string;
    ididioma:    string;
    idpalabra:    string;
    deltreo: string;
    palabra: string;
    fonetica: string;
    status: boolean;
}

export interface Name {
    official: string;
}

export interface Currency {
    name: string,
    symbol: string
}

export interface Currencies {
    [currencyCode: string]: Currency
}

export interface Flags {
    alt: string,
    png: string
}

export interface CoatOfArms {
    png: string
}

export interface Car {
    side: string
}

export interface CountryData {
    name: Name,
    currencies: Currencies,
    flags: Flags, 
    coatOfArms: CoatOfArms, 
    car: Car,
}

export interface Countries {
    data: CountryData[];
    editingCell: number | null;
    isLoading: boolean;
    error: string | null;
}

export interface Props {
    data: CountryData[];
}
export interface IBook {
    id: string;
    title: string;
    author: string;
    isbn: string;
    description: string;
    copies: number;
    available: boolean;
    genre: "FICTION" | "NON_FICTION" | "SCIENCE " | "HISTORY" | "BIOGRAPHY" | "FANTASY" ;
}


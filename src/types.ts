export interface IBook {
    id: number;
    Title: string;
    Author: string;
    ISBN: string;
    Description: string;
    Copies: number;
    Available: boolean;
    Genre: "Classic" | "Literary" | "Historical " | "Mystery" | "Thriller" | "Horror" | "Science " | "Fantasy" | "Adventure" | "Romance" | "Western" ;
}
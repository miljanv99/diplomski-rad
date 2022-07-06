export class Game{
    id:number;
    title:string;
    img:string;
    price:string;
    console:string;
    consoleImg:string;
    inStock: number;
    digitalDownload: string;
    aboutTheGame: string;
    rating: string;
    developer: string;
    publisher: string;
    releaseDate: string;
    genre: Array<any>;
    minimumConfig:{
        OS: string;
        processor: string;
        memory: string;
        graphics: string;
        directX:string;
        network:string;
        storage:string

    }
    recommendedConfig:{
        "OS": string;
        "processor": string;
        "memory": string;
        "graphics": string;
        "directX": string;
        "network": string;
        "storage": string;
    }

   constructor(){}
    
    
}
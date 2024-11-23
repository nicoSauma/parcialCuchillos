import { filo,tipo,hoja,mango} from "./enum";

export interface Cuchillo {
    id?:string, 
    nombre:string,
    tipo:string, 
    filo:string, 
    hoja:string, 
    mango:string, 
    longitudHoja:number, 
    longitudTotal:number
}

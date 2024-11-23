import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuchillo } from '../types/cuchillo';

@Injectable({
  providedIn: 'root'
})
export class CuchilloService {
http=inject(HttpClient);
urlBase="http://localhost:3000/cuchillos";

getCuchillos(): Observable<Cuchillo[]>{
return this.http.get<Cuchillo[]>(this.urlBase);
}

editCuchillo(id:String|null, cuchillo:Cuchillo): Observable<Cuchillo>{
  return this.http.put<Cuchillo>(`${this.urlBase}/${id}`,cuchillo);
  
  }


postCuchillo(cuchillo:Cuchillo): Observable<Cuchillo>{
  return this.http.post<Cuchillo>(this.urlBase, cuchillo);
  }

  
getCuchillosByID(id:String|null): Observable<Cuchillo>{
  return this.http.get<Cuchillo>(`${this.urlBase}/${id}`);
  }
      


  deleteCuchillo(id:String): Observable<Cuchillo>{
    return this.http.delete<Cuchillo>(`${this.urlBase}/${id}`);
    }
        
      

}

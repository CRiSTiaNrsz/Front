import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})

export class CalzadoService {

  constructor(private http:HttpClient) { }
  
  ObtenerTodosLosCalzados(): Observable<any>{
    let url_leer="https://spring-boot-api-rest-1581573131046.azurewebsites.net/api/productos";
    return this.http.get(url_leer);
  }

  
}


/*
//import { Injectable } from '@angular/core';

//import {Observable} from 'rxjs/Observable';


// @Injectable()
export class CalzadoService{
    constructor(private httpClient:HttpClient){

    }
    
    ObtenerTodosLosCalzados(): Observable<any>{
        return this.httpClient.get("https://spring-boot-api-rest-1581573131046.azurewebsites.net/api/productos");
    }

}

*/
import { Component, OnInit } from '@angular/core';
// import { CalzadoService } from '../calzado.service';
import { CalzadoService } from '../service/calzado.service';
import { Observable } from 'rxjs';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  
];


@Component({
  selector: 'app-calzado',
  templateUrl: './calzado.component.html',
  styleUrls: ['./calzado.component.css']
})
export class CalzadoComponent implements OnInit {
  ngOnInit(): void {
    this.ObtenerTodosLosCalzados();
  }
   
   constructor(private calzadoService:CalzadoService) { 
       //this.ObtenerTodosLosCalzados(); 
  }
  
  ObtenerTodosLosCalzados(){
     this.calzadoService.ObtenerTodosLosCalzados().subscribe( calzado => {
         console.log(calzado[0].marca);
         //this.calzados=calzado;
       });/*,
       error =>{
         console.log(JSON.stringify(error));
       });*/
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  

}

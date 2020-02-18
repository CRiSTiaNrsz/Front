import { Component, OnInit } from '@angular/core';
// import { CalzadoService } from '../calzado.service';
import { CalzadoService } from '../service/calzado.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calzado',
  templateUrl: './calzado.component.html',
  styleUrls: ['./calzado.component.css']
})
export class CalzadoComponent implements OnInit {
  nothing=null;
  calzados:any;

  ngOnInit(): void {
    this.ObtenerTodosLosCalzados();
  }
   
   constructor(private calzadoService:CalzadoService) { 
       //this.ObtenerTodosLosCalzados(); 
  }
  
  ObtenerTodosLosCalzados(){
     this.calzadoService.ObtenerTodosLosCalzados().subscribe( resultado => {
         console.log(resultado[0].marca);
         this.calzados=resultado;
       });/*,
       error =>{
         console.log(JSON.stringify(error));
       });*/
  }
}

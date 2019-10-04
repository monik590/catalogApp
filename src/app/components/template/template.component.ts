import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Solicitud }    from '../../solicitud';
import {Router} from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})


export class TemplateComponent  {

 private   miarray: Solicitud[]=null ;

 constructor( private router:Router) { }

  enviarSolicitud(template:NgForm){

    let solicitud = new Solicitud(template.value["nombre"],template.value["fecha"],
                                  template.value["direccion"],template.value["ciudad"],
                                  template.value["adjuntar"]);
    if(this.miarray == null){
      solicitud.setId(1);
      this.miarray=[solicitud];
    }
    else{
      solicitud.setId(this.generarIdPedido());
      this.miarray.push(solicitud);
    }

    console.log(this.miarray);
    this.router.navigate(['Inicio']);
  }


  generarIdPedido(){
    return this.miarray.length+1;
  }

  getSolicitudes(){
    return this.miarray;
  }

}

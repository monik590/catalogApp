import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Solicitud }    from '../../solicitud';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})


export class TemplateComponent  {
  //private  miarray: Array<Solicitud>;
 private   miarray: Solicitud[]=null ;



  enviarSolicitud(template:NgForm){

    let solicitud = new Solicitud(template.value["nombre"],template.value["fecha"],
                                  template.value["direccion"],template.value["ciudad"],
                                  template.value["adjuntar"],this.generarIdPedido());
    if(this.miarray == null){
      this.miarray=[solicitud];
    }
    else{
      this.miarray.push(solicitud);
    }

    console.log(this.miarray);
  }


  generarIdPedido(){
    return this.miarray.length;
  }
  
}

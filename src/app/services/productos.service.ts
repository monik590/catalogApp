import { Injectable } from '@angular/core';

@Injectable()
export class ProductosService {

  private productos:Producto[]=[
    {
      descripcion:"Huawei P10",
      cantidadDisponible:2,
      imagen:"https://s3.amazonaws.com/techstorega-images/Celulares/HuaweiP10_400.png",
      miniatura:"https://s3.amazonaws.com/techstorega-images/Celulares/HuaweiY9_160.png",
      idProducto:3,
      categoria:"celulares",
      precio:2999800
    },
    {
      descripcion:"Apple iPhone X",
      cantidadDisponible:5,
      imagen:"https://s3.amazonaws.com/techstorega-images/Celulares/AppleIphoneX_400.png",
      miniatura:"https://s3.amazonaws.com/techstorega-images/Celulares/AppleIphoneX_160.png",
      idProducto:2,
      categoria:"celulares",
      precio:3599890
    },
    {
      descripcion:"Samsung QLED",
      cantidadDisponible:3,
      imagen:"https://s3.amazonaws.com/techstorega-images/Televisores/Samsung_QledTV_400.png",
      miniatura:"https://s3.amazonaws.com/techstorega-images/Televisores/Samsung_QledTV_160.png",
      idProducto:4,
      categoria:"televisores",
      precio:1800000
    },
    {
      descripcion:"Samsung Galaxy S9",
      cantidadDisponible:10,
      imagen:"https://s3.amazonaws.com/techstorega-images/Celulares/SamsungGalaxys9_400.png",
      miniatura:"https://s3.amazonaws.com/techstorega-images/Celulares/SamsungGalaxys9_160.png",
      idProducto:1,
      categoria:"celulares",
      precio:3299890
    },
    {
    descripcion:"LG Ulta HD",
    cantidadDisponible:0,
    imagen:"https://s3.amazonaws.com/techstorega-images/Televisores/LG_UltraHD_400.png",
    miniatura:"https://s3.amazonaws.com/techstorega-images/Televisores/LG_UltraHD_160.png",
    idProducto:5,
    categoria:"televisores",
    precio:1750000
    }
  ];

  constructor() { }

  
  getProductos():Producto[]{
    return this.productos;
  }

  getProducto(index:string){
    return this.productos[index];
  }

  buscarProducto(campoBusqueda:string){
    let busqueda = campoBusqueda.toLowerCase();
    let productosEncontrados:Producto[] = [];

    for(let i=0; i< this.productos.length; i++){
      let producto = this.productos[i];
      let descripcion = producto.descripcion.toLowerCase();
      if(descripcion.indexOf(busqueda) >= 0){
        producto.idx = i;
        productosEncontrados.push(producto);
      }
    }
    return productosEncontrados;
  }

}

export interface Producto {
  descripcion: string,

  cantidadDisponible: number,

  imagen: string,

  miniatura:string,

  idProducto:number,

  categoria: string,

  precio:number

  idx? : number

}

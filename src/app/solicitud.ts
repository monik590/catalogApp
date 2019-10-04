export class Solicitud {

    constructor(
    public nombre: string,
    public fecha: string,
    public direccion: string,
    public ciudad:string,
    public archivo:string,
    public id?: number
  ) {  }

  setId(idNumber:number){
    this.id = idNumber;
  }
}

export class productModel {
  public id:number;
  public name:string;
  public phanLoai:string;
  public trangThai:string;
  constructor(id:number,name:string,phanLoai:string,trangThai:string='1'){
    this.id=id;
    this.name= name;
    this.phanLoai=phanLoai;
    this.trangThai=trangThai;
  }
}


import { Injectable } from '@angular/core';
import { productModel } from 'src/core/models/product.model';// dinh nghia kieu du lieu

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private listdata:productModel[]=[
    {id:1,name:"cam",phanLoai:'traiCay',trangThai:'1'},
    {id:2,name:"xoài",phanLoai:'traiCay',trangThai:'1'},
    {id:3,name:"củ cải",phanLoai:'rauCu',trangThai:'-1'},
    {id:4,name:"cà rốt",phanLoai:'rauCu',trangThai:'1'},
    {id:5,name:"táo",phanLoai:'traiCay',trangThai:'-1'}
  ]

  private dataTemp:any=[]

  getListData(){
    return this.listdata
  }

  addData(data:any){
    const id = this.listdata.length + 1;
    const newData = new productModel(id,data.name,data.phanLoai,data.trangThai);
    this.listdata.push(newData)
  }



  editData(data:any){
    this.listdata.forEach((item,i)=>{
      if(parseInt(data.id) === item.id){
        this.listdata.splice(i,1,data)
      }
    })
  }

  deleteData(id:number){
   let dataNew = this.listdata.filter(item=> item.id !== id)
    return dataNew
  }

  filterStatus(value:string){
  let arrTemp = this.listdata.filter(item => {
      if(value === '1'){
        return item.trangThai === '1'
      }else if(value === '-1'){
       return item.trangThai === '-1'
      }else{
        return item
      }
    })
    this.dataTemp = [...arrTemp]
    return this.dataTemp
  }

  constructor() { }
}


import { Injectable } from '@angular/core';
import { productModel } from 'src/core/models/product.model';// dinh nghia kieu du lieu
import { replaceVNtext } from 'src/utils/replace';

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
  //get all data product
  getListData(){
    return this.listdata
  }
  // new product
  addData(data:any){
    const id = this.listdata.length + 1;
    const newData = new productModel(id,data.name,data.phanLoai,data.trangThai);
    this.listdata.push(newData)
  }
  // update product
  editData(data:any){
    this.listdata.forEach((item,i)=>{
      if(parseInt(data.id) === item.id){
        this.listdata.splice(i,1,data)
      }
    })
  }
  // delete product
  deleteData(id:number){
   this.listdata.forEach((item,i)=>{
     if(item.id === id){
       this.listdata.splice(i,1)
     }
   })
  }
  // update status
  updateStatus(data:any){
    this.listdata.forEach((item,i)=>{
      if(item.id === data.id){
        if(data.trangThai === '1'){
          data.trangThai = "-1"
          this.listdata.splice(i,1,data)
        }else{
          data.trangThai = "1"
          this.listdata.splice(i,1,data)
        }
      }
    })
  }
  // filter status
  filterStatus(value:number){
    if (value === 0){
      this.dataTemp= [...this.listdata]
      return this.dataTemp;
    }else{
      let arrTemp = this.listdata.filter(item => {
        if(value === 1){
          return item.trangThai === '1'
        }else if(value === -1){
         return item.trangThai === '-1'
        }
      })
      this.dataTemp = [...arrTemp]
      return this.dataTemp;
    }
  }
  // search product
  serchProduct(value:string){
    if(this.dataTemp.length === 0){
      if(value===""){
        return this.listdata
      }else{
        let dataTemp1 = this.listdata?.filter((item:any,i:number)=>{
          const ToText = replaceVNtext(item.name.trim().toLocaleLowerCase());
          if(ToText.indexOf(value.trim().toLocaleLowerCase()) !== -1){
            return item
          }
        })
        return dataTemp1
      }
    }else{
      if(value===""){
        return this.listdata
      }else{
        let dataTemp1 = this.dataTemp?.filter((item:any,i:number)=>{
          const ToText = replaceVNtext(item.name.trim().toLocaleLowerCase());
          if(ToText.indexOf(value.trim().toLocaleLowerCase()) !== -1){
            return item
          }
        })
        return dataTemp1
      }
    }
  }

  sortProduct(value:number):void{
    this.listdata.sort((a,b)=>{
      if(a.id > b.id ){
        return value
      }else if(a.id < b.id){
        return -value
      }else{
        return 0
      }

    })
  }

  constructor() { }
}

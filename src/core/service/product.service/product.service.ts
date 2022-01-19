import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private listdata:Array<any>=[
    {id:1,name:"cam",phanLoai:'traiCay',trangThai:true},
    {id:2,name:"xoài",phanLoai:'traiCay',trangThai:true},
    {id:3,name:"củ cải",phanLoai:'rauCu',trangThai:false},
    {id:4,name:"cà rốt",phanLoai:'rauCu',trangThai:true},
    {id:5,name:"táo",phanLoai:'traiCay',trangThai:false}
  ]

  private dataTemp:any=[]

  getListData(){
    return this.listdata
  }

  addData(data:any){
    this.listdata.forEach((item,i)=>{
      if(parseInt(data.id)=== item.id){
        alert(`id ${data.id} đã bị trùng vui lòng dùng id khác !!`)
      }else{
        this.listdata.push(data)
        return this.listdata
      }
    })
  }

  editData(data:any){
    this.listdata.forEach((item,i)=>{
      if(parseInt(data.id) === item.id){
        this.listdata.splice(i,1,data)
      }
    })
    return this.listdata
  }

  deleteData(id:number){
   let dataNew = this.listdata.filter(item=> item.id !== id)
    return dataNew
  }

  filterStatus(value:number){
  let arrTemp = this.listdata.filter(item => {
      if(value === 1){
        return item.trangThai === true
      }else{
        item.trangThai === true
      }
    })
    this.dataTemp = [...arrTemp]
    return this.dataTemp
  }

  constructor() { }
}

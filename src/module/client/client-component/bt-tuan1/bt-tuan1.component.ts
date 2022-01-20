import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/core/service/product.service/product.service';
import { ProductIF } from 'src/core/interface/product.interface';
import { productModel } from 'src/core/models/product.model';

@Component({
  selector: 'app-bt-tuan1',
  templateUrl: './bt-tuan1.component.html',
  styleUrls: ['./bt-tuan1.component.scss']
})
export class BtTuan1Component implements OnInit {
  public id:number = 0;
  public tenSanPham:string="thơm";
  public phanLoai:string="traiCay";
  public trangThai:string="1"

  constructor(private _productSevice:ProductService) { }
  public myData:Array<any>=[

  ]

  ngOnInit(): void {
    this.getDataService()
  }
  // lay san pham tu service
  getDataService(){
    let data = this._productSevice.getListData()
    this.myData=[];
   this.myData=[...data]
   console.log(this.myData);
  }
  // change value tu input
  onchange(key,value){
    switch (key) {
      case "phanLoai":
        this.phanLoai = value
        break;
      case "trangThai":
          this.trangThai = value
        break;
      default:
        break;
    }
  }
  // xoa du lieu tam
  clearData(){
    this.id=0;
    this.tenSanPham = '';
    this.phanLoai='rauCu';
    this.trangThai='-1';
  }
  // them san pham moi
  onAddData(...value:any){
    const newData:ProductIF= new productModel(0,value[0],value[1],value[2]);
    this._productSevice.addData(newData);
    this.getDataService();
  }
  // lay du lieu tu input de update
  onGetDataForm(item){
    //alert(JSON.stringify(item))
    this.id = item.id;
    this.tenSanPham=item.name;
    this.phanLoai=item.phanLoai;
    this.trangThai=item.trangThai;
  }
  // reset
  onReset(){
    this.clearData()
  }
  // cap nhat san pham
  onUpdateData(){
    const dataNew= new productModel(this.id,this.tenSanPham,this.phanLoai,this.trangThai);
    if(this.id === 0){
      window.alert('chua co id update')
    }else{
      this._productSevice.editData(dataNew)
      this.getDataService()
    }
  }


}

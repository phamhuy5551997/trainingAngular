import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/core/service/product.service/product.service';
import { ProductIF } from 'src/core/interface/product';

@Component({
  selector: 'app-bt-tuan1',
  templateUrl: './bt-tuan1.component.html',
  styleUrls: ['./bt-tuan1.component.scss']
})
export class BtTuan1Component implements OnInit {
  public tenSanPham:string="thơm";
  public phanLoai:string="traiCay";
  public trangThai:string="1"

  constructor(private _productSevice:ProductService) { }
  public myData:Array<any>=[

  ]

  ngOnInit(): void {
   let data = this._productSevice.getListData()
   this.myData=[...data]
   console.log(this.myData);
   //let productNew:ProductIF = new {name:'tao',phanLoai:'traiCay',trangThai:'1'}
  }


}

export class UserClass{
  private taiKhoan:string;
  private mauKhau:string;

  contructor(taiKhoan:string,mauKhau:string){
    this.taiKhoan=taiKhoan;
    this.mauKhau=mauKhau;
  }

  getUser():string{
    return this.taiKhoan;
  }

  getPassword():string{
    return this.mauKhau;
  }
}

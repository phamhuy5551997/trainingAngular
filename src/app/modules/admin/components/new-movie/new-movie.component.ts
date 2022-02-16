import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { replaceVNtext } from 'src/app/utils/replace';
import { MovieService } from 'src/app/core/services/movie/movie.service';
import {MessageService} from 'primeng/api';
import { MessageToastService } from 'src/app/core/services/message/message.service';
@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss'],
  providers: [MessageService]
})
export class NewMovieComponent implements OnInit {
  nameMovie:string="";
  trailer:string="";
  descript:string="";
  upload: any = '';
  date1:string='';
  imgURL:any;
  message:string="";
  size:any;
  dataUpAPI:any='';
  constructor(
    private movieService:MovieService,
    private messageService: MessageService,
    private messageToastService:MessageToastService
  ) { }
  ngOnInit(): void {
  }
  onChange(files){
    this.upload = files[0]
    this.size = files[0].size;
    if (files.length === 0)
    return;
    let mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }
  addMovie(){
    let {nameMovie,trailer,upload,descript,date1}=this;
    //console.log( typeof this.upload);
    if(nameMovie ==''||trailer == ''||upload ==''||descript ==''||date1==''){
      this.messageToastService.shareMessage.next(
        {severity:'warn', summary: 'Warn', detail: 'Please check the missing information'}
      )
    }else{
      let custom = replaceVNtext(this.nameMovie).replace(/\s/igm,'-');
      let dateFomat = moment(this.date1).format('DD-MM-yyyy');
      let data = {
          maPhim	: 0,
          tenPhim	:nameMovie,
          biDanh	:custom,
          trailer	:trailer,
          hinhAnh	: upload,
          moTa : descript,
          maNhom: 'GP09',
          ngayKhoiChieu: dateFomat,
          danhGia:	8
        }
      this.dataUpAPI = {...data}
      this.messageService.clear();
      this.messageService.add({key: 'uploadMovie', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
    }
  }
  onConfirm() {
    this.messageService.clear('uploadMovie');
    let form_data = new FormData();
    for (let key in this.dataUpAPI) {
      form_data.append(key, this.dataUpAPI[key]);
      //console.log(`${key}:`, form_data.get(key));
    }
    this.movieService.UploadMovieAPI(form_data).subscribe(
      res=>{
        console.log(res)
        if(res.Error){
          this.messageToastService.shareMessage.next(
            {severity:'error', summary: 'Error', detail: `${res.Error}`}
          )
        }else{
          this.messageToastService.shareMessage.next(
            {severity:'success', summary: 'Success', detail: 'Upload movie successfull !'}
          )
          const a11 = setTimeout(() => {
            window.location.reload()
            clearTimeout(a11);
          }, 5000);

        }
      }
    )
  }
  onReject() {
    this.messageService.clear('uploadMovie');
  }
}
// test(){
//   let a = moment(this.date1).format('DD-MM-yyyy hh:mm:ss');
//   console.log(new Date(this.date1).toJSON());
//   console.log(Date.parse(this.date1).toString());
//   console.log('a', a);
//   console.log('file',this.upload)
// }
//https://www.youtube.com/embed/ple07h3PX4A

import { Component, OnInit,Input,OnChanges } from '@angular/core';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"
import { replaceVNtext } from 'src/app/utils/replace';

@Component({
  selector: 'app-show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.scss']
})
export class ShowTimeComponent implements OnInit,OnChanges {
  @Input() time:any;
  cols: any[];
  exportColumns: any[];
  //dataPDF:any[]=[];
  dataSetupPDF:any[]=[];

  constructor() { }
  ngOnInit(): void {

    this.cols = [
      { header: 'Name', field: 'Name' },
      { header: 'Code', field: 'Code' },
      { header: 'Fare', field: 'Fare' },
      { header: 'Date', field: 'Date' },
      { header: 'System', field: 'System' },
      { header: 'Theater', field: 'Theater' },
      { header: 'Room', field: 'Room' }
    ];
    this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
  }
  ngOnChanges(): void {
    console.log(this.time);
    //this.dataPDF=[...this.time]
    this.time?.forEach((el) => {
      const date1 = new Date(el.ngayChieuGioChieu);
      const date2 = date1.toLocaleString('en-US');
      let dataTemp = {
        Name: replaceVNtext(el.tenPhim),
        Code: el.maLichChieu,
        Fare: el.giaVe,
        Date: date2,
        System: replaceVNtext(el.thongTinRap.tenHeThongRap),
        Theater: replaceVNtext(el.thongTinRap.tenCumRap),
        Room: replaceVNtext(el.thongTinRap.tenRap)
      }
      this.dataSetupPDF.push(dataTemp)
    });
  }

  exportPdf() {
    const doc = new jsPDF('p','pt');
    autoTable(doc, {
      columns: this.exportColumns,
      body: this.dataSetupPDF,
      didDrawPage: (dataArg) => {
      doc.text('ShowTime Movie', dataArg.settings.margin.top, 20);
      }
    });
    doc.save('ShowTime.pdf');
  }


exportExcel() {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.time);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "products");
    });
}

saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
}

}

// giaVe: 75000
// maLichChieu: 17341
// maPhim: 1337
// maRap: 490
// ngayChieuGioChieu: "2019-01-01T10:10:00"
// tenPhim: "Siêu Thú Cuồng Nộ "
// thoiLuong: 120
// thongTinRap:
// maCumRap: "bhd-star-cineplex-vincom-le-van-viet"
// maHeThongRap: "BHDStar"
// maRap: 490
// tenCumRap: "BHD Star Cineplex - Vincom Lê Văn Việt"
// tenHeThongRap: "BHD Star Cineplex"
// tenRap: "Rạp 10"

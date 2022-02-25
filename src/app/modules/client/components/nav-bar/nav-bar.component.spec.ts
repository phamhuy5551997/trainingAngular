import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { NavBarComponent } from './nav-bar.component';
import { PrimeNgModule } from './../../../../core/shared/prime-ng/prime-ng.module';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule,PrimeNgModule ],
      declarations: [  NavBarComponent ],
      providers: [ /*… */ ],
      schemas:[
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should no data bookmark',()=>{
    const data = component.dataBookmark = []
    expect(data).toEqual([]);
    expect(data).toBeTruthy();
  })

  it('should delete item bookmark function',()=>{
    const data = component.dataBookmark =[
      {
          "maPhim": 1367,
          "tenPhim": "Cá mập siêu bạo chúa",
          "biDanh": "ca-map-sieu-bao-chua",
          "trailer": "https://www.youtube.com/embed/DNPysRuZqaY",
          "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/ca-map-sieu-bao-chua_gp09.jpg",
          "moTa": "Một thợ lặn cứu hộ đã về hưu được thôi thúc tái xuất để thực hiện một công việc nữa, đó là cứu bạn bè khỏi cá mập Megalodon khổng lồ, được cho là đã tuyệt chủng từ lâu.",
          "maNhom": "GP09",
          "ngayKhoiChieu": "2021-10-16T12:53:42.257",
          "danhGia": 10
      },
      {
          "maPhim": 1352,
          "tenPhim": "Bloodshot 1",
          "biDanh": "bloodshot-1",
          "trailer": "https://www.youtube.com/embed/vOUVVDWdXbo",
          "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/bloodshot_gp09.jpg",
          "moTa": "Siêu anh hùng Bloodshot là bộ phim được định hình mở màn cho loạt phim lấy bối cảnh trong vũ trụ điện ảnh Valiant Comics. Nhân vật chính của phim là tài tử Vin Diesel, với đạo diễn  David SF Wilson kết hợp cùng kịch bản của Jeff Wadlow và Eric Heisserer. Phim xoay quanh câu chuyện của một thuỷ quân lục chiến đã bị giết trong lúc hành động, tuy nhiên anh đã được hồi sinh với siêu năng lực bởi một tổ chức ngầm muốn dùng anh như một vũ khí để loại trừ các đối thủ.",
          "maNhom": "GP09",
          "ngayKhoiChieu": "2021-09-18T16:09:43.097",
          "danhGia": 10
      },
      {
          "maPhim": 1337,
          "tenPhim": "Siêu Thú Cuồng Nộ ",
          "biDanh": "sieu-thu-cuong-no",
          "trailer": "https://www.youtube.com/embed/RDAZZh22qzI",
          "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/sieu-thu-cuong-no_gp09.png",
          "moTa": "Phim theo chân 3 mẫu vsật chứa mầm bệnh rơi xuống từ phòng thí nghiệm ngoài không gian của tập đoàn Energyne tại ba nơi trên trái đất. Mầm bệnh khiến thú vật biến đổi gen và trở nên khổng lồ và có những đặc tính của các loại thú khác. Một mẫu rơi trúng khu bảo tồn nơi nhà linh trưởng học Davis Okoye (The Rock) đang làm việc và chú khỉ bạch tạng George không may hít phải mầm bệnh này. Hai mẫu còn lại dính phải một con chó sói và một con cá sấu khiến chúng biến đổi. Ba con siêu thú này bị điều khiển và gây tổn hại nặng cho các thành phố, Davis phải tìm cách ngăn cản trước khi quân đội dùng vũ khí hạng nặng để hạ gục chúng, trong đó có chú khỉ George - bạn của anh.",
          "maNhom": "GP09",
          "ngayKhoiChieu": "2021-10-16T12:52:25.347",
          "danhGia": 10
      }
    ]
    localStorage.setItem('testCaseDelete',JSON.stringify(data))
    const dataDelete = data[0];
    component.showConfirm(dataDelete);
    expect(component.movieDelete).toEqual(dataDelete);
    //console.log(data);
  });

  it('should popUp accept delete item function',()=>{
    const data = component.dataBookmark =[
      {
          "maPhim": 1367,
          "tenPhim": "Cá mập siêu bạo chúa",
          "biDanh": "ca-map-sieu-bao-chua",
          "trailer": "https://www.youtube.com/embed/DNPysRuZqaY",
          "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/ca-map-sieu-bao-chua_gp09.jpg",
          "moTa": "Một thợ lặn cứu hộ đã về hưu được thôi thúc tái xuất để thực hiện một công việc nữa, đó là cứu bạn bè khỏi cá mập Megalodon khổng lồ, được cho là đã tuyệt chủng từ lâu.",
          "maNhom": "GP09",
          "ngayKhoiChieu": "2021-10-16T12:53:42.257",
          "danhGia": 10
      },
      {
          "maPhim": 1352,
          "tenPhim": "Bloodshot 1",
          "biDanh": "bloodshot-1",
          "trailer": "https://www.youtube.com/embed/vOUVVDWdXbo",
          "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/bloodshot_gp09.jpg",
          "moTa": "Siêu anh hùng Bloodshot là bộ phim được định hình mở màn cho loạt phim lấy bối cảnh trong vũ trụ điện ảnh Valiant Comics. Nhân vật chính của phim là tài tử Vin Diesel, với đạo diễn  David SF Wilson kết hợp cùng kịch bản của Jeff Wadlow và Eric Heisserer. Phim xoay quanh câu chuyện của một thuỷ quân lục chiến đã bị giết trong lúc hành động, tuy nhiên anh đã được hồi sinh với siêu năng lực bởi một tổ chức ngầm muốn dùng anh như một vũ khí để loại trừ các đối thủ.",
          "maNhom": "GP09",
          "ngayKhoiChieu": "2021-09-18T16:09:43.097",
          "danhGia": 10
      },
      {
          "maPhim": 1337,
          "tenPhim": "Siêu Thú Cuồng Nộ ",
          "biDanh": "sieu-thu-cuong-no",
          "trailer": "https://www.youtube.com/embed/RDAZZh22qzI",
          "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/sieu-thu-cuong-no_gp09.png",
          "moTa": "Phim theo chân 3 mẫu vsật chứa mầm bệnh rơi xuống từ phòng thí nghiệm ngoài không gian của tập đoàn Energyne tại ba nơi trên trái đất. Mầm bệnh khiến thú vật biến đổi gen và trở nên khổng lồ và có những đặc tính của các loại thú khác. Một mẫu rơi trúng khu bảo tồn nơi nhà linh trưởng học Davis Okoye (The Rock) đang làm việc và chú khỉ bạch tạng George không may hít phải mầm bệnh này. Hai mẫu còn lại dính phải một con chó sói và một con cá sấu khiến chúng biến đổi. Ba con siêu thú này bị điều khiển và gây tổn hại nặng cho các thành phố, Davis phải tìm cách ngăn cản trước khi quân đội dùng vũ khí hạng nặng để hạ gục chúng, trong đó có chú khỉ George - bạn của anh.",
          "maNhom": "GP09",
          "ngayKhoiChieu": "2021-10-16T12:52:25.347",
          "danhGia": 10
      }
    ]
    const dataDelete = data[0];
    component.showConfirm(dataDelete);
    const result = '';
    component.onConfirm();
    expect(component.movieDelete).toEqual(result);
  })

});

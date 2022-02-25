

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import { SubStringPipe } from './../../../../core/pipes/sub-string/sub-string.pipe';
import { PrimeNgModule } from './../../../../core/shared/prime-ng/prime-ng.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemComponent,SubStringPipe ],
      imports:[
        PrimeNgModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers:[SubStringPipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

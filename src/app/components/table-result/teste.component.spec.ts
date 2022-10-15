import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tableResultComponent } from './table-result.component';

describe('tableResultComponent', () => {
  let component: tableResultComponent;
  let fixture: ComponentFixture<tableResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tableResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(tableResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

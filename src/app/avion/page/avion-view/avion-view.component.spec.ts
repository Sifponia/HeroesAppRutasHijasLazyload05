import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvionViewComponent } from './avion-view.component';

describe('AvionViewComponent', () => {
  let component: AvionViewComponent;
  let fixture: ComponentFixture<AvionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvionViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

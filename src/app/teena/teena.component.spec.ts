import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeenaComponent } from './teena.component';

describe('TeenaComponent', () => {
  let component: TeenaComponent;
  let fixture: ComponentFixture<TeenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuskComponent } from './tusk.component';

describe('TuskComponent', () => {
  let component: TuskComponent;
  let fixture: ComponentFixture<TuskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirexeComponent } from './direxe.component';

describe('DirexeComponent', () => {
  let component: DirexeComponent;
  let fixture: ComponentFixture<DirexeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirexeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypageAttributesComponent } from './typage-attributes.component';

describe('TypageAttributesComponent', () => {
  let component: TypageAttributesComponent;
  let fixture: ComponentFixture<TypageAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypageAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypageAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

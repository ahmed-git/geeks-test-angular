import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypageAttributesItemComponent } from './typage-attributes-item.component';

describe('TypageAttributesItemComponent', () => {
  let component: TypageAttributesItemComponent;
  let fixture: ComponentFixture<TypageAttributesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypageAttributesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypageAttributesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaResultPage } from './corona-result.page';

describe('CoronaResultPage', () => {
  let component: CoronaResultPage;
  let fixture: ComponentFixture<CoronaResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaResultPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

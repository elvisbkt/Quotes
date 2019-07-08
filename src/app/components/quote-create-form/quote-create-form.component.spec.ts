import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteCreateFormComponent } from './quote-create-form.component';

describe('QuoteCreateFormComponent', () => {
  let component: QuoteCreateFormComponent;
  let fixture: ComponentFixture<QuoteCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

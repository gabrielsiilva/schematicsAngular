import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogPadraoComponent } from './log-padrao.component';

describe('LogPadraoComponent', () => {
  let component: LogPadraoComponent;
  let fixture: ComponentFixture<LogPadraoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogPadraoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

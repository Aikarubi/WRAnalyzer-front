import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzerLayoutComponent } from './analyzer-layout.component';

describe('AnalyzerLayoutComponent', () => {
  let component: AnalyzerLayoutComponent;
  let fixture: ComponentFixture<AnalyzerLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyzerLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyzerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

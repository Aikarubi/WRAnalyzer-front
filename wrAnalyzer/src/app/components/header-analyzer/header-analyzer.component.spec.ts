import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAnalyzerComponent } from './header-analyzer.component';

describe('HeaderAnalyzerComponent', () => {
  let component: HeaderAnalyzerComponent;
  let fixture: ComponentFixture<HeaderAnalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderAnalyzerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForExampleComponent } from './for-example.component';

describe('ForExampleComponent', () => {
  let component: ForExampleComponent;
  let fixture: ComponentFixture<ForExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

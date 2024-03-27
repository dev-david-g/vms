import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmsDetailsComponent } from './vms-details.component';

describe('VmsDetailsComponent', () => {
  let component: VmsDetailsComponent;
  let fixture: ComponentFixture<VmsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VmsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VmsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmsResourceUsageComponent } from './vms-resource-usage.component';

describe('VmsResourceUsageComponent', () => {
  let component: VmsResourceUsageComponent;
  let fixture: ComponentFixture<VmsResourceUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VmsResourceUsageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VmsResourceUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

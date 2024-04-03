import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmsResourceUsageWithSignalsComponent } from './vms-resource-usage-with-signals.component';

describe('VmsResourceUsageWithSignalsComponent', () => {
  let component: VmsResourceUsageWithSignalsComponent;
  let fixture: ComponentFixture<VmsResourceUsageWithSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VmsResourceUsageWithSignalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VmsResourceUsageWithSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

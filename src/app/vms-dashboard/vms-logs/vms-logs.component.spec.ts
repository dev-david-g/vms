import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmsLogsComponent } from './vms-logs.component';

describe('VmsLogsComponent', () => {
  let component: VmsLogsComponent;
  let fixture: ComponentFixture<VmsLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VmsLogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VmsLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

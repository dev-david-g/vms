import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmsDetailsDeleteComponent } from './vms-details-delete.component';

describe('VmsDetailsDeleteComponent', () => {
  let component: VmsDetailsDeleteComponent;
  let fixture: ComponentFixture<VmsDetailsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VmsDetailsDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VmsDetailsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

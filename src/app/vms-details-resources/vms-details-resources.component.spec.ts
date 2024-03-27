import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmsDetailsResourcesComponent } from './vms-details-resources.component';

describe('VmsDetailsResourcesComponent', () => {
  let component: VmsDetailsResourcesComponent;
  let fixture: ComponentFixture<VmsDetailsResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VmsDetailsResourcesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VmsDetailsResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

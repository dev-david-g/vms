import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmsDetailsViewComponent } from './vms-details-view.component';

describe('VmsDetailsViewComponent', () => {
  let component: VmsDetailsViewComponent;
  let fixture: ComponentFixture<VmsDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VmsDetailsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VmsDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

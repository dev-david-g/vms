import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmsDetailsEditComponent } from './vms-details-edit.component';

describe('VmsDetailsEditComponent', () => {
  let component: VmsDetailsEditComponent;
  let fixture: ComponentFixture<VmsDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VmsDetailsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VmsDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentVmsComponent } from './recent-vms.component';

describe('RecentVmsComponent', () => {
  let component: RecentVmsComponent;
  let fixture: ComponentFixture<RecentVmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentVmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentVmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

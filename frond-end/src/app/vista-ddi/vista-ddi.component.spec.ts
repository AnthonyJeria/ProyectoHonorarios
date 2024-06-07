import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDDIComponent } from './vista-ddi.component';

describe('VistaDDIComponent', () => {
  let component: VistaDDIComponent;
  let fixture: ComponentFixture<VistaDDIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaDDIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaDDIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

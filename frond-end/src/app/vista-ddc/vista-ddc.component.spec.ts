import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDDCComponent } from './vista-ddc.component';

describe('VistaDDCComponent', () => {
  let component: VistaDDCComponent;
  let fixture: ComponentFixture<VistaDDCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaDDCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaDDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

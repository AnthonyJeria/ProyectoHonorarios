import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDDAComponent } from './vista-dda.component';

describe('VistaDDAComponent', () => {
  let component: VistaDDAComponent;
  let fixture: ComponentFixture<VistaDDAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaDDAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaDDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAprovadorComponent } from './vista-aprovador.component';

describe('VistaAprovadorComponent', () => {
  let component: VistaAprovadorComponent;
  let fixture: ComponentFixture<VistaAprovadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaAprovadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaAprovadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

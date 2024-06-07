import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaVisualizadorComponent } from './vista-visualizador.component';

describe('VistaVisualizadorComponent', () => {
  let component: VistaVisualizadorComponent;
  let fixture: ComponentFixture<VistaVisualizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaVisualizadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaVisualizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { HerramientaService } from './herramientas.service';


describe('HerramientasService', () => {
  let service: HerramientaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HerramientaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

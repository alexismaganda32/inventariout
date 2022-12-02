import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MultasService } from '../../services/multas-service';

@Component({
  selector: 'app-multa-detalle-page',
  templateUrl: './multa-detalle-page.component.html',
  styleUrls: ['./multa-detalle-page.component.scss'],
})
export class MultaDetallePageComponent implements OnInit {
  @Input() id: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private multasService: MultasService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      console.log(id);
      this.multasService
        .getMultaPorId(id)
        .subscribe((multa) => console.log(multa));
    });
  }
}

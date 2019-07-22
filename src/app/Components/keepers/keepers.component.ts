import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'keepers',
  templateUrl: './keepers.component.html',
})
export class KeepersComponent implements OnInit {
  title = 'cuidadores';

  ngOnInit() {
      console.log('Componente keepers cargado');
  }
}
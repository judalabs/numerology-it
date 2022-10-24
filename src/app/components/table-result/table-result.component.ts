import { Component } from '@angular/core';
import { BaseResultComponent } from '../BaseResultComponent';

@Component({
  selector: 'app-table-result',
  templateUrl: './table-result.component.html',
  styleUrls: ['./table-result.component.scss']
})
export class TableResultComponent extends BaseResultComponent {
  
  constructor() {
    super();
  }
}

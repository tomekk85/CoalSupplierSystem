import {Component} from '@angular/core';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'CoalSupplierSystem';

  constructor(private dataService: DataService) {
  }

  toggle(): void {
    this.dataService.toggle();
  }
}

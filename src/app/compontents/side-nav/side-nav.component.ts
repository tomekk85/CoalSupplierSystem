import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  constructor(private dataService: DataService) {
  }

  isOpen = true;

  ngOnInit(): void {
    this.dataService.getValue().subscribe(data => {
      this.isOpen = data;
    });
  }
}

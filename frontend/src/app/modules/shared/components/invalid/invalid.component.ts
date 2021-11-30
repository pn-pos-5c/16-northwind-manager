import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-invalid',
  templateUrl: './invalid.component.html',
  styleUrls: ['./invalid.component.scss']
})
export class InvalidComponent implements OnInit {
  route = '';

  constructor() {
  }

  ngOnInit(): void {
    this.route = window.location.pathname;
  }

}

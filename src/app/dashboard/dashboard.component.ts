import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})


export class DashboardComponent implements OnInit {
  
  constructor() { }

  showDetails: boolean = false;
  rowData = {};

  ngOnInit(): void {
  }

  toggleDetails(row: any) {
    /* console.log(row); */
    if (this.rowData == row) {
      this.showDetails = !this.showDetails;
    } else {
      this.showDetails = true;
    }
    this.rowData = row;
  }
}

import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})


export class DashboardComponent implements OnInit, AfterViewInit  {

  constructor() { }

  showDetails: boolean = false;
  rowData = {};

  ngOnInit(): void {


  }

  ngAfterViewInit() {

      $('.accordion-toggle').on('click', (index) =>{
        $('.hide-table-padding').hide();
        $(this).next('tr').find('.hide-table-padding').show();
        console.log($(this).next());


      });
  }

  toggleDetails(row: any) {

    if (this.rowData == row) {
      this.showDetails = !this.showDetails;
    } else {
      this.showDetails = true;
    }
    this.rowData = row;
  }


}



import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})


export class DashboardComponent implements OnInit, AfterViewInit  {

  invalidDates: moment.Moment[] = [moment().add(2, 'days'), moment().add(3, 'days'), moment().add(5, 'days')];
  isInvalidDate = (m: moment.Moment) =>  {
    return this.invalidDates.some(d => d.isSame(m, 'day') )
  }
  selected: {start: Moment, end: Moment};
  selected_rec: {start: Moment, end: Moment};
  showDetails: boolean = false;
  rowData = {};

  constructor() { }

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



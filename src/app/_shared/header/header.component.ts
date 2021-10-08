import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  selected: {start: Moment, end: Moment};
  searchFilter: string;

  maxdate = moment();
  ranges: any = {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  }
  invalidDates: moment.Moment[] = [moment().add(2, 'days'), moment().add(3, 'days'), moment().add(5, 'days')];

  isInvalidDate = (m: moment.Moment) =>  {
    return this.invalidDates.some(d => d.isSame(m, 'day') )
  }

  constructor() { }

  ngOnInit(): void {
    this.getSearchVal(1, "All");
    //jQuery(document).ready(function(){ alert ('1')})


  }

  getSearchVal(type: number, filter: string) {
    console.log(filter);

    this.searchFilter = filter;
  }
}

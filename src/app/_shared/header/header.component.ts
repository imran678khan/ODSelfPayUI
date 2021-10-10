import { SideBarService } from './../_services/side-bar.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';
import { DaterangepickerDirective } from 'ngx-daterangepicker-material';

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
  isShown: Boolean = false;
  inline = true;
  @ViewChild('toggleSidebar') toggleSidebar: ElementRef;
  @ViewChild(DaterangepickerDirective, { static: false }) pickerDirective: DaterangepickerDirective;


  constructor(
    private sideNavService: SideBarService
    ) {  }

  ngOnInit(): void {
    this.getSearchVal(1, "All");
  }

  getSearchVal(type: number, filter: string) {
    this.searchFilter = filter;
  }

  public toggleSideBar(){
    this.sideNavService.toggleSidebar.emit();
  }

  openDatepicker() {
    this.pickerDirective.open();
  }

}

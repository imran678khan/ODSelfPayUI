import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AfterViewInit, Component, OnInit, TemplateRef } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


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

  collapsed1: boolean = true;
  collapsed2: boolean = true;
  dropdownList: any[] =[];
  selectedItems : any[] = [];

  dropdownSettings:IDropdownSettings={};

  public modalRef: BsModalRef;


  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {

    this.dropdownList = [
      { item_id: 1, item_text: 'Item1' },
      { item_id: 2, item_text: 'Item2' },
      { item_id: 3, item_text: 'Item3' },
      { item_id: 4, item_text: 'Item4' },
      { item_id: 5, item_text: 'Item5' }
    ];

    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
    };

  }

  ngAfterViewInit() {

      $('.accordion-toggle').on('click', (index) =>{
        $('.hide-table-padding').hide();
        $(this).next('tr').find('.hide-table-padding').show();
        console.log($(this).next());


      });
  }


  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  toggleDetails(row: any) {

    if (this.rowData == row) {
      this.showDetails = !this.showDetails;
    } else {
      this.showDetails = true;
    }
    this.rowData = row;
  }

  reviewAgreement(modalTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modalTemplate,
      {
        class: 'modal-dialog-centered modal-md',
        backdrop: 'static',
        keyboard: true
      }
    );
  }



}



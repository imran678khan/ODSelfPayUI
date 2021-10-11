import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html'
})
export class DocumentComponent implements OnInit {
  pdfSrc = "../../../assets/img/sample.pdf";
  constructor() { }

  ngOnInit(): void {
  }

}

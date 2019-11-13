import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-brand-link',
  templateUrl: './brand-link.component.html',
  styleUrls: ['./brand-link.component.scss']
})
export class BrandLinkComponent implements OnInit {

  @Input() brand: string;
  @Input() brandImg: string;
  @Input() brandLink: string;
  

  constructor() { }

  ngOnInit() {
  }

}

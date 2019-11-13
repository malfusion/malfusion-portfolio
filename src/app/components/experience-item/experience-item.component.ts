import { Component, OnInit, Input } from '@angular/core';

export interface Experience {
  title: string;
  company: string;
  from: string;
  to: string;
  technologies: string[];
  description: string[];
}

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss']
})
export class ExperienceItemComponent implements OnInit {
  @Input() experience: Experience;
  expanded: boolean = false;
  constructor() { }

  ngOnInit() {
    

  }

  expandDescription(){
    this.expanded = !this.expanded
  }

}

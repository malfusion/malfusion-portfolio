import { Component, OnInit, Input } from '@angular/core';
import { Experience } from '../experience-item/experience-item.component';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent implements OnInit {
  @Input() title: string;
  @Input() experiences: Experience[] = []

  constructor() {                     
                       
                       
  }

  ngOnInit() {

  }

}

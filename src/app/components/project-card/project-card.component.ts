import { Component, OnInit, Input } from '@angular/core';

export interface Project{
  title: string;
  description: string;
  link: string;
  mediatype: 'image' | 'video';
  mediasrc: string;
}


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: Project;
  constructor() { }

  ngOnInit() {
  }

}

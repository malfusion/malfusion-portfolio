import { Component, OnInit } from '@angular/core';
import { Experience } from '../experience-item/experience-item.component';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent implements OnInit {
  experiences: Experience[] = []

  constructor() { 
    this.experiences = [{
      title: 'Member of Technical Staff - Oracle Cloud',
      company: 'Oracle, Bangalore, India',
      from: 'JUL 2014',
      to: 'AUG 2015',
      technologies: ['Java', 'Weblogic Server'],
      description: [
        `Designed and prototyped the “Oracle Pod Creation Service”, one of the core components of Oracle’s cloud server provisioning pipeline,
        which takes care of resource allocation, environment setup, service installations and deployments to a publicly accessible web interface`, 
        `Implemented Delayed and Repeating Message Triggers functionality, for “Oracle Messaging Cloud Service”, in Java using ActiveMQ`]
    }]
  }

  ngOnInit() {

  }

}

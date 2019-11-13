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
            title: 'Founder and Lead Developer',
      company: 'Arktek Business Solutions Pvt Ltd, Chennai, India',
      from: 'JUN 2016',
      to: 'AUG 2019',
      technologies: ['AngularJS, Node.js, MongoDB, CouchDB, Redis, RabbitMQ, NativeScript, Elasticsearch'],
      description: [
`Founded a software development company, focused on helping industries transition from legacy software to modern solutions`,
`Focused efforts on innovating the first generation of offline-first enterprise software solutions,for use in remote areas,low connectivity
zones and internet dead zones, where fault tolerance towards data synchronisation errors are crucial`,
`Independently architected and developed an “Enterprise Warehouse Audit Management System”, with a potential client base of over
1000 Top Food and Beverage Fast-Moving Consumer Goods (FnB-FMCG) Manufacturers in the Middle East region`,
`Utilised a Polyglot Database Architecture to accommodate multiple requirements such as data synchronisation(CouchDB), fine-grained
audit permission structures, maintaining horizontal scalability (MongoDB) and efficient searchability (ElasticSearch)`,
`Built microservices including, not limited to, Issue Tracker, User/Group Management, Audit Builder, Data Loaders and Mobile Apps.`]
    },
                        {
      title: 'Freelancer - Full Stack Web Developer',
      company: 'WeatherToFly, United Kingdom',
      from: 'AUG 2018',
      to: 'AUG 2019',
      technologies: ['Angular', 'Nodejs', 'MongoDB'],
      description: [
        `Designed and prototyped the “Oracle Pod Creation Service”, one of the core components of Oracle’s cloud server provisioning pipeline,
        which takes care of resource allocation, environment setup, service installations and deployments to a publicly accessible web interface`, 
        `Implemented Delayed and Repeating Message Triggers functionality, for “Oracle Messaging Cloud Service”, in Java using ActiveMQ`]
    },
                        {
      title: 'Freelancer - Full Stack Web Developer',
      company: 'Smoothgraph Connect Co. Ltd.',
      from: 'JAN 2017',
      to: 'AUG 2018',
      technologies: ['Java', 'Weblogic Server'],
      description: [
        `Designed and prototyped the “Oracle Pod Creation Service”, one of the core components of Oracle’s cloud server provisioning pipeline,
        which takes care of resource allocation, environment setup, service installations and deployments to a publicly accessible web interface`, 
        `Implemented Delayed and Repeating Message Triggers functionality, for “Oracle Messaging Cloud Service”, in Java using ActiveMQ`]
    },
                        {
      title: 'Member of Technical Staff - Oracle Cloud',
      company: 'Oracle, Bangalore, India',
      from: 'JUL 2014',
      to: 'AUG 2015',
      technologies: ['Java', 'Weblogic Server'],
      description: [
        `Designed and prototyped the “Oracle Pod Creation Service”, one of the core components of Oracle’s cloud server provisioning pipeline,
        which takes care of resource allocation, environment setup, service installations and deployments to a publicly accessible web interface`, 
        `Implemented Delayed and Repeating Message Triggers functionality, for “Oracle Messaging Cloud Service”, in Java using ActiveMQ`]
    }];                       
                       
                       
  }

  ngOnInit() {

  }

}

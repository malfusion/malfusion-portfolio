import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  work = []
  education = []
  constructor() { }

  ngOnInit() {
    this.work = [{
        title: 'Founder and Lead Developer',
        company: 'Arktek Business Solutions Pvt Ltd, India',
        from: 'JUN 2016',
        to: 'AUG 2019',
        technologies: ['AngularJS' ,'Node.js', 'MongoDB', 'CouchDB', 'Redis', 'RabbitMQ', 'NativeScript', 'Elasticsearch'],
        description: [
        `Founded a software development company, focused on helping industries transition from legacy software to modern solutions`,
        `Focused efforts on innovating the first generation of offline-first enterprise software solutions,for use in remote areas,low connectivity zones and internet dead zones, where fault tolerance towards data synchronisation errors are crucial`,
        `Independently architected and developed an “Enterprise Warehouse Audit Management System”, with a potential client base of over 1000 Top Food and Beverage Fast-Moving Consumer Goods (FnB-FMCG) Manufacturers in the Middle East region`,
        `Utilised a Polyglot Database Architecture to accommodate multiple requirements such as data synchronisation(CouchDB), fine-grained audit permission structures, maintaining horizontal scalability (MongoDB) and efficient searchability (ElasticSearch)`,
        `Built microservices including, not limited to, Issue Tracker, User/Group Management, Audit Builder, Data Loaders and Mobile Apps.`]
        },
        {
        title: 'Full Stack Web Developer',
        company: 'WeatherToFly, United Kingdom',
        from: 'AUG 2018',
        to: 'AUG 2019',
        technologies: ['Angular', 'Node.js', 'MongoDB'],
        description: [
          `Developed a Responsive Web Application in Angular and Node.js, that assists users in finding the best travel destinations and accommodations based on a proprietary Cost-Weather based ranking algorithm`,
          `Built a Progressive Web App, allowing offline access to the results of previously performed searches, increasing customer conversion`]
        },
        {
        title: 'Full Stack Web Developer',
        company: 'Smoothgraph Connect Co. Ltd., Thailand',
        from: 'JAN 2017',
        to: 'AUG 2018',
        technologies: ['Angular', 'AngularJS', 'Node.js', 'MongoDB', 'RabbitMQ'],
        description: [
          `Developed an innovative horizontally-scalable “Realtime Customer-Vendor Messaging and Order Resolution Platform” using MongoDB and RabbitMQ, which utilised a 3-way communication mechanism involving the vendor, customer and the ecommerce company`,
          `Developed two microservices for the company, an “Invoice Generation Service” and a “On-Demand Image Conversion/Delivery Service`]
        },
        {
        title: 'Member of Technical Staff - Oracle Cloud',
        company: 'Oracle, India',
        from: 'JUL 2014',
        to: 'AUG 2015',
        technologies: ['Java', 'Weblogic Server', 'ActiveMQ', 'Oracle Database'],
        description: [
          `Designed and prototyped the “Oracle Pod Creation Service”, one of the core components of Oracle’s cloud server provisioning pipeline, which takes care of resource allocation, environment setup, service installations and deployments to a publicly accessible web interface`, 
          `Implemented Delayed and Repeating Message Triggers functionality, for “Oracle Messaging Cloud Service”, in Java using ActiveMQ`]
        },
        {
        title: 'Intern - Dream Zoo Android',
        company: 'Zynga Game Network, India',
        from: 'MAY 2012',
        to: 'AUG 2012',
        technologies: ['Java', 'Android', 'Python', '2D Game Engine'],
        description: [
          `Developed the “Customisable Animal Skins” feature in Java, for the game ‘Dream Zoo for Android’ using the AndEngine 2D Game Engine, netting a Day 1 income of $250,000`,
          `Developed a tool, in Python, to streamline the design asset integration process, reducing delivery time by 1000%, from 2 days to 4 hrs`
        ]
      }];
  this.education = [{
    title: 'Masters In Computer Science',
    company: 'Courant Institute - New York University, USA',
    from: 'AUG 2019',
    to: 'MAY 2021',
    description: [
    `Pursuing a graduate degree Computer Science with a focus on Computer Vision and Deep Learning`
    ]
    },
    {
    title: 'Bachelors in Computer Science And Engg.',
    company: 'National Institute of Technology Tiruchirappalli, India',
    from: 'AUG 2010',
    to: 'AUG 2014',
    description: [
      `Final year thesis on "Feature Selection on Medical Dataset".`
    ]
    }];
  }
}

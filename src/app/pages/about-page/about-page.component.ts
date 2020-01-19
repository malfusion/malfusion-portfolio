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
        from: 'AUG 2015',
        to: 'AUG 2019',
        technologies: ['AngularJS' ,'Node.js', 'MongoDB', 'CouchDB', 'Redis', 'RabbitMQ', 'NativeScript', 'Elasticsearch'],
        description: [
        `Founded a software development company, focused on helping industries transition from legacy software to modern solutions`,
        `Focused efforts on innovating the first generation of offline-first enterprise software solutions,for use in remote areas,low connectivity zones and internet dead zones, where fault tolerance towards data synchronisation errors are crucial`,
        `Architected and developed one of a kind offline-first “Enterprise Warehouse Audit Management System” using full stack Javascript, with a potential client base of over 1000 Top Food and Beverage Fast-Moving Consumer Goods (FnB-FMCG) Manufacturers in the Middle East region`,
        `Utilised a Polyglot Database Architecture to accommodate multiple requirements such as data synchronisation(CouchDB), fine-grained audit permission structures, maintaining horizontal scalability (MongoDB) and efficient searchability (ElasticSearch)`,
        `Implemented over 10 microservices (Node.js), 2 frontend user interfaces (Angular), an Android mobile app (Cordova), ETL data processing tools (Python), web security and optimizations`,
        `Acquired 2 years of on-premise industry experience and software engineering practices such as unit testing, devops and QA`]
        },
        {
        title: 'Full Stack Engineer',
        company: 'WeatherToFly, United Kingdom',
        from: 'AUG 2018',
        to: 'JUN 2019',
        technologies: ['Angular', 'Node.js', 'MongoDB'],
        description: [
          `Built Progressive Web App in Typescript using Angular, to help users find flights to hundreds of destinations with the best weather`,
          `Refactored Node.js backend and optimized code using a caching layer for Weather API responses, reducing API costs by over 50x`,
          `Derived usage insights from analytics and customer feedback, and incorporated offline access, boosting conversion by over 500%`,
          `Set up continuous integration and deployment using Git, Netlify and StriderCI, reducing production deployment time to 1 minute`]
        },
        {
        title: 'Full Stack Web Developer',
        company: 'Smoothgraph Connect Co. Ltd., Thailand',
        from: 'JAN 2017',
        to: 'AUG 2018',
        technologies: ['Angular', 'AngularJS', 'Node.js', 'MongoDB', 'RabbitMQ'],
        description: [
          `Architected a “Real-time Messaging Platform” in Node.js for 3 way communication between the vendor, customer and the company`,
          `Coordinated with an offshore team of 4 to integrate with client's authentication backend, via a server-side API to the SQL database`,
          `Deployed a Websocket cluster backed by Redis Pub/Sub and RabbitMQ, and scaled the platform to 100,000 concurrent users`,
          `Developed two microservices for the company, an “Invoice Generation Service” and a “On-Demand Image Conversion/Delivery Service`]
        },
        {
        title: 'Member of Technical Staff - Oracle Cloud',
        company: 'Oracle, India',
        from: 'JUL 2014',
        to: 'AUG 2015',
        technologies: ['Java', 'Weblogic Server', 'ActiveMQ', 'Oracle Database'],
        description: [
          `Designed the “Oracle Pod Creation Service” in 3 weeks, a crucial component of Oracle’s cloud infrastructure provisioning pipeline`,
          `Spearheaded team of 2 and launched prototype in 2 months, enabling automated app resource allocation, setup and deployment`,
          `Implemented 2 features for “Oracle Messaging Service”: Delayed Triggers and Repeating Triggers, in Java using ActiveMQ`,
          `Conducted 1 month long usability study and use case analysis on using Docker and Kubernetes for “Oracle Task Scheduler Service”`]
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
    `Pursuing a graduate degree Computer Science with a focus on Computer Vision and Deep Learning`,
    `Current Courses: Programming Languages, Operating Systems, Computer Vision, Algorithms, Big Data Science, Computer Security`
    ]
    },
    {
    title: 'Bachelors in Computer Science And Engg.',
    company: 'National Institute of Technology Tiruchirappalli, India',
    from: 'AUG 2010',
    to: 'AUG 2014',
    description: [
      `Final year thesis on "Feature Selection on Medical Dataset"`
    ]
    }];
  }
}

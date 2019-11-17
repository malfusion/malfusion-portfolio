import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/components/project-card/project-card.component';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  
  projects: Project[];
  
  constructor() { 
    this.projects = [{
      title: "Autocompleting Terminal",
      description: "An autocompleting terminal that uses a Trie to suggest a word match using the history of the terminal",
      link: "https://github.com/malfusion/autocomplete-terminal",
      mediatype: "image",
      mediasrc: "https://github.com/malfusion/autocomplete-terminal/raw/master/docs/autocomplete-terminal.png"
    },{
      title: "Furnace - heatmap visualization",
      description: "A Heatmap Visualizer for Video Feeds written in Python",
      link: "https://github.com/malfusion/furnace",
      mediatype: "image",
      mediasrc: "https://camo.githubusercontent.com/a6cd6e06c96396ae0f0d991f16669089addc318a/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f316a5378427455637352492f302e6a7067"
    },{
      title: "Jasper2d - Javascript 2d Game Engine",
      description: "An Object-Behavior Based 2D Game Engine for Javascript",
      link: "https://github.com/malfusion/JasperEngine-2D",
      mediatype: "image",
      mediasrc: "https://github.com/malfusion/JasperEngine-2D/raw/master/assets/sample2.png"
    }];
  }
  
  ngOnInit() {

  }

}
